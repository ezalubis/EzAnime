const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '00dd35f21cmshafe7a748871a626p1bdee7jsn37b8335d4209',
		'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
	}
};

const hasilPencarian = document.querySelector('#out-put');
const elemenLoading = document.querySelector('#loading');

document.querySelector('#button').onclick = (e) => {
    e.preventDefault();
    hasilPencarian.innerHTML = ' ';
    let value = document.querySelector('#input').value;
    let url = 'https://kanjialive-api.p.rapidapi.com/api/public/search/' + value ;
    console.log(url);
    fetch(url,options)
        .then(response => response.json())
        .then(result => {
            const isi = result.isi;
            console.log(isi);

            const hasil = document.createElement('div');

            const title= document.createElement('h1');
            title.textContent = 'Search Result';
            hasil.appendChild(title);

            const litel = document.createElement('h3');
            litel.textContent = value + ' ' + 'in Kanji';
            hasil.appendChild(litel);

            const elementDescripsi = document.createElement('p');
            elementDescripsi.textContent = result[0].kanji.character;
            hasil.appendChild(elementDescripsi);

            hasilPencarian.appendChild(hasil);
            console.log(hasilPencarian);

        });
    document.dapatkanData.reset();
}
document.querySelector('#button').click();