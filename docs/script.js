//start button constant to be clicked by event listener to activate timer and first question appearing
const startButton = document.getElementById('main-btn');

//list of constants for question 1's buttons:
const q1b1 = document.getElementById('q1b1')
const q1b2 = document.getElementById('q1b2')
const q1b3 = document.getElementById('q1b3')
const q1b4 = document.getElementById('q1b4')

//list of constants for question 2's buttons:
const q2b1 = document.getElementById('q2b1')
const q2b2 = document.getElementById('q2b2')
const q2b3 = document.getElementById('q2b3')
const q2b4 = document.getElementById('q2b4')

//list of constants for question 3's buttons:
const q3b1 = document.getElementById('q3b1')
const q3b2 = document.getElementById('q3b2')
const q3b3 = document.getElementById('q3b3')
const q3b4 = document.getElementById('q3b4')

//list of constants for question 4's buttons:
const q4b1 = document.getElementById('q4b1')
const q4b2 = document.getElementById('q4b2')
const q4b3 = document.getElementById('q4b3')
const q4b4 = document.getElementById('q4b4')

//list of constants for question 5's buttons:
const q5b1 = document.getElementById('q5b1')
const q5b2 = document.getElementById('q5b2')
const q5b3 = document.getElementById('q5b3')
const q5b4 = document.getElementById('q5b4')

//list of constants for question 6's buttons:
const q6b1 = document.getElementById('q6b1')
const q6b2 = document.getElementById('q6b2')
const q6b3 = document.getElementById('q6b3')
const q6b4 = document.getElementById('q6b4')


function quiz() {
    let counter = 60;
    let score = 0;
    //created timer function
    var timer = function () {
        //timer counts down in 1 second intervals
        var countInterval = setInterval(count, 1000);
        //this function displays the timer on the web page and if it reaches 0 then it goes to the final page
        function count() {
            console.log(counter--);
            document.getElementById("js_timer").innerHTML = "Timer: " + counter;
            if (counter <= 0) {
                clearInterval(countInterval);
                    //adds a class to hide all questions and reveals the "final page"
                    const question1 = document.getElementById('question1')
                    question1.classList.add('hide')
                    const question2 = document.getElementById('question2')
                    question2.classList.add('hide')
                    const question3 = document.getElementById('question3')
                    question3.classList.add('hide')
                    const question4 = document.getElementById('question4')
                    question4.classList.add('hide')
                    const question5 = document.getElementById('question5')
                    question5.classList.add('hide')
                    const question6 = document.getElementById('question6')
                    question6.classList.add('hide')
                    const lastpage = document.getElementById('lastpage')
                    lastpage.classList.remove('hide')
                }
            }
        }
        //once the main start button is clicked, the main page is hidden and the first question is revealed
    var mainexit = function () {
        removeEventListener('click', timer)
        const main = document.getElementById('main')
        main.classList.add('hide')
        
        const question1 = document.getElementById('question1')
        question1.classList.remove('hide')

    }
    //once the first question is answered, the second question is revealed, and so forth
    function q1exit(correct) {
        const question1 = document.getElementById('question1')
        question1.classList.add('hide')

        const question2 = document.getElementById('question2')
        question2.classList.remove('hide')
        //if the correct button is clicked, the player recieves a portion of the 100% score (1/6) and is met with a "correct" message
        if (correct) {
            document.getElementById("right1").innerHTML = "Correct :)";
            score = score + 16.66;
            console.log(score);
        }
        //if the user clicks an incorrect answer, the timer is reduced by 10 seconds and they are met with a "wrong" message
        else {
            document.getElementById("right1").innerHTML = "Wrong :(";
            counter = counter -10;
        }
        
    }
    function q2exit(correct) {
        const question2 = document.getElementById('question2')
        question2.classList.add('hide')

        const question3 = document.getElementById('question3')
        question3.classList.remove('hide')
        
        if (correct) {
            document.getElementById("right1").innerHTML = "Correct :)";
            score = score + 16.67;
            console.log(score);
        }
        else {
            document.getElementById("right1").innerHTML = "Wrong :(";
            counter = counter -10;
        }
        
    }
    function q3exit(correct) {
        const question3 = document.getElementById('question3')
        question3.classList.add('hide')

        const question4 = document.getElementById('question4')
        question4.classList.remove('hide')
        
        if (correct) {
            document.getElementById("right1").innerHTML = "Correct :)";
            score = score + 16.66;
            console.log(score);
        }
        else {
            document.getElementById("right1").innerHTML = "Wrong :(";
            counter = counter -10;
        }
    }
    function q4exit(correct) {
        const question4 = document.getElementById('question4')
        question4.classList.add('hide')

        const question5 = document.getElementById('question5')
        question5.classList.remove('hide')
        
        if (correct) {
            document.getElementById("right1").innerHTML = "Correct :)";
            score = score + 16.67;
            console.log(score);
        }
        else {
            document.getElementById("right1").innerHTML = "Wrong :(";
            counter = counter -10;
        }
    }
    function q5exit(correct) {
        const question5 = document.getElementById('question5')
        question5.classList.add('hide')

        const question6 = document.getElementById('question6')
        question6.classList.remove('hide')
        
        if (correct) {
            document.getElementById("right1").innerHTML = "Correct :)";
            score = score + 16.67;
            console.log(score);
        }
        else {
            document.getElementById("right1").innerHTML = "Wrong :(";
            counter = counter -10;
        }
    }
    function q6exit(correct) {
        const question6 = document.getElementById('question6')
        question6.classList.add('hide')

        const lastpage = document.getElementById('lastpage')
        lastpage.classList.remove('hide')
        
        if (correct) {
            document.getElementById("right1").innerHTML = "Correct :)";
            score = score + 16.67;
            console.log(score);
        }
        else {
            document.getElementById("right1").innerHTML = "Wrong :(";
            counter = counter -10;
        }
        document.getElementById("finalscore").innerHTML = "Your final score is " + score + "%";
    }
    
    //the start button is pasted twice because it activates the 60 second timer and also removes the main page
    startButton.addEventListener('click', timer)
    startButton.addEventListener('click', mainexit)

    //created an event listener for each question's buttons, assigning false values to incorrect options and true values to correct options
    q1b1.addEventListener('click', () => q1exit(false));
    q1b2.addEventListener('click', () => q1exit(false));
    q1b3.addEventListener('click', () => q1exit(true));
    q1b4.addEventListener('click', () => q1exit(false));

    q2b1.addEventListener('click', () => q2exit(false));
    q2b2.addEventListener('click', () => q2exit(true));
    q2b3.addEventListener('click', () => q2exit(false));
    q2b4.addEventListener('click', () => q2exit(false));

    q3b1.addEventListener('click', () => q3exit(false));
    q3b2.addEventListener('click', () => q3exit(false));
    q3b3.addEventListener('click', () => q3exit(false));
    q3b4.addEventListener('click', () => q3exit(true));

    q4b1.addEventListener('click', () => q4exit(false));
    q4b2.addEventListener('click', () => q4exit(false));
    q4b3.addEventListener('click', () => q4exit(false));
    q4b4.addEventListener('click', () => q4exit(true));

    q5b1.addEventListener('click', () => q5exit(false));
    q5b2.addEventListener('click', () => q5exit(true));
    q5b3.addEventListener('click', () => q5exit(false));
    q5b4.addEventListener('click', () => q5exit(false));

    q6b1.addEventListener('click', () => q6exit(false));
    q6b2.addEventListener('click', () => q6exit(false));
    q6b3.addEventListener('click', () => q6exit(false));
    q6b4.addEventListener('click', () => q6exit(true));



}

quiz();
