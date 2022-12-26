import burgerImg from './assets/burger.jpg'
import friesImg from './assets/fries.jpg'
import wingsImg from './assets/wings.jpg'



function slidesHome(){
    //anchor
    const slidesHomeAnchor = document.getElementById("slidesDiv");

    //slidesHomeTitle
    const slidesHomeTitle = document.createElement("div");
    slidesHomeTitle.textContent = "Made with love";
    slidesHomeTitle.classList.add("slides-title");
    slidesHomeAnchor.appendChild(slidesHomeTitle);

    //slidesHomeSlides
    const slidesHomeSlides = document.createElement("div");
    slidesHomeSlides.classList.add("slides");
    slidesHomeAnchor.appendChild(slidesHomeSlides);

    //slidesHomeSlides-fig-burger
    const slidesHomeFigBurger = document.createElement("figure");
    slidesHomeFigBurger.classList.add("fig");
    slidesHomeSlides.appendChild(slidesHomeFigBurger);

    //slidesHomeSlides-fig-burger-img
    const slidesHomeImgBurger = document.createElement("img");
    slidesHomeImgBurger.src = burgerImg;
    slidesHomeImgBurger.classList.add("fig-img");
    slidesHomeFigBurger.appendChild(slidesHomeImgBurger);

    //slidesHomeSlides-fig-burger-figcaption
    const slidesHomeCapBurger = document.createElement("figcaption");
    slidesHomeCapBurger.textContent = "Fresh Grilled Burgers";
    slidesHomeFigBurger.appendChild(slidesHomeCapBurger);

    //slidesHomeSlides-fig-fries
    const slidesHomeFigFries = document.createElement("figure");
    slidesHomeFigFries.classList.add("fig");
    slidesHomeSlides.appendChild(slidesHomeFigFries);

    //slidesHomeSlides-fig-fries-img
    const slidesHomeImgFries = document.createElement("img");
    slidesHomeImgFries.src = friesImg;
    slidesHomeImgFries.classList.add("fig-img");
    slidesHomeFigFries.appendChild(slidesHomeImgFries);

    //slidesHomeSlides-fig-fries-figcaption
    const slidesHomeCapFries = document.createElement("figcaption");
    slidesHomeCapFries.textContent = "French Fries";
    slidesHomeFigFries.appendChild(slidesHomeCapFries);

    //slidesHomeSlides-fig-wings
    const slidesHomeFigWings = document.createElement("figure");
    slidesHomeFigWings.classList.add("fig");
    slidesHomeSlides.appendChild(slidesHomeFigWings);

    //slidesHomeSlides-fig-wings-img
    const slidesHomeImgWings = document.createElement("img");
    slidesHomeImgWings.src = wingsImg;
    slidesHomeImgWings.classList.add("fig-img");
    slidesHomeFigWings.appendChild(slidesHomeImgWings);

    //slidesHomeSlides-fig-wings-figcaption
    const slidesHomeCapWings = document.createElement("figcaption");
    slidesHomeCapWings.textContent = "Chicken Wings";
    slidesHomeFigWings.appendChild(slidesHomeCapWings);

}

export default slidesHome;