var dat;
        fetch('https://api.jikan.moe/v3/search/anime?q=pokemon&page=1/manga')
        .then((response)=>response.json())
        .then((res)=>{
            dat=res;
            const bx=document.getElementById("isian");     
            for(let x=0;x<20;x++){ 
                const gbr=document.createElement("img");
                const judul=document.createElement("a");
                const div=document.createElement("div"); 
                const link=document.createElement("href");
                judul.innerText=dat.results[x].title;
                gbr.src=dat.results[x].image_url;
                judul.href=dat.results[x].url;
                gbr.width= 235;
                gbr.height= 317;
                div.appendChild(gbr);
                div.appendChild(judul);
                div.appendChild(link);
                bx.appendChild(div);
            }
        });

function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1/manga`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

function updateDom(data){
    const searchResults = document.getElementById('search-result');

    const animeByCategories = data.results
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            .sort((a,b)=>a.episodes-b.episodes)
            .map(anime=>{
                return `
                    <div class="card">
                        <div class="card-image">
                            <img src="${anime.image_url}" class="imgg">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${anime.title}</h3>
                            <p>${anime.synopsis}</p>
                        </div>
                        <div class="card-action">
                            <a href="${anime.url}">Find out more</a>
                        </div>
                    </div>
                `
            }).join("");


            return `
                <section>
                    <h1>${key.toUpperCase()}</h1>
                    <div class="kemicofa-row">${animesHTML}</div>
                </section>
            `
        }).join("");
}

function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}
window.addEventListener("load", pageLoaded);

function uchiha(){
    const ganti2 =document.body;
    ganti2.classList.toggle("uch");
}
