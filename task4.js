var x = Number(prompt("Enter any integer"));
var z = Number(prompt("ENTER another integer"));
if(x>=0 && z>=0 && x>z){
    console.log("The larger value is" +x)
}
else if (x>=0 && z>=0 && z>x){
    console.log("the larger value is " +z);
} 
else if (x==z){
    console.log("Both values are equal and their value is " +x)
}
else if(x<0 && z<0 && x>z){
    console.log("The larger value is " +x)
}
else if (x<0 && z<0 && x<z){
    console.log("The larger value is " +z)
} 
else if (x<0 && z>=0){
    console.log("The larger value is " +z)
   
} 
else if(x>=0 && z<0){
    console.log("The larger value is " +x)
}