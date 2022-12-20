import heroImg from './assets/title-image.jpg'

function hero(){
    //anchor
    const heroAnchor = document.getElementById("heroDiv")

    //titleBox
    const titleBoxDiv = document.createElement("div");
    titleBoxDiv.textContent = "titleBoxDiv";
    titleBoxDiv.classList.add("title-box");
    heroAnchor.appendChild(titleBoxDiv);

    //titleBox-title
    const titleBoxTitle = document.createElement("div");
    titleBoxTitle.textContent = "Fresh grilled burgers";
    titleBoxTitle.classList.add("title");
    titleBoxDiv.appendChild(titleBoxTitle);

    //titleBox-subtitle
    const titleBoxSubTitle = document.createElement("div");
    titleBoxSubTitle.textContent = "Freshly made 100% beef patties straight from the friggin' grinder! The only handmade, home-made grilled burgers in U.P. Diliman! come get your f***in burgers only here at the Snack Shack!";
    titleBoxSubTitle.classList.add("subtitle");
    titleBoxDiv.appendChild(titleBoxSubTitle); 
    
    //titleBox-button
    const titleBoxButton = document.createElement("button");
    titleBoxButton.textContent = "Order";
    titleBoxButton.classList.add("order");
    titleBoxDiv.appendChild(titleBoxButton);

    //storesDiv
    const storesDiv = document.createElement("div");
    storesDiv.textContent = "storesDiv";
    heroAnchor.appendChild(storesDiv);


    //storesDiv-Img
    const  storesDivImg = document.createElement("img");
    storesDivImg.src = heroImg;
    storesDivImg.classList.add("hero-image");
    storesDiv.appendChild(storesDivImg);
    /* event listener to homepage*/

}

export default hero;
