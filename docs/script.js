var timer = function() {
let counter = 60;

var countInterval = setInterval(count, 1000);

function count() {
    console.log(counter--);
    document.getElementById("js_timer").innerHTML = "Timer: " + counter;
    if (counter === -1) {
        clearInterval(countInterval);
    }
}
}
addEventListener("click", timer)