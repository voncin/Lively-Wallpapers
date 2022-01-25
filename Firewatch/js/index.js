function changeBg() {
	var currentHour = new Date().getHours();
	if (5 < currentHour && currentHour < 21) {
		if (currentHour % 2 != 0) {
			currentHour--;
		}
		document.body.style.backgroundImage = "url('img/" + currentHour + ".jpg')";
	} else {
		document.body.style.backgroundImage = "url('img/20.jpg')";
	}
}

changeBg();

var now = new Date();
var duration = 3600000 - (now.getMinutes() * 60 + now.getSeconds()) * 1000;
setTimeout(function() {
	changeBg();
	setInterval(function() {
		changeBg();
	}, 3600000);
}, duration);
