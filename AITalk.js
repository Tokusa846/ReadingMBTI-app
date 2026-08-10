// ----------------------------
// 会話状態
// ----------------------------
let conversationStep = 0;
let conversationHistory = [];
let currentBook = null;

// ----------------------------
// 画面初期化
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {

  const bookForm = 
    document.getElementById("book-form");

  const formMessage = 
    document.getElementById("form-message");

  const conversationArea =
    document.getElementById("conversation-area");
  
  const conversationForm =
    document.getElementById("conversation-form");

  const conversationInput =
    document.getElementById("conversation-input");

  const conversationSend =
    document.getElementById("conversation-send");

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
    // 今回話す本の情報を保存
    // ----------------------------

    currentBook = {
      title,
      author,
      impression
    };

    // ----------------------------
    // 新しい会話として履歴を初期化
    // ----------------------------

    conversationHistory = [
      {
        role: "user",
        content: `
    読んだ本を登録します。

    本のタイトル：
    ${title}

    著者：
    ${author || "未入力"}

    この本を読んで最初に思い浮かんだこと：
    ${impression}
        `.trim()
      }
    ];

    // 会話の最初から開始
    conversationStep = 0;

    console.log("今回の本：", currentBook);
    console.log("会話履歴：", conversationHistory);

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
          history: conversationHistory,
          step: conversationStep
        }),
      });


      const responseText = await response.text();

      console.log("APIステータス:", response.status);
      console.log("APIからの生データ:", responseText);

      let data;

      try {
        data = JSON.parse(responseText);
      } catch (error) {
        throw new Error(
          `APIからJSON以外の返答が返されました：${responseText}`
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error ?? "通信に失敗しました。"
        );
      }


      // ----------------------------
      // AIの返答を表示
      // ----------------------------

      const reply =
      data.reply ?? "返答を取得できませんでした。";

      // AIの返答を会話履歴に追加
      conversationHistory.push({
        role: "assistant",
        content: reply
      });

      // 画面にAIの返答を表示
      addMessage("conductor", reply);

      // 会話エリアを表示
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

  // ----------------------------
  // コンダクターへの回答送信
  // ----------------------------

  conversationForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      const userMessage =
        conversationInput.value.trim();

      if (!userMessage) {
        return;
      }

      // ----------------------------
      // ユーザーの回答を画面へ表示
      // ----------------------------

      addMessage("user", userMessage);

      // ----------------------------
      // 会話履歴へ追加
      // ----------------------------

      conversationHistory.push({
        role: "user",
        content: userMessage
      });

      // ----------------------------
      // 次の会話段階へ進む
      // ----------------------------

      conversationStep++;

      console.log(
        "現在のstep：",
        conversationStep
      );

      console.log(
        "現在の会話履歴：",
        conversationHistory
      );

      // 入力欄を空にする
      conversationInput.value = "";

      // 連打防止
      conversationSend.disabled = true;

      conversationSend.textContent =
        "コンダクターが考えています……";

      try {

        // ----------------------------
        // AIへ会話履歴を送信
        // ----------------------------

        const response =
          await fetch("/api/chat", {

            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              history: conversationHistory,
              step: conversationStep
            }),

          });

        const responseText =
          await response.text();

        let data;

        try {
          data = JSON.parse(responseText);
        } catch (error) {
          throw new Error(
            `APIからJSON以外の返答が返されました：${responseText}`
          );
        }

        if (!response.ok) {
          throw new Error(
            data.error ??
            "通信に失敗しました。"
          );
        }

        // ----------------------------
        // AI返答を取得
        // ----------------------------

        const reply =
          data.reply ??
          "返答を取得できませんでした。";

        // 会話履歴へ追加
        conversationHistory.push({
          role: "assistant",
          content: reply
        });

        // 画面へ表示
        addMessage(
          "conductor",
          reply
        );

        // ----------------------------
        // step 2なら会話終了
        // ----------------------------

        if (conversationStep >= 2) {

          conversationForm.hidden = true;

        }

      } catch (error) {

        console.error(
          "コンダクターとの通信エラー：",
          error
        );

        addMessage(
          "conductor",
          "通信中にエラーが発生しました。"
        );

      } finally {

        conversationSend.disabled = false;

        conversationSend.textContent =
          "送信";

      }

    }
  );

});

function addMessage(sender, text) {

  const conversationLog =
    document.getElementById("conversation-log");

  const messageElement =
    document.createElement("div");

  if (sender === "conductor") {
    messageElement.className = "message conductor-message";
  } else {
    messageElement.className = "message user-message";
  }

  messageElement.textContent = text;

  conversationLog.appendChild(messageElement);
}
