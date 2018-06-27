//bai 1
function binhphuong(a) {
	return a*a;
}
// test:
// console.log(binhphuong(3));
// console.log(binhphuong(12));

//bai 2
function tongphuctap(a,b,c) {
	let	d = 3*a+2*b-c;
	return binhphuong(d);
}
// test:
//console.log(tongphuctap(3, 5, 7));
//console.log(tongphuctap(1, 2, 4));

//b3 
function tachstr(str) {
	return str.slice(0,10) + "...";
	// return str.substring(0,10) + "...";
}
// test:
// console.log(tachstr("First character is at position 0."));
// console.log(tachstr("the second has position 1"));

//b4
function ucfirst(text) {
	return text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase();
}
// test:
// console.log(tachstr("the second has position 1"));
// console.log(tachstr("the third has position 2"));


//b5 
function minnum(arr) {
	return Math.min.apply(null, arr);	
}
// test:
// minnum(["1", "100", "20", "10"]);
// minnum(["12", "1000", "210", "120"]);

//b6
function sortStudents(arr) {
	//sap xep
	arr.sort(function(a, b) {
		return a.localeCompare(b);
	});
	console.log('arr: ', arr);

	//in tung phan tu ra man hinh
	for (let i=0; i<arr.length; i++) {
		document.write(arr[i] + "<BR>");
	}
}
// test:
// sortStudents(["Binh", "an", "ly", "Viet"]);
// sortStudents(["Annie", "Zac", "dan", "lucy"]);

//b7
var teacher = {
	firstName: "Don",
	lastName: "Trump",
	age: "71",
	say: function() {
		return this.firstName + " " + this.lastName + ", " + this.age + "<BR>";
	}
};

var parent = {
	firstName: "Vlad",
	lastName: "Putin",
	age: "69",
	say: function() {
		return this.firstName + " " + this.lastName + ", " + this.age + "<BR>";
	},
};

var student = {
	firstName : "Hoang",
	lastName: "Long",
	age: "20",
	say: function() {
		return this.firstName + " " + this.lastName + ", " + this.age + "<BR>";
	},
};

document.write(parent.say());
document.write(student.say());
document.write(teacher.say());
