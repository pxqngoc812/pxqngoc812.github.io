// bai 1:
let dmy =  new Date();
document.write(dmy.getDate() + "." + (dmy.getMonth()+1) + "." + dmy.getFullYear() + "<br>");
if (dmy.getMonth()+1 <= 3) {
	document.write("Spring");
}
else if (dmy.getMonth()+1 >= 4 && dmy.getMonth()+1 <= 6) {
	document.write("Summer");
}
else if (dmy.getMonth()+1 >= 7 && dmy.getMonth()+1 <= 9) {
	document.write("Fall");
}
else {
	document.write("Winter");
}

// bai 2: 
function checkString(str) {
	if (typeof str === "string") {
		if (str.length <= 10) {
			return str;
		}
		else {
			return str.slice(0,10) + "...";
		}
	}
	else {
		return "Khong phai chuoi";
	}
}
// test:
// checkSting("helloolleh");
// checkString("xinchaotoilangoc");

// bai 3:
function convert(n) {
	if (n >= 0 && n <= 3.9) {
		return n = "F";
	}
	else if (n >= 4 && n <= 5.4) {
		return n = "D";
	}
	else if (n >= 5.5 && n <= 6.9) {
		return n = "C";
	}
	else if (n >= 7 && n <= 8.4) {
		return n = "B";
	}
	else if (n > 10) {
		return "So diem qua lon";
	}
	else {
		return n = "A";
	}
}
// test:
// convert(3);
// convert(6.5);

// bai 4:
function translate(x) {
	switch(x) {
		case 1:
			str = "Ciao";		//italy
			break;
		case 2:
			str = "Hola";		//spain
			break;
		case 3:
			str = "Hallo";		//germany
			break;
		case 4:
			str = "Bonjour";	//france
			break;
		case 5:
			str = "Aloha";		//hawaii
			break;
		default:
			str = "Chao";
	}
	return str;
}
// test:
// translate(1);
// translate(5);

// bai 5:
function truePosition(arr) {
	return arr.indexOf(true);
}
// test:
// truePosition([false, false, false, false, true, false, false]);
// truePosition([false, true, false, false]);

// bai 6:
function first100() {
	for (let i = 1, j = 2; i < 100; i+=2, j+=2) {
		document.write(`<span style='color: red'>${i}</span>`);
		document.write(`<span style='color: blue'>${j}</span>`);
	}
}