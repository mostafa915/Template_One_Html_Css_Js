let icon = document.querySelector(".icon");
console.log(icon);
let ul = document.querySelector(".header .container .links ul");
console.log(ul);
icon.addEventListener("click", function () {
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});
document.querySelector(".landing").addEventListener("click", function (e) {
  ul.style.display = "none";
});
let dateInCurrentYear = new Date();
let spanInFooter = document.querySelector("#span-one");
console.log(spanInFooter);
spanInFooter.innerHTML = `${dateInCurrentYear.getFullYear()}`;