function homePage() {
    const content = document.querySelector("#content");
    const divTitle = document.createElement("div");
    divTitle.classList.add("title");
    content.appendChild(divTitle);
    const title = document.createElement("h1");
    title.textContent = "Welcome to Marilia's Restaurant";
    divTitle.appendChild(title);
    const divSum = document.createElement("div");
    divSum.classList.add("summary");
    content.appendChild(divSum);
    const summary = document.createElement("p");
    summary.textContent = "This is the restaurant of your dreams, you can find all the ethnic foods you can think of.\n It is impossible to find anything like this.";
    divSum.appendChild(summary);
    
    
    return;
}

export {homePage};