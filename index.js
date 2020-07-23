// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"
dodger.style.bottom = "0px";


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}


function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px","");
  let right = parseInt(rightNumbers, 10);
 
  if (right > left) {
    dodger.style.right = `${right + 1}px`;
  }
}