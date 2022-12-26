function callToAction() {
    //anchor
    const ctaAnchor = document.getElementById("callToActionDiv")

    //ctaContainerDiv
    const ctaContainerDiv = document.createElement("div");
    ctaContainerDiv.classList.add("cta-container");
    ctaAnchor.appendChild(ctaContainerDiv);

    //ctaContainerDiv-BoxDiv
    const ctaContainerDivBoxDiv = document.createElement("div");
    ctaContainerDivBoxDiv.classList.add("cta-box");
    ctaContainerDiv.appendChild(ctaContainerDivBoxDiv);

    //ctaContainerDiv-BoxDiv-Title
    const ctaContainerDivBoxDivTitle = document.createElement("div");
    ctaContainerDivBoxDivTitle.classList.add("cta-title");
    ctaContainerDivBoxDivTitle.textContent = "Come get your f***in burgers only here at the Snack Shack!";
    ctaContainerDivBoxDiv.appendChild(ctaContainerDivBoxDivTitle);

    //ctaContainerDiv-BoxDiv-Subtitle
    const ctaContainerDivBoxDivSubTitle = document.createElement("div");
    ctaContainerDivBoxDivSubTitle.classList.add("cta-subtitle");
    ctaContainerDivBoxDivSubTitle.textContent = "Order thru Grab, Facebook, SMS, Phone, or deliver/courier services!";
    ctaContainerDivBoxDiv.appendChild(ctaContainerDivBoxDivSubTitle);

    //ctaContainerDiv-Button
    const ctaContainerDivButton = document.createElement("button");
    ctaContainerDivButton.textContent = "order";
    ctaContainerDivButton.classList.add("order");
    ctaContainerDiv.appendChild(ctaContainerDivButton); 


}

export default callToAction;