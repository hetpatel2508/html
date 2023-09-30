
let arr = document.body.querySelectorAll(".nt")
arr[0].style.background = "red";
arr[1].style.background = "Yellow";
arr[2].style.background = "white";

let arr2 = document.body.querySelector(".nt").nextElementSibling.nextElementSibling;
arr2.style.background = "pink";

let arr3 = document.getElementById("body2")
arr3.style.background = "pink";

let arr4 = document.getElementsByClassName("nt")[1]

arr4.style.background = "blue";


let arr5 = document.getElementsByName("het")[2]

arr5.style.background = "grey";


let arr6 = document.getElementsByTagName("div");

arr6[1].style.background = "grey";
arr6[2].style.background = "grey";
arr6[3].style.background = "grey";