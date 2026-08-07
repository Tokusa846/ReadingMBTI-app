export async function POST(request) {
  try {
    const body = await request.json();
    const message = body.message?.trim();

    if (!message) {
      return Response.json(
        { error: "メッセージを入力してください。" },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      console.error("OPENAI_API_KEY is not configured.");

      return Response.json(
        { error: "APIキーが設定されていません。" },
        { status: 500 }
      );
    }

    const openAIResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-5-mini",
          input: [
            {
              role: "developer",
              content:
                "あなたは穏やかで丁寧な読書コンダクターです。日本語で短く返答してください。",
            },
            {
              role: "user",
              content: message,
            },
          ],
          store: false,
        }),
      }
    );

    const data = await openAIResponse.json();

    if (!openAIResponse.ok) {
      console.error("OpenAI API error:", data);

      return Response.json(
        {
          error:
            data?.error?.message ??
            "OpenAI APIとの通信に失敗しました。",
        },
        { status: openAIResponse.status }
      );
    }

    const reply = data.output
      ?.flatMap((item) => item.content ?? [])
      .filter((content) => content.type === "output_text")
      .map((content) => content.text)
      .join("\n")
      .trim();

    if (!reply) {
      console.error(
        "OpenAI response did not contain output text:",
        JSON.stringify(data)
      );
    }

    return Response.json({
      reply: reply || "返答を取得できませんでした。",
    });
  } catch (error) {
    console.error("Server error:", error);

    return Response.json(
      { error: "サーバー処理中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}