
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00dd35f21cmshafe7a748871a626p1bdee7jsn37b8335d4209',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

fetch('https://free-news.p.rapidapi.com/v1/search?q=japan&lang=en', options)
.then( (response) => {
    return response.json();
})
.then( (n) => {
    const isi= n;
    console.log(n);
    const hasilPencarian = document.querySelector('#box');

    for(let x=0;x<25;x++) {
        const hasilCari = document.createElement("div");
        hasilCari.className = "card";

        const hrf =document.createElement("h1");
        hrf.textContent = isi.articles[x].title;

        const g = document.createElement('img');
        g.className = "gbr";
        g.src = isi.articles[x].media;
        g.alt = "Sorry, Image not Found";

        const d = new String( isi.articles[x].published_date_precision);
        const dp = new String(isi.articles[x].published_date);
        const p = document.createElement("p");
        p.textContent = "Published by : " + d + " on " + dp;

        const s = document.createElement("h5");
        s.textContent =  isi.articles[x].summary;

        const l = document.createElement("a");
        l.href = isi.articles[x].link;
        l.textContent = "Learn More..";
        
        hasilCari.appendChild(hrf);
        hasilCari.appendChild(g);
        hasilCari.appendChild(p);
        hasilCari.appendChild(s);
        hasilCari.appendChild(l);
        hasilPencarian.appendChild(hasilCari);

    }
});