import './styles/main.css'
import skeleton from "./skeleton"
import header from "./header"
import hero from "./hero"
import quotes from "./quotes"
import callToAction from "./callToAction"
import footer from "./footer"
import slidesHome from "./slidesHome"
import slidesMenu from "./slidesMenu"
import slidesStores from "./slidesStores"
import slidesOrder from "./slidesOrder"
import wipeContent from "./wipeContent"

//Generate homepage

skeleton();//generate skeleton of html
header();//generate header of html
hero();
quotes();
callToAction();
footer();
slidesHome();
//wipeContent();

//Trigger to the nav links
//menu
const menuLink = document.getElementById("menuLink");
menuLink.addEventListener("click", ()=>{
    wipeContent();
    slidesMenu();
})
//stores
const storesLink = document.getElementById("storesLink");
storesLink.addEventListener("click", ()=>{
    wipeContent();
    slidesStores();
})
//order
const orderLink = document.getElementById("orderLink");
orderLink.addEventListener("click", ()=>{
    wipeContent();
    slidesOrder();
})



console.log('The index.js is working')//test