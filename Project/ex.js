const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00dd35f21cmshafe7a748871a626p1bdee7jsn37b8335d4209',
		'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
	}
};

fetch('https://kanjialive-api.p.rapidapi.com/api/public/kanji/all', options)
    .then(response => response.json())
    .then( (result) => {
        const data=result;
        console.log(result);
        const hasilPencarian = document.querySelector('#box');
        hasilPencarian.innertext = data[0].examples[0].japanese;
        for( let x = 0; x<25;x++){
            const hasilCari = document.createElement("div");
            hasilCari.className = "card";

            const hrf =document.createElement("h3");
            hrf.textContent = data[x].examples[0].japanese;

            const mean = new String(data[x].examples[0].meaning.english);
            const arti = document.createElement("b");
            arti.textContent = "Meaning : ".concat(mean);

            const d =document.createElement("iframe");
            d.className = "audio";
            d.src = data[x].examples[0].audio.mp3;
         
            hasilCari.appendChild(hrf);
            hasilCari.appendChild(arti);
            arti.appendChild(d);
            hasilPencarian.appendChild(hasilCari);

        };
    });