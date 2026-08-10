document.addEventListener("DOMContentLoaded", () => {

  const bookForm = document.getElementById("book-form");
  const formMessage = document.getElementById("form-message");

  bookForm.addEventListener("submit", (event) => {

    // 通常のフォーム送信を止める
    event.preventDefault();

    const title =
      document.getElementById("book-title").value.trim();

    const author =
      document.getElementById("book-author").value.trim();

    const impression =
      document.getElementById("book-impression").value.trim();

    // 入力内容をまとめる
    const bookData = {
      title,
      author,
      impression
    };

    // 動作確認
    console.log("登録された本：", bookData);

    formMessage.textContent =
      "本の情報を受け取りました。";

  });

});