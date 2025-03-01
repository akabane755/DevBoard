document.getElementById('themebtn').addEventListener("click",function(){
    let r=Math.random()*256;
    let g=Math.random()*256;
    let b=Math.random()*256;
    document.getElementById('body').style.background=`rgb(${r},${g},${b})`;
})
let btn1f=false;
let btn2f=false;
let btn3f=false;
let btn4f=false;
let btn5f=false;
let btn6f=false;
document.getElementById('btn1').addEventListener("click",function(){
    if(btn1f===false)
    work('btn1');
 btn1f=true;
 if(document.getElementById('decrease').innerText=="00")
 {
    alert("Congrats!!You have compeleted all the current tasks");
 }
})
document.getElementById('btn2').addEventListener("click",function(){
    if(btn2f===false)
    work('btn2');
 btn2f=true;
 if(document.getElementById('decrease').innerText=="00")
    {
       alert("Congrats!!You have compeleted all the current tasks");
    }
})
document.getElementById('btn3').addEventListener("click",function(){
    if(btn3f===false)
    work('btn3');
 btn3f=true;
 if(document.getElementById('decrease').innerText=="00")
    {
       alert("Congrats!!You have compeleted all the current tasks");
    }
})
document.getElementById('btn4').addEventListener("click",function(){
    if(btn4f===false)
    work('btn4');
 btn4f=true;
 if(document.getElementById('decrease').innerText=="00")
    {
       alert("Congrats!!You have compeleted all the current tasks");
    }
})
document.getElementById('btn5').addEventListener("click",function(){
    if(btn5f===false)
    work('btn5');
 btn5f=true;
 if(document.getElementById('decrease').innerText=="00")
    {
       alert("Congrats!!You have compeleted all the current tasks");
    }
})
document.getElementById('btn6').addEventListener("click",function(){
    if(btn6f===false)
    work('btn6');
 btn6f=true;
 if(document.getElementById('decrease').innerText=="00")
    {
       alert("Congrats!!You have compeleted all the current tasks");
    }
})
document.getElementById('entry').addEventListener("click",function(){
    window.location.href="main.html";
})
document.addEventListener("DOMContentLoaded", function() {
    let h = new Date();
    let day = h.getDay();
    let month = h.getMonth() ; 
    let year = h.getFullYear();
    let date1 = h.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.getElementById('date').innerText = months[month] + " " + date1 + " " + year;
});
document.addEventListener("DOMContentLoaded",function(){
    let h=new Date();
    day=h.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    document.getElementById('day').innerText= days[day]+",";

})
document.getElementById('clr').addEventListener("click",function(){
    document.getElementById('comment').innerHTML="";
})