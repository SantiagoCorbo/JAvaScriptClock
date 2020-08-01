window.addEventListener("load", start);

//all script inside it
function start(){

  function getTime(){
    //get date objet
    var date = new Date();

    //get hour, minutes and seconds
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    //Add 0 if it is less than 10

    hour = allDecimal(hour);
    minutes = allDecimal(minutes);
    seconds = allDecimal(seconds);

    document.getElementById("clock").innerText = hour + " : " + minutes + " : " + seconds; 
    backgroundColor(hour, minutes, seconds);
    //call function to get and print time at 1(1000 milliseconds) second each in a loop
    setTimeout(function(){ getTime() },1000);    
  }

  function allDecimal(num){
    var back = "";
    //veryify if num is less tahn 10, if it is add an 0 and return it
    if(num < 10) {
      back = "0" + num;
    }else{
      back = num;
    }
    return back;
  }

  //Change background color of div(class="container") 
  //Now body do the same
  function backgroundColor(){
    //all color posible characters
    var hex = "0123456789ABCDEF"
    //store final color
    var color = "#";
    var colorBody = "#";
    //creates a random color
    for(i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)];
      colorBody += hex[Math.floor(Math.random() * 16)];
    }
    //aplly the color
    document.getElementById("container").style.backgroundColor = color;
    document.getElementById("body").style.backgroundColor = colorBody;
    
  }
  
  getTime(); 
}





