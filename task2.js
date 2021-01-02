var t = Number(prompt("Marks1"));
var u = Number(prompt("Marks2"));
var v = Number(prompt("Marks3"));
var x = Number(prompt("total marks"));
var y= t+u+v;
var z = (y/x)*100; 
if(z >= 80 && z <=100)
{
   alert("A-One, Excellent")
}
else if(z >= 70 && z <80 ) 
{
    alert("A, Good")
}
else if(z >=60 && z<70)
{
    alert("B, You need to improve")
}
else if (z<60 )
{
   alert("Fail, Sorry")
}