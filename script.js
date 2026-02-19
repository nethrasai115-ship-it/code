var arr = [];
var wicketcount = 0;
var balls = 0;
var totalscore;
function addscore(n) {    
    if (n == "W") {
        wicketcount++;   
    }
    if (n == '1nb' || n == '1wd') {
        arr.push(n);
    } else if (balls == 5) {
        arr.push(n);
        arr.push("|")
        balls = 0;
    } else if (balls < 6) {
        balls++;
        arr.push(n);
    } else {
        arr.push(n);
    } 
    genuiscoreline();
    genuiscore();
}
function genuiscoreline() {
    document.getElementById("scores").innerText = "";
    var scorestring = ""
    arr.forEach((a) => {
        scorestring += a + " ";
    })
    document.getElementById("scores").innerText = scorestring;
}

function genuiscore() {
       var numbers = arr.filter((a) => typeof (a) === "number");
    totalscore = numbers.reduce((a, b) => a + b, 0);

    arr.forEach((n) => {
        if (n == '1nb' || n == '1wd') {
            totalscore += 1;
        }
    })

    document.getElementById("wickets").innerText = wicketcount;
    document.getElementById("points").innerText = totalscore;

}
