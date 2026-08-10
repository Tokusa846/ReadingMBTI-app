document.addEventListener("DOMContentLoaded", () => {

  const bookForm = document.getElementById("book-form");
  const formMessage = document.getElementById("form-message");

  const conversationArea =
    document.getElementById("conversation-area");

  const conductorResponse =
    document.getElementById("conductor-response");

  bookForm.addEventListener("submit", async (event) => {

    // 通常のフォーム送信を止める
    event.preventDefault();

    const title =
      document.getElementById("book-title").value.trim();

    const author =
      document.getElementById("book-author").value.trim();

    const impression =
      document.getElementById("book-impression").value.trim();

    const submitButton =
      document.getElementById("start-conductor");


    // ----------------------------
    // 本の情報をまとめる
    // ----------------------------

    const bookData = {
      title,
      author,
      impression
    };

    console.log("登録された本：", bookData);


    // ----------------------------
    // AIに送る文章を作る
    // ----------------------------

    const message = `
読んだ本を登録します。

本のタイトル：
${title}

著者：
${author || "未入力"}

この本を読んで最初に思い浮かんだこと：
${impression}
    `.trim();


    // ----------------------------
    // 通信開始
    // ----------------------------

    submitButton.disabled = true;

    formMessage.textContent =
      "コンダクターが考えています……";


    try {

      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: message
        }),
      });


      const data = await response.json();


      if (!response.ok) {

        throw new Error(
          data.error ?? "通信に失敗しました。"
        );

      }


      // ----------------------------
      // AIの返答を表示
      // ----------------------------

      conductorResponse.textContent =
        data.reply ?? "返答を取得できませんでした。";

      conversationArea.hidden = false;

      formMessage.textContent = "";


    } catch (error) {

      console.error(
        "コンダクターとの通信エラー：",
        error
      );

      formMessage.textContent =
        error instanceof Error
          ? error.message
          : "エラーが発生しました。";


    } finally {

      submitButton.disabled = false;

    }

  });

});