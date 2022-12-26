import './styles/main.css'
import skeleton from "./skeleton"
import header from "./header"
import hero from "./hero"
import slidesMenu from "./slidesMenu"
import slidesHome from "./slidesHome"

import quotes from "./quotes"
import callToAction from "./callToAction"
import footer from "./footer"


skeleton();//generate skeleton of html
header();//generate header of html
hero();
//slidesHome();
slidesMenu();
quotes();
callToAction();
footer();

console.log('The index.js is working')//test