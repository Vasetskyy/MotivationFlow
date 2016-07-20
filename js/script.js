// ========== DATE AND TIME ==========

var today = new Date();
var hh = today.getHours();
var mm = today.getMinutes();
var ss = today.getSeconds();
var yy = today.getFullYear();
var mo = today.getMonth();
var dd = today.getDate();
var mon = mo++;
if(hh<10) {
    hh='0'+ hh;
} 

if(mm<10) {
    mm='0'+ mm;
} 

if(ss<10) {
    ss='0'+ ss;
} 

if(dd<10) {
    dd='0'+ dd;
} 

if(mo<10) {
    mo='0'+ mo;
} 

var date = dd + "." + mo + "." + yy;
document.getElementById("dateOutput").innerHTML = date;

// ========== CHANGE ADVICE ==========

 var message = [
"Розбивайте великі задачі на підзадачі", 
"Встановлюйте дедлайни",
"Не працюйте над декількома справами одночасно" 
];

var today = new Date();
var secondsLeft = 60 - today.getSeconds();
var minutesLeft = 60 - today.getMinutes();
var hoursLeft = 24 - today.getHours();
var second = 1000;
var interval = second * secondsLeft + 
 second * 60 * minutesLeft +
 second * 60 * 60 * hoursLeft;
var counter = 0;
changeText = function()
{
	interval = second * 60 * 60 * 24;
     document.getElementById("output").innerHTML = message[counter++ % message.length];
}

setInterval(changeText, interval);

