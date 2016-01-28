
var classname = document.getElementsByClassName("button-pads");

for (var i = 0; i < classname.length; i++) {
	classname[i].addEventListener("click", val)
}

function val () {
	var v = this.getAttribute("data-value");
	
	document.getElementById("answer").value += v;
}

var clear = document.getElementById("button-clear").addEventListener("click", clear)
function clear () {
	document.getElementById("answer").value = null;
	document.getElementById("input").value = null;
}

var equal = document.getElementById("button-equal").addEventListener("click", calc)
function calc () {
	var expr = document.getElementById("answer").value; 
	document.getElementById("input").value = expr;
	document.getElementById("answer").value = null;
	var newExpr = expr.substr(0, expr.length-1);
	var hundredth = newExpr.replace(/%/g, "/100");

	var result = eval(hundredth);
	document.getElementById("answer").value = result;
}


/*function calc () {
 var expr = document.getElementById("answer").value;
 document.getElementById("input").value = expr;
 //document.getElementById("answer").value = null;
 var newExpr = expr.substr(0, expr.length-1);
 var result = eval(newExpr);

 document.getElementById("answer").value = result;

 }*/




