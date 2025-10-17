function menuPage() {
    const content = document.querySelector("#content");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    content.appendChild(titleDiv);
    const title = document.createElement("h1");
    title.textContent = "MENU";
    titleDiv.appendChild(title);

    return;
}

export {menuPage};