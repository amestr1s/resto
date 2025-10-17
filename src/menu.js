import mapoImg from "./img/mapo.png";
import tonkatsuImg from "./img/tonkatsu.png";
import salmonImg from "./img/salmon.png";


function menuPage() {
    const content = document.querySelector("#content");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    content.appendChild(titleDiv);
    const title = document.createElement("h1");
    title.textContent = "MENU";
    titleDiv.appendChild(title);
    //mapo
    const mapoDiv = document.createElement("div");
    mapoDiv.classList.add("mapo");
    content.appendChild(mapoDiv);
    const mapoH2 = document.createElement("h2");
    mapoH2.textContent = "Mapo Tofu";
    mapoDiv.appendChild(mapoH2);
    const mapoDivCon = document.createElement("div");
    mapoDivCon.classList.add("mapoDivCon");
    mapoDiv.appendChild(mapoDivCon);
    const mapoP = document.createElement("p");
    mapoP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus fringilla lacus imperdiet scelerisque. Ut blandit orci sed cursus bibendum. Aliquam hendrerit a orci eget mattis. Donec est risus, ullamcorper vel eros ac, vehicula tristique sapien. Vivamus ut nulla justo. Etiam vel commodo sem. ";
    mapoDivCon.appendChild(mapoP);
    const mapo = document.createElement("img");
    mapo.src = mapoImg;
    mapoDivCon.appendChild(mapo);
    //tonkatsu
    const tonkatsuDiv = document.createElement("div");
    tonkatsuDiv.classList.add("tonkatsu");
    content.appendChild(tonkatsuDiv);
    const tonkatsuH2 = document.createElement("h2");
    tonkatsuH2.textContent = "Tonkatsu";
    tonkatsuDiv.appendChild(tonkatsuH2);
    const tonkatsuDivCon = document.createElement("div");
    tonkatsuDivCon.classList.add("tonkatsuDivCon");
    tonkatsuDiv.appendChild(tonkatsuDivCon);
    const tonkatsuP = document.createElement("p");
    tonkatsuP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus fringilla lacus imperdiet scelerisque. Ut blandit orci sed cursus bibendum. Aliquam hendrerit a orci eget mattis. Donec est risus, ullamcorper vel eros ac, vehicula tristique sapien. Vivamus ut nulla justo. Etiam vel commodo sem. ";
    tonkatsuDivCon.appendChild(tonkatsuP);
    const tonkatsu = document.createElement("img");
    tonkatsu.src = tonkatsuImg;
    tonkatsuDivCon.appendChild(tonkatsu);
    //salmon
    const salmonDiv = document.createElement("div");
    salmonDiv.classList.add("salmon");
    content.appendChild(salmonDiv);
    const salmonH2 = document.createElement("h2");
    salmonH2.textContent = "Salmon Teriyaki";
    salmonDiv.appendChild(salmonH2);
    const salmonDivCon = document.createElement("div");
    salmonDivCon.classList.add("salmonDivCon");
    salmonDiv.appendChild(salmonDivCon);
    const salmonP = document.createElement("p");
    salmonP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus fringilla lacus imperdiet scelerisque. Ut blandit orci sed cursus bibendum. Aliquam hendrerit a orci eget mattis. Donec est risus, ullamcorper vel eros ac, vehicula tristique sapien. Vivamus ut nulla justo. Etiam vel commodo sem. ";
    salmonDivCon.appendChild(salmonP);
    const salmon = document.createElement("img");
    salmon.src = salmonImg;
    salmonDivCon.appendChild(salmon);
    return;
}

export {menuPage};