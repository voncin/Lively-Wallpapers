function changeBg() {
	var currentime = new Date();
	var hr = currentime.getHours();
	var min = currentime.getMinutes();
	if (min >= 30) {
		hr += 0.5;
	}
	var imgNo = Math.floor(hr / 1.5) + 1;
	document.body.style.backgroundImage = "url('img/earth_view_" + imgNo + ".jpeg')";
}

changeBg();

var now = new Date();
var pastHalf = now.getMinutes();
if (pastHalf >= 30) {
	pastHalf -= 30;
}
var duration = 1800000 - (pastHalf * 60 + now.getSeconds()) * 1000;

setTimeout(function() {
	changeBg();
	setInterval(changeBg, 1800000);
}, duration);
