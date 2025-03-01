
function work(s){
    alert("Board Updated Successfully");
    document.getElementById(s).style=`background: rgb(55, 82, 253);
    opacity: 0.2;`;
    let dec=document.getElementById('decrease').innerText;
    dec=parseInt(dec)-1;
    document.getElementById('decrease').innerText='0'+dec;
    let inc=document.getElementById('increase').innerText;
   inc=parseInt(inc)+1;
    document.getElementById('increase').innerText=inc;
   let time=t();
    let div=document.createElement("div");
    let para="para"+s.charAt(s.length-1);
     para= document.getElementById(para);
    div.innerHTML=`
    <p class="bg-bgcol opacity-[70] p-2 m-5">You have complete the task ${para.innerText} at ${time}</p>
    `
    document.getElementById('comment').appendChild(div);
}
function t()
{
let h= new Date();
let hours= h.getHours() % 12 || 12;
let min= h.getMinutes();
let sec= h.getSeconds();
let period= h.getHours() >= 12 ? " PM" : " AM"; 
min= min < 10 ? "0" + min : min;
sec= sec < 10 ? "0" + sec : sec;
return (hours + ":" + min + ":" + sec + period);

}
document.getElementById('desk').addEventListener("click",function(){
    window.location.href="index.html";
})


