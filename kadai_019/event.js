const btn = document.getElementById("btn");
const text = document.getElementById("text");

let count = 1;
btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました(" + count + "回目)";
  count++;
});
