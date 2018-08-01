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
	// for (; i >= 0; i--) {
	// 	if(res.value[i] != "+" && res.value[i] != "-" && res.value[i] != "*" && res.value[i] != "/" && res.value[i] != "%") {
	// 		squarenum.unshift(res.value[i]);
	// 	}
	// 	else {
	// 		break;
	// 	}
	// }

	// for(j = 0; j < squarenum.length; j++) {
	// 	num += squarenum[j];
	// }

	// console.log(res.value.slice(i+1));
	// console.log(Math.pow(Number(num), 2));
	res.value=resSquare;
}
 
// function test (num){
// 	console.log(num);
// }