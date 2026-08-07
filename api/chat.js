import { conductorCore } from "../prompts/Conductor_core.js";
import { conductorK } from "../prompts/type-K.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body.message?.trim();

    const userType = "KARS";

    const developerPrompt = `
    ${conductorCore}

    ${conductorK}

    # 現在のユーザー情報

    診断結果：${userType}

    この診断結果は参考情報としてのみ使用してください。
    今回のユーザーの発言を最優先してください。
    `;


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
              role: "system",
              content: conductorCore,
            },
            {
              role: "system",
              content: conductorK,
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
