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
        hasilPencarian.innertext = data[0].kanji.character;
        for( let x = 0; x<15;x++){
            const hasilCari = document.createElement("div");
            hasilCari.className = "card";

            const hrf =document.createElement("h3");
            hrf.textContent = data[x].kanji.character;

            const g = document.createElement('img');
            g.className = "gbr";
            g.src = data[x].kanji.strokes.images[0];

            const mean = new String(data[x].kanji.meaning.english);
            const arti = document.createElement("b");
            arti.textContent = "Meaning : ".concat(mean);

            const h = new String(data[x].kanji.kunyomi.hiragana);
            const m = new String(data[x].kanji.kunyomi.romaji);
            const hiragana = document.createElement("p");
            hiragana.textContent = "Hiragana : ".concat("\n").concat(h).concat(" ").concat("(").concat(m).concat(")");

            const k = new String(data[x].kanji.onyomi.katakana);
            const l = new String(data[x].kanji.onyomi.romaji);
            const katakana = document.createElement("p");
            katakana.textContent = "Katakana : ".concat("\n").concat(k).concat(" ").concat("(").concat(l).concat(")");

            hasilCari.appendChild(g);
            hasilCari.appendChild(hrf);
            hasilCari.appendChild(arti);
            hasilCari.appendChild(hiragana);
            hasilCari.appendChild(katakana);
            hasilPencarian.appendChild(hasilCari);

        };
    });