
var a=Math.floor(Math.random()*100+1);
var count=0;
function guessNumber()
{
   var val= parseInt(document.getElementById("guessfield").value);
    if(val==a)
    {
        document.getElementById("result").textContent="Congratulations!!,you got the number in "+(count+1)+ " tries";
    }
    else if(val<a)
    {
        count++;
        document.getElementById("result").textContent="Try with a greater number";

    }
    else{
        count++
        document.getElementById("result").textContent="Try with a smaller number";
    }
}