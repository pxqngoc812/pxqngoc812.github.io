// bai 1
function giaithua(n) {
	var res = 1;
	for (var i = 1; i <= n; i++) {
		res = res * i;
	}
	return res;
}
// test
// console.log(giaithua(3))
// console.log(giaithua(5))

// bai 2
function reverse(text) {
	var res = "";
	for (var i = text.length-1; i >= 0; i--) {
		res = res + text[i];
	}	
	return res;
}
// test 
// console.log(reverse("helloworld"));
// console.log(reverse("javascriptloop"));

// bai 3
function duplicate(text) {
	var res = text;
	for (var i = 1; i < 10; i++) {
		res += "-" + text;
	}
	return res;
}
// test:
// console.log(duplicate("live"));
// console.log(duplicate("abcdef"));

// bai 4
function sortStudents(arr) {
	//sap xep
	arr.sort(function(a, b) {
		return a.localeCompare(b);
	});
	console.log('arr: ', arr);

	//in tung phan tu ra man hinh
	for (let i=0; i<arr.length; i++) {
		document.write((i+1) + ". " + arr[i] + "<BR>");
	}
}
// test:
// sortStudents(["Binh", "an", "ly", "Viet"]);
// sortStudents(["Annie", "Zac", "dan", "lucy", "alpha"]);

// bai 5
function double(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i]*2;
    	console.log(arr[i]);
	}
}	
// test:
// double(["2", "5", "7"]);
// double(["8", "12", "18", "25"]);

// bai 6
function mod2(arr) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i]%2;
		console.log(arr[i]);
	}
}
// test:
// mod2(["2", "3", "5", "8"]);
// mod2(["1", "6", "15", "24", "41"]);	