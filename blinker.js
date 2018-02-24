$(function(){
    var opened = '+_+';
    var closed = '-_-';

    var theX = $('#theX');
    
    function close() {
        theX.text(closed);
    }

    function open() {
        theX.text(opened);
        waitRandAndBlink()
    }
    
    function blink() {
        close();
        var rand =  Math.floor(Math.random() * (300 - 50 + 1)) + 50;
        setTimeout(open, rand);
    }

    function waitRandAndBlink() {
        var rand = Math.round(Math.random() * 10) * 500
        setTimeout(blink, rand);
    }

    waitRandAndBlink();
 });