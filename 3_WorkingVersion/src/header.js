import headerLogo from './assets/header-logo.jpg'

function header(){
    
    //anchor
    const headerAnchor = document.getElementById("headerSectionDiv")

    //headerBox
    const headerBoxDiv = document.createElement("div");
    headerBoxDiv.textContent = "headerBoxDiv";
    headerBoxDiv.classList.add("header-box");
    headerAnchor.appendChild(headerBoxDiv);
    
    //headerBox-logoImg
    const logoImg = document.createElement("img");
    logoImg.src = headerLogo;
    logoImg.classList.add("header-logo");
    headerBoxDiv.appendChild(logoImg);
    /* event listener to homepage*/

    //headerBox-logoText
    const logoText = document.createElement("div");
    logoText.textContent = "SNACK SHACK";
    logoText.classList.add("icon-text");
    headerAnchor.appendChild(logoText);

    //headerLinks
    const headerLinks = document.createElement("ul");
    headerLinks.classList.add("header-links");
    headerAnchor.appendChild(headerLinks);

    //headerLinks-menu
    const headerLinksMenu = document.createElement("li");
    headerLinksMenu.textContent = "Menu";
    headerLinks.appendChild(headerLinksMenu);

    //headerLinks-stores
    const headerLinksStores = document.createElement("li");
    headerLinksStores.textContent = "Stores";
    headerLinks.appendChild(headerLinksStores);

    //headerLinks-order
    const headerLinksOrder = document.createElement("li");
    headerLinksOrder.textContent = "Order";
    headerLinks.appendChild(headerLinksOrder);

}

export default header;
