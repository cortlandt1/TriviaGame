
//Declaring variables
let amountCorrect = 0;          
let wrongAnswers = 0
let unansweredQuestions = 0

//Appends score and timer data
$('#correctAnswer').html(amountCorrect)
$('.time').html('00:30')
$('#correctAnswer').html(`Correct Answers: ${amountCorrect}`)
$('#incorrectAnswer').html(`Incorrect Answers: ${wrongAnswers}`)

//Loop function for determining correct answers
function submitAnswers()
{         
    // event.preventDefault();
    clearInterval(gameTimer)
    for(var i = 1; i <= 45; i++) {
        var radios = document.getElementsByName('question'+i);
        for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "correct" && radio.checked) {
                amountCorrect++;
            }
            else if (radio.value == "wrong" && radio.checked){
                wrongAnswers++;
            }
        }
    }
    $('#correctAnswer').html(`Correct Answers: ${amountCorrect}`)
    $('#incorrectAnswer').html(`Incorrect Answers: ${wrongAnswers}`)
}

//Time Conversion function
    function timeConversion (t) {
        var minutes = Math.floor(t / 60)
        var seconds = t - (minutes * 60)

        if (seconds < 10) {
          seconds = '0' + seconds
        }

        if (minutes === 0) {
          minutes = '00'
        } else if (minutes < 10) {
          minutes = '0' + minutes
        }

        return minutes + ':' + seconds
    }

//Sets timer
    let time = 30
    let gameTimer = setInterval(function () {
        time--
        timeConversion(time)
        if(time > 0) {
            $('.time').html(timeConversion(time))
        } else {
            $('.time').html('00:00')
            submitAnswers()
            }
        }, 1000)









