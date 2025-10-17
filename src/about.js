function contactPage() {
    const content = document.querySelector("#content");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    content.appendChild(titleDiv);
    const title = document.createElement("h1");
    title.textContent = "CONTACT INFO";
    titleDiv.appendChild(title);
    //delivery
    const deliveryDiv = document.createElement("div");
    deliveryDiv.classList.add("delivery");
    content.appendChild(deliveryDiv);
    const deliveryH2 = document.createElement("h2");
    deliveryH2.textContent = "Delivery";
    deliveryDiv.appendChild(deliveryH2);
    const deliveryP = document.createElement("p");
    deliveryP.textContent = "Working with all delivery agencies. The food will be at your door via teleportation in 2 mins by the time you order it!";
    deliveryDiv.appendChild(deliveryP);
    //telephone
    const telDiv = document.createElement("div");
    telDiv.classList.add("tel");
    content.appendChild(telDiv);
    const telH2 = document.createElement("h2");
    telH2.textContent = "Telephone";
    telDiv.appendChild(telH2);
    const telP = document.createElement("p");
    telP.textContent = "Totally real tel no.: 21032563345";
    telDiv.appendChild(telP);
    //address
    const adDiv = document.createElement("div");
    adDiv.classList.add("address");
    content.appendChild(adDiv);
    const adH2 = document.createElement("h2");
    adH2.textContent = "Address";
    adDiv.appendChild(adH2);
    const adP = document.createElement("p");
    adP.textContent = "Totally real address: Marilia's Street, Number: 32, 11142, Neverland";
    adDiv.appendChild(adP);
    //mail
    const mailDiv = document.createElement("div");
    mailDiv.classList.add("mail");
    content.appendChild(mailDiv);
    const mailH2 = document.createElement("h2");
    mailH2.textContent = "E-Mail";
    mailDiv.appendChild(mailH2);
    const mailP = document.createElement("p");
    mailP.textContent = "Totally real email: orderme@maresto.com";
    mailDiv.appendChild(mailP);
    return;
}

export {contactPage};