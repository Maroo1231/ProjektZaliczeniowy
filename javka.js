function zespol(){
    window.location.href = 'zespol.html';
}

function galeria(){
    window.location.href = 'galeria.html';
}
function forum(){
    window.location.href = 'forum.html';
}
const naglowki = ["Nr", "Drużyna", "M", "Z", "R", "P", "Pkt"];

const daneLigowe = [
    { pozycja: 1, druzyna: "Sparta Wrocław", mecze: 8, wygrane: 8, remisy: 0, przegrane: 0, punkty: 17 },
    { pozycja: 2, druzyna: "Motor Lublin", mecze: 10, wygrane: 7, remisy: 0, przegrane: 3, punkty: 16 },
    { pozycja: 3, druzyna: "Stal Gorzów", mecze: 9, wygrane: 5, remisy: 1, przegrane: 3, punkty: 13 },
    { pozycja: 4, druzyna: "Włókniarz Częstochowa", mecze: 8, wygrane: 4, remisy: 2, przegrane: 2, punkty: 11 },
    { pozycja: 5, druzyna: "Unia Leszno", mecze: 10, wygrane: 6, remisy: 3, przegrane: 0, punkty: 6 },
    { pozycja: 6, druzyna: "Apator Toruń", mecze: 8, wygrane: 3, remisy: 0, przegrane: 5, punkty: 6 },
    { pozycja: 7, druzyna: "Wilki Krosno", mecze: 8, wygrane: 2, remisy: 0, przegrane: 6, punkty: 4 },
    { pozycja: 8, druzyna: "GKM Grudziąć", mecze: 9, wygrane: 1, remisy: 1, przegrane: 7, punkty: 4 },
   
];


function generujWierszeTabeli() {
    const tabelaBody = document.getElementById("ligowa-tabela-body");
    
    daneLigowe.forEach((druzyna) => {
        const wiersz = document.createElement("tr");
        
        const pozycja = document.createElement("td");
        pozycja.textContent = druzyna.pozycja;
        wiersz.appendChild(pozycja);
        
        const nazwaDruzyny = document.createElement("td");
        nazwaDruzyny.textContent = druzyna.druzyna;
        wiersz.appendChild(nazwaDruzyny);
        
        const zagraneMecze = document.createElement("td");
        zagraneMecze.textContent = druzyna.mecze;
        wiersz.appendChild(zagraneMecze);
        
        const wygrane = document.createElement("td");
        wygrane.textContent = druzyna.wygrane;
        wiersz.appendChild(wygrane);
        
        const remisy = document.createElement("td");
        remisy.textContent = druzyna.remisy;
        wiersz.appendChild(remisy);
        
        const przegrane = document.createElement("td");
        przegrane.textContent = druzyna.przegrane;
        wiersz.appendChild(przegrane);
        
        const punkty = document.createElement("td");
        punkty.textContent = druzyna.punkty;
        wiersz.appendChild(punkty);
        
        tabelaBody.appendChild(wiersz);
    });
}


window.onload=function() {
generujWierszeTabeli();
}