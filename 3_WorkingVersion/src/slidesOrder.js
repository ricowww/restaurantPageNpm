import snackshackLogo from './assets/header-logo.jpg'
import grabLogo from './assets/grab.png'
import foodpandaLogo from './assets/foodpanda.png'




function slidesOrder(){
    //anchor
    const slidesOrderAnchor = document.getElementById("slidesDiv");

    //title
    const title = document.createElement("div");
    title.classList.add("slides-title");
    title.textContent = "Order now?";
    slidesOrderAnchor.appendChild(title);

    //slides
    const slides = document.createElement("div");
    slides.classList.add("slides");
    slidesOrderAnchor.appendChild(slides);

    //slides-figureSS
    const figureSS = document.createElement("figure");
    figureSS.classList.add("fig");
    slides.appendChild(figureSS);
    //slides-figureSS-img
    const figureSSImg = document.createElement("img");
    figureSSImg.classList.add("fig-img");
    figureSSImg.src = snackshackLogo;
    figureSS.appendChild(figureSSImg);
    //slides-figureSS-caption
    const figureSSCap = document.createElement("figcaption");
    figureSSCap.classList.add("fig-img");
    figureSSCap.textContent = "Snack Shack Delivery";
    figureSS.appendChild(figureSSCap);
    //slides-figureSS-caption-details
    const figureSSCapDet = document.createElement("ul");
    figureSSCapDet.l1 = document.createElement("li");
    figureSSCapDet.l2 = document.createElement("li");
    figureSSCapDet.l3 = document.createElement("li");
    figureSSCapDet.classList.add("storelist");
    (figureSSCapDet.l1).classList.add("cta-subtitle");
    (figureSSCapDet.l2).classList.add("cta-subtitle");
    (figureSSCapDet.l3).classList.add("cta-subtitle");
    (figureSSCapDet.l1).textContent = "Local Delivery - 2km radius/ P80 fee / no minimum order";
    (figureSSCapDet.l2).textContent = "Bulk Order - Metro Manila / free delivery / minimum order of P2000";
    (figureSSCapDet.l3).textContent = "UP - 09152599495 / SK - 09265122257 / MC - 09153094580";
    figureSSCap.appendChild(figureSSCapDet);
    figureSSCapDet.appendChild(figureSSCapDet.l1);
    figureSSCapDet.appendChild(figureSSCapDet.l2);
    figureSSCapDet.appendChild(figureSSCapDet.l3);

    //slides-figureGrab
    const figureGrab = document.createElement("figure");
    figureGrab.classList.add("fig");
    slides.appendChild(figureGrab);
    //slides-figureGrab-img
    const figureGrabImg = document.createElement("img");
    figureGrabImg.classList.add("fig-img");
    figureGrabImg.src = grabLogo;
    figureGrab.appendChild(figureGrabImg);
    //slides-figureGrab-caption
    const figureGrabCap = document.createElement("figcaption");
    figureGrabCap.classList.add("fig-img");
    figureGrabCap.textContent = "Grabfood";
    figureGrab.appendChild(figureGrabCap);
    

    //slides-figurePanda
    const figurePanda = document.createElement("figure");
    figurePanda.classList.add("fig");
    slides.appendChild(figurePanda);
    //slides-figurePanda-img
    const figurePandaImg = document.createElement("img");
    figurePandaImg.classList.add("fig-img");
    figurePandaImg.src = foodpandaLogo;
    figurePanda.appendChild(figurePandaImg);
    //slides-figurePanda-caption
    const figurePandaCap = document.createElement("figcaption");
    figurePandaCap.classList.add("fig-img");
    figurePandaCap.textContent = "Foodpanda";
    figurePanda.appendChild(figurePandaCap);
    

}

export default slidesOrder;