var dat;
    fetch('https://api.jikan.moe/v4/anime?q=naruto&sfw')
    .then((response)=>response.json())
    .then((res)=>{
        dat=res;
        const bx=document.getElementById("box");
        for(let x=0;x<50;x++){    
            const gbr=document.createElement("img");
            const div1=document.createElement("div");
            const div2=document.createElement("div");
            const judul=document.createElement("h5");
            const isi=document.createElement("p");
            gbr.src=dat.results[x].image_url;
            judul.innerText=dat.results[x].title;
            isi.innerText=dat.results[x].synopsis;
            div1.className="div1";
            div2.className="div2";
            isi.className="isi1";
            gbr.width=225;
            gbr.height=317;
            div1.appendChild(gbr);
            div1.appendChild(judul);
            div1.appendChild(isi);
            div2.appendChild(div1);
            bx.appendChild(div2);
        }
    });
var dat;
    fetch('https://api.jikan.moe/v4/anime?q=naruto&sfw')
    .then((response)=>response.json())
    .then((res)=>{
        dat=res;
        const bx=document.getElementById("box2");
        for(let x=0;x<50;x++){    
            const gbr=document.createElement("img");
            const div1=document.createElement("div");
            const div2=document.createElement("div");
            const judul=document.createElement("h5");
            const isi=document.createElement("p");
            gbr.src=dat.results[x].image_url;
            judul.innerText=dat.results[x].title;
            isi.innerText=dat.results[x].synopsis;
            div1.className="div1";
            div2.className="div2";
            isi.className="isi1";
            gbr.width=225;
            gbr.height=317;
            div1.appendChild(gbr);
            div1.appendChild(judul);
            div1.appendChild(isi);
            div2.appendChild(div1);
            bx.appendChild(div2);
        }
    });

    function uchiha(){
        const ganti2 =document.body;
        ganti2.classList.toggle("uch");
    }
    
const akun = ["Facebook", "Instagram", "Whatsapp"];
document.getElementById("sosmed1").innerHTML = akun[0];
document.getElementById("sosmed2").innerHTML = akun[1];
document.getElementById("sosmed3").innerHTML = akun[2];
