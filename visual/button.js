const bt1 = document.querySelector("#bt1");
const bt2 = document.querySelector("#bt2");
const bt3 = document.querySelector("#bt3");
const bt4 = document.querySelector("#bt4");
const bt5 = document.querySelector("#bt5");
const bt6 = document.querySelector("#bt6");

bt1.addEventListener("click", () => {
  $("#draw_area").css("background-image", "url(b1.jpg)");
  $("#bt2, #bt3, #bt4, #bt5, #bt6").css("border", "solid white");
  $("#bt1").css("border", "solid black");
});

bt2.addEventListener("click", () => {
  $("#draw_area").css("background-image", "url(1층.jpg)");
  $("#bt1, #bt3, #bt4, #bt5, #bt6").css("border", "solid white");
  $("#bt2").css("border", "solid black");
});

bt3.addEventListener("click", () => {
  $("#draw_area").css("background-image", "url(2층.jpg)");
  $("#bt1, #bt2, #bt4, #bt5, #bt6").css("border", "solid white");
  $("#bt3").css("border", "solid black");
});

bt4.addEventListener("click", () => {
  $("#draw_area").css("background-image", "url(3층.jpg)");
  $("#bt2, #bt3, #bt1, #bt5, #bt6").css("border", "solid white");
  $("#bt4").css("border", "solid black");
});

bt5.addEventListener("click", () => {
  $("#draw_area").css("background-image", "url(4층.jpg)");
  $("#bt2, #bt3, #bt4, #bt1, #bt6").css("border", "solid white");
  $("#bt5").css("border", "solid black");
});

bt6.addEventListener("click", () => {
  $("#draw_area").css("background-image", "url(5층.jpg)");
  $("#bt2, #bt3, #bt4, #bt5, #bt1").css("border", "solid white");
  $("#bt6").css("border", "solid black");
});
