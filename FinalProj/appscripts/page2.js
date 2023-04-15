
(function(){
    document.addEventListener('DOMContentLoaded', function() {
    function buildQuiz(){
        //variable to store HTML output
        const output = [];
    
        //for each question
        myQuestion.forEach(
            (currentQuestion, questionNumber) => {
    
                //store list of answer choices
                const answers = [];
    
                // for each available answer
                for(letter in currentQuestion.answers){
    
                    //add an HTML radio button
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} :
                            ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
    
                // add this question and its ansswer to the output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
    
        //combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
    
    function showResults(){
        const answerContainers = quizContainer.querySelectorAll('.answers');
    
        //keep track of user's answers
        let numCorrect = 0;
    
        myQuestion.forEach( (currentQuestion, questionNumber) => 
        {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
            if(userAnswer === currentQuestion.correctAnswer){
                numCorrect++;
                answerContainer.querySelector(`input[value=${userAnswer}]`).parentElement.style.backgroundColor = 'lightgreen';
            }
    
            else{
                answerContainer.querySelector(`input[value=${userAnswer}]`).parentElement.style.backgroundColor = 'red';
            }
        });
    
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestion.length}`;
    }

    // function resetQuiz() {
    //     // Clear previous results
    //     resultsContainer.innerHTML = '';

    //     // Reset answer colors
    //     const answerLabels = quizContainer.querySelectorAll('.answers label');
    //     answerLabels.forEach(label => {
    //         label.style.backgroundColor = '';
    //     });

    //     // Reset radio button selections
    //     const answerInputs = quizContainer.querySelectorAll('.answers input');
    //     answerInputs.forEach(input => {
    //         input.checked = false;
    //     });
    // }
    
    //variables
    
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    // const retakeButton = document.getElementById('retake');

    
    const myQuestion = [
        {
            question: "Which colour represents isolation, spirituality and harmony?",
            answers: {
                a:"green",
                b:"purple",
                c:"blue",
            },
            correctAnswer: "c"
        },
        {
            question: "Which is colour scheme is NOT mentioned as a popular color scheme?",
            answers: {
                a:"Complementary",
                b:"Monochrome",
                c:"Triadic",
            },
            correctAnswer: "b"
        },
        {
            question: "What are the 3 main components of colour? ",
            answers: {
                a:"Saturation, Hue, Value",
                b:"Saturation, Variation, Value",
                c:"Saturation, Hue, Intensity",
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following is incorrect:",
            answers: {
                a:"Studio Ghibli - Kiki's Delivery Service, Princess Mononoke, Spirited Away",
                b:"Cyberpunk - Suzune, Ghost in the Shell, Neon Genesis Evangelion",
                c:"New Age - Your Name, A Silent Voice, Belle",
            },
            correctAnswer: "b"
        },
        {
            question: "Which colour is the brightest? ",
            answers: {
                a:"rgb 150, 115, 120",
                b:"rgb 110, 150, 115 ",
                c:"rgb 100, 120, 150",
            },
            correctAnswer: "a"
        }
    ];
    
    
    //display quiz
    buildQuiz(); 
    
    //on submit, show results event listener
    submitButton.addEventListener('click', showResults);

    //on retake, reload the page to start over
    // retakeButton.addEventListener('click', function(){
    //     resetQuiz();
    // });
    
    });

})();