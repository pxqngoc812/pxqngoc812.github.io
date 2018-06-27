// bai 1
function maxnum(a,b) {
	if (typeof a === "number" && typeof b === "number") {
		if (a >= b) {
			return a;
		}
		else {
			return b;
		}
	}
	else {
		return "Khong the so sanh.";
	}
}
// test:
// console.log(maxnum(5, 8));
// console.log(maxnum(25, 18));

// bai 2
function giaithua(n) {
	if (n === "number" && n > 0) {
		var res = 1;
		for (var i = 1; i <= n; i++) {
			res = res * i;
		}
		document.write(res);
	}
	else { 
		return "Khong the tinh giai thua.";
	}
}
// test:
// console.log(giaithua(-8));
// console.log(giaithua(5));

// bai 3:
function evenNumbers(arr) {
    arr.sort(function(a, b){
    	return b - a
    });

	var newarr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]%2 == 0) {
			newarr.push(arr[i]);
		}
	}
	return newarr;
}
// test:
// console.log(evenNumbers(["1", "2", "3", "5", "8", "13"]));
// console.log(evenNumbers(["7", "18", "25", "69", "294"]));

// bai 4:
var obj = {
  usename:'we',
  password:'aaaaa',
  confirm:'aaaaaaaaa',
  intro:function() {
    if (this.usename != 0 && this.usename.length < 20) {
      document.write('hop le' + "<br>");
      if (this.password.length >= 6 && this.password.length <= 30) {
        document.write('hop le' + "<br>");
        if (this.confirm === this.password) {
          document.write('hop le' + "<br>");
        }
        else document.write('sai' + "<br>");
      }
      else document.write('sai' + "<br>");
    }
    else document.write('sai' + "<br>");
  }
}