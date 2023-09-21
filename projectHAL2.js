var dat;
const bx=document.getElementById("cont");
const div1=document.createElement("div");
for(let x=0;x<35;x++){
fetch('https://api.waifu.im/random/')
.then((response)=>response.json())
.then((res)=>{
    dat=res;    
    const gbr=document.createElement("img");
    gbr.src=dat.images[0].url;
    gbr.width=200;
    gbr.height=200;
    div1.appendChild(gbr);
    bx.appendChild(div1);
});
}
function uchiha(){
    const ganti2 =document.body;
    ganti2.classList.toggle("uch");
}