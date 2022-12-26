function quotes(){
    //anchor
    const quotesAnchor = document.getElementById("quotesDiv");

    //cite-pQuote
    const quotesPQ = document.createElement("p");
    quotesPQ.classList.add("quote");
    quotesPQ.textContent = "Great food with generous servings! I highly recommend the half pounder with cheese, to which I add extra jalapenos, bacon, and blue cheese. Add a side of regular fries and you have there a divine combination...";
    quotesAnchor.appendChild(quotesPQ);

    //cite-pAuthor
    const quotesPA = document.createElement("p");
    quotesPA.classList.add("cite");
    quotesPA.textContent = "G. Guibone, Google Reviews";
    quotesAnchor.appendChild(quotesPA);

}

export default quotes;