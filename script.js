const btn = document.getElementById("theme");   // 找到那个按钮
btn.addEventListener("click", () => {           // 听：被点了
  document.body.classList.toggle("dark");       // 给 body 加/去一个标记
});