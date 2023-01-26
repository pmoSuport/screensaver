//DOM
var img=document.getElementById("image");
var con=document.getElementById("container");
var dotes=document.querySelectorAll(".dot");
var images = [
"https://images.unsplash.com/photo-1563889958751-bac9d543bdbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1528310148982-03940d522f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHB1Z3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1530041439653-3add9b1ccf29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHB1Z3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1602193924859-684342123656?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHB1Z3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
];
var i=0;
var a;
img.src=images[0];
i++;
function cleardotes(){
    dotes.forEach(dot=>{
        dot.style.backgroundColor="grey";
    })
}
function screensaver(){
    cleardotes();
    dotes[i].style.backgroundColor="white";
    img.src=images[i];
    if(i==images.length-1){
        i=-1;
    }
    i++;
    
    a=setTimeout("screensaver()",1000);
}
var j=0;
 function clickk(){
if(j%2!=0){
    btn.innerText="Play";
    clearTimeout(a);
}
else{
    btn.innerText="Pause";
    screensaver();
}
j++;
 }
// window.onload=screensaver;

var btn=document.getElementById("btn");

btn.innerText="Play"; 
btn.addEventListener("click",clickk);
