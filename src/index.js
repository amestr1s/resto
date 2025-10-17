import "./styles.css";
import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./about";


const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const content = document.querySelector("#content");


homeBtn.addEventListener("click", (event) => {
            
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
    homePage();
});

menuBtn.addEventListener("click", (event) => {
            
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
    menuPage();
});

contactBtn.addEventListener("click", (event) => {
            
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild);
    }
    contactPage();
});

contactPage();
// menuPage();
// homePage();