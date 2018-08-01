let btn = document.getElementById('btn');
const res = document.getElementById('res');

function add(btn) {
	res.value += btn.value;
	// document.getElementById('res').innerHTML += document.getElementById('btn').innerHTML;
}

function clear1(a) {
	res.value = res.value.slice(0, res.value.length-1);
}

function clearall() {
	res.value = "";
}

function equal() {
	res.value = eval(res.value);

}

function square() {
	let squarenum = [];
	let num = "";
	let i = res.value.length-1;
	let resSquare = Math.pow(Number(eval(res.value)), 2);
	res.value=resSquare;
}
 
function changeTheme() {
    $(".top-button").css("background-color", "orange");
	$(".top-button").css("color", "white");
	$(".top-button").css("border", "1px solid white");
	$(".button").css("border", "1px solid white");
    $(".button").css("background-color", "grey");
    $(".button").css("color", "black");
	$("body").css("background-color", "black");
	$(".change").css("color", "white");
	$(".change").css("background-color", "cornflowerblue");
}

// function test (num){
// 	console.log(num);
// }