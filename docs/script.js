/*const startButton = document.getElementById('main');*/

quiz=function(){

var timer = function(){
    let counter = 60;

    var countInterval = setInterval(count, 1000);

    function count() {
        console.log(counter--);
        document.getElementById("js_timer").innerHTML = "Timer: " + counter;
        if (counter === -1) {
            clearInterval(countInterval);
        }
    }
    const main = document.getElementById('main')
    main.classList.add('hide')
    const question1 = document.getElementById('question1')
    question1.classList.remove('hide') 
    removeEventListener('click',timer)
    addEventListener('click',Question1)
    
}
addEventListener('click',timer)

/*function mainpage() {
    const main = document.getElementById('main')
    main.classList.add('hide')
    const question1 = document.getElementById('question1')
    question1.classList.remove('hide') 
    removeEventListener('click',mainpage)
}
*/
}

quiz();