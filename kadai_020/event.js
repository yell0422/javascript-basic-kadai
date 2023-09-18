const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました(2秒後)";
  }, 2000);
});
