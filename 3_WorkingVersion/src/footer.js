function footer(){
    //anchor
    const footerAnchor = document.getElementById("footerDiv")

    //footerDiv
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.textContent = "Copyright @The Snack Shack 2022";
    footerAnchor.appendChild(footerDiv);

}

export default footer;