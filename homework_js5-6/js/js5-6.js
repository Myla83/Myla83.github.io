function Stopwatch(elem) {
var time = 0;
var interval;
var offset;

function update() {
	if (this.isOn) {
	time += delta();
	}

	var formattedTime = timeFormatter(time);
	elem.textContent = formattedTime;
	console.log(formattedTime);
}

function delta() {
var now = Date.now();
var timePassed = now - offset;
offset = now;
return timePassed;
}
// 12345
// hours 0
// minutes 1
// seconds 2
// millisec 345
// 00:01:02:345
function timeFormatter(timeInMilliseconds) {
	var time = new Date(timeInMilliseconds);
	var hours = time.getHours().toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();
	var milliseconds = time.getMilliseconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours - '3';
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	while (milliseconds.length < 3) {
		milliseconds = '0' + milliseconds;
}

return hours + ' : ' + minutes + '  :' + seconds + ' . ' + milliseconds;
}

this.isOn = false;

this.start = function() {
if (!this.isOn) {
	interval = setInterval(update.bind(this), 10);
	offset = Date.now();
	this.isOn = true;
}
	};

this.stop = function() {
if (this.isOn) {
	clearInterval(interval);
	interval = null;
	this.isOn = false;
}
};

this.reset = function() {
	if (!this.isOn) {
		time = 0;
		update();
	}

};

}










/*//объявляем переменные
var base = 60;
var clocktimer,dateObj,dh,dm,ds,ms;
var readout='';
var h=1, m=1, tm=1, s=0, ts=0, ms=0, show=true, init=0, ii=0;
//функция для очистки поля
function clearСlock() {
	clearTimeout(clocktimer);
	h=1;m=1;tm=1;s=0;ts=0;ms=0;
	init=0; show=true;
	readout='00:00:00.00';
	document.TestForm.stopwatch.value=readout;
	ii = 0;
}
//функция для старта секундомера
function startTIME() {
	var cdateObj = new Date();
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000);
	if (t>999) { s++; }
	if (s>=(m*base)) {
		ts=0;
		m++;
	} else {
		ts=parseInt((ms/100)+s);
		if(ts>=base) { ts=ts-((m-1)*base); }
	}
	if (m>(h*base)) {
		tm=1;
		h++;
	} else {
		tm=parseInt((ms/100)+m);
		if(tm>=base) { tm=tm-((h-1)*base); }
	}
	ms = Math.round(t/10);
	if (ms>99) {ms=0;}
	if (ms==0) {ms='00';}
	if (ms>0&&ms<=9) { ms = '0'+ms; }
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; }
	dm=tm-1;
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; }
	dh=h-1;
	if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; }
	readout = dh + ':' + dm + ':' + ds + '.' + ms;
	if (show==true) { document.TestForm.stopwatch.value = readout; }
	clocktimer = setTimeout("startTIME()",1);
}
//функция для паузы
function pause() {
	if (init==0) { dateObj = new Date();
	startTIME();
	init=1;
	} else { if(show==true) {
	show=false;
	} else { show=true; } }
}*/
