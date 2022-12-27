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

skeleton();//generate skeleton of html
header();//generate header of html
hero();
quotes();
callToAction();
footer();
slidesStores();

console.log('The index.js is working')//test