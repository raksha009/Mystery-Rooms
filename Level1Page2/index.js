
var flag = 0;
var timeLeft = 60;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
        if (flag != 1){
          if (timeLeft == -1) {
            clearTimeout(timerId);
            elem.innerHTML = "Time's Up!";
            document.getElementById('time').style.display = "block";
          } else {
            elem.innerHTML = timeLeft + 'seconds remaining!';
            timeLeft--;
          }
        }
    }


function validate1(){
 var input1 = document.getElementById('answer1').value;
 if(input1.toUpperCase() == "BARNEY"){
     document.getElementById('correct').style.display = "block";
     flag = 1;
 }
 else{
     document.getElementById('wrong').style.display = "block";
     flag = 1;
 }
}
