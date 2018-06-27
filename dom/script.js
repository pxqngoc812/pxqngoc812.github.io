function changeSize(x) {
	let ps = document.getElementsByTagName('p');
	for(let i = 0; i < ps.length; i++) {
		ps[i].style.fontSize = x + "px";
	}
}

function increaseSize(p) {
	let ps = document.getElementsByClassName(p)[0];
	let fsize = Number(ps.style.fontSize.slice(0,ps.style.fontSize.length-2));
	if (fsize >= 30) {
		return "Co chu qua lon.";
	}
	fsize = (fsize + 1) + 'px';
	ps.style.fontSize = fsize;
}

function decreaseSize(p) {
	let ps = document.getElementsByClassName(p)[0];
	let fsize = Number(ps.style.fontSize.slice(0,ps.style.fontSize.length-2));
	if (fsize <= 10) {
		return "Co chu qua nho.";
	}
	fsize = (fsize - 1) + 'px';
	ps.style.fontSize = fsize;

}

function changeColor() {
	document.getElementsByTagName('p')[0].style.color = "blue";
	document.getElementsByTagName('p')[1].style.color = "yellow";
	document.getElementsByTagName('p')[2].style.color = "red";
}

function changeBgColor(color) {
	document.body.style.backgroundColor = color;
}

function copy(p1,p2) {
	let p1Text = document.getElementsByClassName(p1)[0];
	let p2Text = document.getElementsByClassName(p2)[0];
	p1Text.innerHTML = p2Text.innerHTML;
}