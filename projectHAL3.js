function uchiha(){
        const ganti2 =document.body;
        ganti2.classList.toggle("uch");
    }
    var dat;
    fetch('https://api.jikan.moe/v3/search/anime?q=dragonball&page=1/manga')
    .then((response)=>response.json())
    .then((res)=>{
        dat=res;
        const bx=document.getElementById("box");
        for(let x=0;x<10;x++){    
            const gbr=document.createElement("img");
            const div1=document.createElement("div");
            const div2=document.createElement("div");
            const judul=document.createElement("a");
            const isi=document.createElement("p");
            gbr.src=dat.results[x].image_url;
            judul.innerText=dat.results[x].title;
            judul.href=dat.results[x].url;
            isi.innerText=dat.results[x].synopsis;
            div1.className="div1";
            div2.className="div2";
            isi.className="isi1";
            gbr.width=265;
            gbr.height=347;
            div1.appendChild(gbr);
            div1.appendChild(judul);
            div1.appendChild(isi);
            div2.appendChild(div1);
            bx.appendChild(div2);
        }
    });