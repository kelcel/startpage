function startTime() {

    var today = new Date();
    var hour = today.getHours();
    var min = today.getMinutes();
    var mon = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear().toString().slice(2);

    if (hour > 12) $('.ampm').text('pm');
    else $('.ampm').text('am');

    $('.time').text(hour + ":" + min + " ");
    $('.date').text(mon + "/" + day + "/" + year);
    var t = setTimeout(function(){startTime()}, 500);
}

$(document).ready(function(){
    startTime();
});
