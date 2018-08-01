var q1 = {
    question: "Cristiano Ronaldo rời MU vào năm nào",
    1: "2007", 2: "2008", 3: "2009", 4: "2010",
    answer: 1
},

q2 = {
    question: "Cầu thủ trưởng thành từ lò Southampton, thành danh ở Tottenham và hiện khoác áo Real Madrid",
    1: "Luka Modric", 2: "Alvaro Arbeloa", 3: "Marco Asensio", 4: "Gareth Bale",
    answer: 4
},

q3 = {
    question: "Tiền đạo người Đức đang giữ kỷ lục ghi nhiều bàn thắng nhất ở các VCK World Cup",
    1: "Miroslav Klose", 2: "Juergen Klinsmann", 3: "Gerd Mueller", 4: "Lukas Podolski",
    answer: 1
},

q4 = {
    question: "Tiền đạo nào giành danh hiệu Vua phá lưới Champions League mùa giải 2014 - 2015?",
    1: "Mueller", 2: "Ronaldo", 3: "Messi", 4: "Neymar",
    answer: 1
},

q5 = {
    question: "Cầu thủ nào giành Quả bóng đồng FIFA năm 2015?", 
    1: "Robben", 2: "Neuer", 3: "Luis Suarez", 4: "James Rodriguez",
    answer: 2
}

var questions = [q1,q2,q3,q4,q5];

var pos = 0, correct = 0;

function add(x) {
    return document.getElementById('x');
}

// tạo câu hỏi và đáp án

function getQA(obj) {
    
}

// function renderQuestion() {
//     test = add('test');

//     if(pos >= questions.length) {
//         add(testStatus).innerHTML = "Bạn đã hoàn thành 5 câu đố!!!"; 
//         test.innerHTML = "<h2>Bạn trả lời đúng " + correct + " trên 5 câu hỏi của chúng tôi.</h2>";
//         pos = 0;
//         correct = 0;
//         return false;
//     }

//     window.onload = function what(x) {
//     return add('x').innerHTML;
//     }

//     what('test-status') = "Question " + (pos+1) + " of " + questions.length;

//     question = questions[pos][0];
//     chA = questions[pos][1];
//     chB = questions[pos][2];
//     chC = questions[pos][3];
//     chD = questions[pos][4];

//     test.innerHTML = "<h3>" + question + "</h3>";
//     test.innerHTML += "<button name='choices' value='A'>chA</button>";
//     test.innerHTML += "<button name='choices' value='B'> chB </button>" + "<br>";
//     test.innerHTML += "<button name='choices' value='C'> chC </button>";
//     test.innerHTML += "<button name='choices' value='D'> chD </button>" + "<br><br>";

//     test.innerHTML += "<button onclick='checkAns()'> Kiểm tra </button>";
// }

// function checkAns() {
//     choices = innerHTML.getElementByName('choices');

//     for (let i = 0; i < choices.length; i++) {
//         choice == choices[i].value;
//     }

//     if(choice == questions[pos][4]) {
//         correct++;
//     }
//     pos++;
//     renderQuestion();

// }

// window.addEventListener("load", renderQuestion, false);