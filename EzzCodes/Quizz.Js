//inisiasi soal dalam quiz
const questions = [
    {
        question: "Berikut ini yang bukan termasuk tag untuk membuat heading adalah... ",
        optionA: "h4",
        optionB: "h5",
        optionC: "h6",
        optionD: "h7",
        correctOption: "optionD"
    },

    {
        question: "Untuk pembuatan HTML software yang dapat digunakan adalah...",
        optionA: "Microsoft Word",
        optionB: "Notepad",
        optionC: "Photoshop",
        optionD: "Adobe Premiere",
        correctOption: "optionB"
    },

    {
        question: "Saat membuat tabel tag <tr> berfungsi untuk ?",
        optionA: "Membuat baris",
        optionB: "Membuat kolom",
        optionC: "Membuat header tabel",
        optionD: "Membuat body tabel",
        correctOption: "optionA"
    },

    {
        question: "Tag <ol> digunakan untuk membuat list ?",
        optionA: "List terurut",
        optionB: "List tidak terurut",
        optionC: "List tunggal",
        optionD: "List jamak",
        correctOption: "optionA"
    },

    {
        question: " Terdapat 2 jenis list di HTML yaitu order list dan unordered list!",
        optionA: "Salah",
        optionB: "Benar",
        optionC: "semua benar",
        optionD: "Semua salah",
        correctOption: "optionB"
    },

    {
        question: "Berikut ini yang bukan termasuk tipe data primitif dalam javaScript",
        optionA: "string",
        optionB: "number",
        optionC: "boolean",
        optionD: "array",
        correctOption: "optionD"
    },

    {
        question: "Tag untu membuat huruf tebal adalah",
        optionA: "b",
        optionB: "i",
        optionC: "bold",
        optionD: "important",
        correctOption: "optionC"
    },

    {
        question: "Tag untuk membuat judul teks dengan ukuran terbesar adalah",
        optionA: "h1",
        optionB: "heading",
        optionC: "title",
        optionD: "large",
        correctOption: "optionA"
    },

    {
        question: "Tag untuk membuat tautan atau hyperlink adalah",
        optionA: "link",
        optionB: "url",
        optionC: "hyperlink",
        optionD: "a",
        correctOption: "optionD"
    },

    {
        question: "Tag untuk membuat paragraf text adalah",
        optionA: "p",
        optionB: "br",
        optionC: "paragraph",
        optionD: "text",
        correctOption: "optionA"
    },

    {
        question: "Tag untuk membuat teks miring adalah",
        optionA: "strong",
        optionB: "em",
        optionC: "italic",
        optionD: "i",
        correctOption: "optionD"
    },

  
    {
        question: "Tag untuk menyisipkan gambar pada HTML adalah",
        optionA: "img",
        optionB: "picture",
        optionC: "image",
        optionD: "src",
        correctOption: "optionA"
    },


    {
        question: "Tag untuk mengatu rwarna latar belakang CSS adalah",
        optionA: "color",
        optionB: "bg-color",
        optionC: "background",
        optionD: "bgcolor",
        correctOption: "optionC"
    },

    {
        question: "Tag untuk membuat garis horizontal dalam HTML adalah",
        optionA: "line",
        optionB: "hr",
        optionC: "break",
        optionD: "horizontal",
        correctOption: "optionB"
    },

    {
        question: "Tag untuk membuat teks dengan ukuran lebih kecil adalah",
        optionA: "small",
        optionB: "font",
        optionC: "sub",
        optionD: "downsize",
        correctOption: "optionA"
    },

    {
        question: "Tag untuk membuat teks dengan garis bawah adalah",
        optionA: "underline",
        optionB: "u",
        optionC: "italic",
        optionD: "b",
        correctOption: "optionC"
    },

    {
        question: "Tag untuk menyematkan video dalam HTML adalah",
        optionA: "video",
        optionB: "media",
        optionC: "play",
        optionD: "embed",
        correctOption: "optionA"
    },

    {
        question: " Tag untuk membuat garis miring pada teks adalah",
        optionA: "italic",
        optionB: "b",
        optionC: "i",
        optionD: "strike",
        correctOption: "optionC"
    },

    {
        question: "Tag yang digunakan untuk membuat teks yang dipisahkan secara logis adalah",
        optionA: "div",
        optionB: "span",
        optionC: "section",
        optionD: "paragraph",
        correctOption: "optionB"
    },

    {
        question: "Tag untuk membuat tautan ke alamat email adalah",
        optionA: "email",
        optionB: "mailto",
        optionC: "link",
        optionD: "a",
        correctOption: "optionB"
    },

    {
        question: "Tag untuk membuat teks dengan garis melintang adalah?",
        optionA: "strike",
        optionB: "s",
        optionC: "line-through",
        optionD: "cross",
        correctOption: "optionA"
    },

    {
        question: "Tag untuk membuat tanda kutip dalam teks adalah",
        optionA: "quote",
        optionB: "blockquote",
        optionC: "q",
        optionD: "cite",
        correctOption: "optionC"
    },

    {
        question: "Tag untuk membuat daftar yang didefinisikan adalah",
        optionA: "ul",
        optionB: "li",
        optionC: "ol",
        optionD: "dl",
        correctOption: "optionD"
    },

    {
        question: "Tag untuk membuat teks dengan ukuran yang lebih besar adalah",
        optionA: "big",
        optionB: "large",
        optionC: "h1",
        optionD: "font",
        correctOption: "optionA"
    },

    {
        question: "Tag yang digunakan untuk memasukkan kode program atau skrip adalah",
        optionA: "code",
        optionB: "script",
        optionC: "program",
        optionD: "cource",
        correctOption: "optionB"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}