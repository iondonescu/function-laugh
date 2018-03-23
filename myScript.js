
function laugh(num){
        let message="";
        for (num;num>=1;num--){message=message+"ha";}
        message=message+"!";
        return message;
   }

 document.getElementById('myButton').onclick="myFunction()";
 myFunction (){
 let x = document.getElementById("numberHa").value();
    document.getElementById("demo").innerHTML = laugh(x);
  }
