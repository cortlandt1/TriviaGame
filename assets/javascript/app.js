//Questions -- 
//What was the first movie released in the Marvel Cinematic Universe?
// -The Incredible Hulk(c) -Iron Man -Captain America The First Avenger -Thor

//Which Infinity stone was found inside Loki's septre?
// -The Time stone -The Space stone -The Mind stone(c) -The Reality stone

//Captain America's shield is made out of which material?
// -Adamantium -Titanium -Vibranium(c) -Steel alloy

//Black Widow's first apperance was in which film?
// -Iron Man -The Avengers -Iron Man 2(c) -The Black Widow

let amountCorrect = 0;          
let wrongAnswers = 0
let unansweredQuestions = 0


$('#title').html(amountCorrect)

function handleClick()
{         
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
    $('#title').html(amountCorrect)
    alert("Wrong Responses:" + wrongAnswers)        
    alert("Correct Responses: " + amountCorrect);
}

    // var marvelQuestions = [{
    //     question:"What was the first movie released in the Marvel Cinematic Universe?",
    //     choices: ["The Incredible Hulk", "Iron Man", "Captain America The First Avenger", "Thor"],
    //     correctAnswer: 0 
    // }, {
    //                 question:"Which Infinity stone was found inside Loki's septre?",
    //                 choices: ["The Time stone", "The Space stone", "The Mind stone", "The Reality stone"],
    //                 correctAnswer: 2 
    //             }, {
    //                 question:"Captain America's shield is made out of which material?",
    //                 choices: ["Adamantium", "Titanium", "Vibranium", "Wood"],
    //                 correctAnswer: 2 
    //             }, {
    //                 question:"Black Widow's first apperance was in which film?",
    //                 choices: ["Iron Man", "The Avengers", "Iron Man 2", "The Black Widow"],
    //                 correctAnswer: 2 
    //             },
                
    //         ];
// $('#r4').on('click', function (){
    //     let questionOne = $("input:radio[name=question1]").val()
    //     if (questionOne == 'hulk') {
        //         correctAnswers++
        //         alert('You bitch')
        //     } else {
            //         alert('bruh')
            //     }
            // })
            // window.addEventListener("DOMContentLoaded", function () {
                //     var form = document.getElementById("form-id");
                
                // document.getElementById("submit").addEventListener("click", function () {
        //   form.submit();
  
        //     })
        // })
        
        // var selectedOption = $("input:radio[name=question1]:checked").val()
        
        //     if (document.getElementById('r4').checked) {
            //         let rate_value = document.getElementById('r4').value
            //   };