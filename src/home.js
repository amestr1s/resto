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
    summary.textContent = "This is the restaurant of your dreams, you can find all the ethnic foods you can think of. It is impossible to find anything like this.";
    divSum.appendChild(summary);
    const hisDiv = document.createElement("div");
    hisDiv.classList.add("history");
    content.appendChild(hisDiv);
    const history = document.createElement("p");
    history.textContent = "From a young age Marilia knew that indigenous food could only get you so far, so she started experimenting with food from multiple continents with an emphasis on asian culinary skills.";
    hisDiv.appendChild(history);
    
    
    return;
}

export {homePage};