function skeleton(){
    //main anchor
    const mainBody = document.getElementById("mainBody")

    //html skeleton with dummy text, class, and id

    //header 
    const headerSectionDiv = document.createElement("div");
    headerSectionDiv.textContent = "headerSectionDiv";
    headerSectionDiv.classList.add("header-box");
    headerSectionDiv.setAttribute("id", "headerSectionDiv");
    mainBody.appendChild(headerSectionDiv);

    //hero/title
    const heroDiv = document.createElement("div");
    heroDiv.textContent = "heroDiv";
    heroDiv.classList.add("title-section");
    heroDiv.setAttribute("id", "heroDiv");
    mainBody.appendChild(heroDiv);

    //slides/body
    const slidesDiv = document.createElement("div");
    slidesDiv.textContent = "slidesDiv";
    slidesDiv.classList.add("slides-section");
    slidesDiv.setAttribute("id", "slidesDiv");
    mainBody.appendChild(slidesDiv);

    //quote/testimony 
    const quotesDiv = document.createElement("div");
    quotesDiv.textContent = "quotesDiv";
    quotesDiv.classList.add("quote-section");
    quotesDiv.setAttribute("id", "quotesDiv");
    mainBody.appendChild(quotesDiv);

    //call to action 
    const callToActionDiv = document.createElement("div");
    callToActionDiv.textContent = "callToActionDiv";
    callToActionDiv.classList.add("cta-section");
    callToActionDiv.setAttribute("id", "callToActionDiv");
    mainBody.appendChild(callToActionDiv);

    //footer 
    const footerDiv = document.createElement("div");
    footerDiv.textContent = "footerDiv";
    footerDiv.classList.add("footer");
    footerDiv.setAttribute("id", "footerDiv");
    mainBody.appendChild(footerDiv);
}

export default skeleton;
