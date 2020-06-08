let button = document.getElementById("theboxes");
button.addEventListener("click", myfunction);

var oldValue = 0;
var i = 1;
function myfunction() {
  let n = document.getElementById("number").value;
  n = parseInt(oldValue) + parseInt(n);
  for (; i <= n; i++) {
    var box = document.createElement("div");
    box.classList.add("myDiv");
    document.getElementById("box").appendChild(box);
    box.innerHTML = i;

    oldValue = document.getElementById("box").lastElementChild.innerHTML;
    console.log(oldValue);
  }
}
