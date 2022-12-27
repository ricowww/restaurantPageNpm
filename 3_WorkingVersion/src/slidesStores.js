import upStore from './assets/ssUP.jpeg'
import mcStore from './assets/ssMC.jpg'
import skStore from './assets/ssSK.jpg'



function slidesStores(){
    //anchor
    const slidesStoresAnchor = document.getElementById("slidesDiv");

    //title
    const title = document.createElement("div");
    title.classList.add("slides-title");
    title.textContent = "Visit our stores!";
    slidesStoresAnchor.appendChild(title);

    //slides
    const slides = document.createElement("div");
    slides.classList.add("slides");
    slidesStoresAnchor.appendChild(slides);

    //slides-figureUP
    const figureUP = document.createElement("figure");
    figureUP.classList.add("fig");
    slides.appendChild(figureUP);
    //slides-figureUP-img
    const figureUPImg = document.createElement("img");
    figureUPImg.classList.add("fig-img");
    figureUPImg.src = upStore;
    figureUP.appendChild(figureUPImg);
    //slides-figureUP-caption
    const figureUPCap = document.createElement("figcaption");
    figureUPCap.classList.add("fig-img");
    figureUPCap.textContent = "UP Diliman Fitness Center";
    figureUP.appendChild(figureUPCap);
    //slides-figureUP-caption-details
    const figureUPCapDet = document.createElement("ul");
    figureUPCapDet.l1 = document.createElement("li");
    figureUPCapDet.l2 = document.createElement("li");
    figureUPCapDet.l3 = document.createElement("li");
    figureUPCapDet.classList.add("storelist");
    (figureUPCapDet.l1).classList.add("cta-subtitle");
    (figureUPCapDet.l2).classList.add("cta-subtitle");
    (figureUPCapDet.l3).classList.add("cta-subtitle");
    (figureUPCapDet.l1).textContent = "10:00AM - 07:00PM";
    (figureUPCapDet.l2).textContent = "09152599495";
    (figureUPCapDet.l3).textContent = "UP SnackShack Online Orders (link)";
    figureUPCap.appendChild(figureUPCapDet);
    figureUPCapDet.appendChild(figureUPCapDet.l1);
    figureUPCapDet.appendChild(figureUPCapDet.l2);
    figureUPCapDet.appendChild(figureUPCapDet.l3);

    //slides-figureSK
    const figureSK = document.createElement("figure");
    figureSK.classList.add("fig");
    slides.appendChild(figureSK);
    //slides-figureSK-img
    const figureSKImg = document.createElement("img");
    figureSKImg.classList.add("fig-img");
    figureSKImg.src = skStore;
    figureSK.appendChild(figureSKImg);
    //slides-figureUP-caption
    const figureSKCap = document.createElement("figcaption");
    figureSKCap.classList.add("fig-img");
    figureSKCap.textContent = "Sikatuna Village QC";
    figureSK.appendChild(figureSKCap);
    //slides-figureUP-caption-details
    const figureSKCapDet = document.createElement("ul");
    figureSKCapDet.l1 = document.createElement("li");
    figureSKCapDet.l2 = document.createElement("li");
    figureSKCapDet.l3 = document.createElement("li");
    figureSKCapDet.classList.add("storelist");
    (figureSKCapDet.l1).classList.add("cta-subtitle");
    (figureSKCapDet.l2).classList.add("cta-subtitle");
    (figureSKCapDet.l3).classList.add("cta-subtitle");
    (figureSKCapDet.l1).textContent = "11:30AM - 09:00PM";
    (figureSKCapDet.l2).textContent = "09265122257";
    (figureSKCapDet.l3).textContent = "SK SnackShack Online Orders (link)";
    figureSKCap.appendChild(figureSKCapDet);
    figureSKCapDet.appendChild(figureSKCapDet.l1);
    figureSKCapDet.appendChild(figureSKCapDet.l2);
    figureSKCapDet.appendChild(figureSKCapDet.l3);

    //slides-figureMC
    const figureMC = document.createElement("figure");
    figureMC.classList.add("fig");
    slides.appendChild(figureMC);
    //slides-figureSK-img
    const figureMCImg = document.createElement("img");
    figureMCImg.classList.add("fig-img");
    figureMCImg.src = mcStore;
    figureMC.appendChild(figureMCImg);
    //slides-figureUP-caption
    const figureMCCap = document.createElement("figcaption");
    figureMCCap.classList.add("fig-img");
    figureMCCap.textContent = "Marikina Concepcion";
    figureMC.appendChild(figureMCCap);
    //slides-figureUP-caption-details
    const figureMCCapDet = document.createElement("ul");
    figureMCCapDet.l1 = document.createElement("li");
    figureMCCapDet.l2 = document.createElement("li");
    figureMCCapDet.l3 = document.createElement("li");
    figureMCCapDet.classList.add("storelist");
    (figureMCCapDet.l1).classList.add("cta-subtitle");
    (figureMCCapDet.l2).classList.add("cta-subtitle");
    (figureMCCapDet.l3).classList.add("cta-subtitle");
    (figureMCCapDet.l1).textContent = "11:30AM - 09:00PM";
    (figureMCCapDet.l2).textContent = "09153094580";
    (figureMCCapDet.l3).textContent = "MC SnackShack Online Orders (link)";
    figureMCCap.appendChild(figureMCCapDet);
    figureMCCapDet.appendChild(figureMCCapDet.l1);
    figureMCCapDet.appendChild(figureMCCapDet.l2);
    figureMCCapDet.appendChild(figureMCCapDet.l3);

}

export default slidesStores;