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
    const mapoP = document.createElement("p");
    mapoP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus fringilla lacus imperdiet scelerisque. Ut blandit orci sed cursus bibendum. Aliquam hendrerit a orci eget mattis. Donec est risus, ullamcorper vel eros ac, vehicula tristique sapien. Vivamus ut nulla justo. Etiam vel commodo sem. ";
    mapoDiv.appendChild(mapoP);
    //tonkatsu
    const tonkatsuDiv = document.createElement("div");
    tonkatsuDiv.classList.add("tonkatsu");
    content.appendChild(tonkatsuDiv);
    const tonkatsuH2 = document.createElement("h2");
    tonkatsuH2.textContent = "Tonkatsu";
    tonkatsuDiv.appendChild(tonkatsuH2);
    const tonkatsuP = document.createElement("p");
    tonkatsuP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus fringilla lacus imperdiet scelerisque. Ut blandit orci sed cursus bibendum. Aliquam hendrerit a orci eget mattis. Donec est risus, ullamcorper vel eros ac, vehicula tristique sapien. Vivamus ut nulla justo. Etiam vel commodo sem. ";
    tonkatsuDiv.appendChild(tonkatsuP);
    //salmon
    const salmonDiv = document.createElement("div");
    salmonDiv.classList.add("salmon");
    content.appendChild(salmonDiv);
    const salmonH2 = document.createElement("h2");
    salmonH2.textContent = "Salmon Teriyaki";
    salmonDiv.appendChild(salmonH2);
    const salmonP = document.createElement("p");
    salmonP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus fringilla lacus imperdiet scelerisque. Ut blandit orci sed cursus bibendum. Aliquam hendrerit a orci eget mattis. Donec est risus, ullamcorper vel eros ac, vehicula tristique sapien. Vivamus ut nulla justo. Etiam vel commodo sem. ";
    salmonDiv.appendChild(salmonP);
    return;
}

export {menuPage};