
var result = document.getElementById('result');
function x(x) {
	this.result.value += x.value;
}
//Căn bậc hai
function sqrt() {
  var x = $("#result").val();
  $("#result").val(Math.sqrt(x));
}
//Bình phương
function square() {
	var x = $("#result").val();
	$("#result").val(x*x);
}
//Giai thừa
function factorial() {
	var a = $("#result").val();
	var b = 1;
	for (var i = 1; i < a; i++) {
		b = b*a;
		$("#result").val(b*a);
	}
}
