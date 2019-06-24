// Your code here
var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "100px";

var dodger = document.getElementById("dodger");
document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft")
    {
        moveDodgerLeft();
    }
    else if(e.key === "ArrowRight")
    {
        moveDodgerRight();
    }
});

function moveDodgerLeft() 
{
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = '${left - 1}px';
    }
};

function moveDodgerRight(){
    var rightNumbers= dodger.style.right.replace('px','')
    var right = parseInt(rightNumbers, 10)
    if (right > 0){
      dodger.style.right='${right - 1}px';
    }
}  
