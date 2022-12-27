/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/callToAction.js":
/*!*****************************!*\
  !*** ./src/callToAction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction callToAction() {\n  //anchor\n  var ctaAnchor = document.getElementById(\"callToActionDiv\");\n\n  //ctaContainerDiv\n  var ctaContainerDiv = document.createElement(\"div\");\n  ctaContainerDiv.classList.add(\"cta-container\");\n  ctaAnchor.appendChild(ctaContainerDiv);\n\n  //ctaContainerDiv-BoxDiv\n  var ctaContainerDivBoxDiv = document.createElement(\"div\");\n  ctaContainerDivBoxDiv.classList.add(\"cta-box\");\n  ctaContainerDiv.appendChild(ctaContainerDivBoxDiv);\n\n  //ctaContainerDiv-BoxDiv-Title\n  var ctaContainerDivBoxDivTitle = document.createElement(\"div\");\n  ctaContainerDivBoxDivTitle.classList.add(\"cta-title\");\n  ctaContainerDivBoxDivTitle.textContent = \"Come get your f***in burgers only here at the Snack Shack!\";\n  ctaContainerDivBoxDiv.appendChild(ctaContainerDivBoxDivTitle);\n\n  //ctaContainerDiv-BoxDiv-Subtitle\n  var ctaContainerDivBoxDivSubTitle = document.createElement(\"div\");\n  ctaContainerDivBoxDivSubTitle.classList.add(\"cta-subtitle\");\n  ctaContainerDivBoxDivSubTitle.textContent = \"Order thru Grab, Facebook, SMS, Phone, or deliver/courier services!\";\n  ctaContainerDivBoxDiv.appendChild(ctaContainerDivBoxDivSubTitle);\n\n  //ctaContainerDiv-Button\n  var ctaContainerDivButton = document.createElement(\"button\");\n  ctaContainerDivButton.textContent = \"Order\";\n  ctaContainerDivButton.classList.add(\"order\");\n  ctaContainerDiv.appendChild(ctaContainerDivButton);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callToAction);\n\n//# sourceURL=webpack://3_workingversion/./src/callToAction.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction footer() {\n  //anchor\n  var footerAnchor = document.getElementById(\"footerDiv\");\n\n  //footerDiv\n  var footerDiv = document.createElement(\"div\");\n  footerDiv.classList.add(\"footer\");\n  footerDiv.textContent = \"Copyright @The Snack Shack 2022\";\n  footerAnchor.appendChild(footerDiv);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://3_workingversion/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_header_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/header-logo.jpg */ \"./src/assets/header-logo.jpg\");\n\nfunction header() {\n  //anchor\n  var headerAnchor = document.getElementById(\"headerSectionDiv\");\n\n  //headerBox\n  var headerBoxDiv = document.createElement(\"div\");\n  headerBoxDiv.classList.add(\"header-box\");\n  headerAnchor.appendChild(headerBoxDiv);\n\n  //headerBox-logoImg\n  var logoImg = document.createElement(\"img\");\n  logoImg.src = _assets_header_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  logoImg.classList.add(\"header-logo\");\n  headerBoxDiv.appendChild(logoImg);\n  /* event listener to homepage*/\n\n  //headerBox-logoText\n  var logoText = document.createElement(\"div\");\n  logoText.textContent = \"SNACK SHACK\";\n  logoText.classList.add(\"icon-text\");\n  headerAnchor.appendChild(logoText);\n\n  //headerLinks\n  var headerLinks = document.createElement(\"ul\");\n  headerLinks.classList.add(\"header-links\");\n  headerAnchor.appendChild(headerLinks);\n\n  //headerLinks-menu\n  var headerLinksMenu = document.createElement(\"li\");\n  headerLinksMenu.textContent = \"Menu\";\n  headerLinks.appendChild(headerLinksMenu);\n\n  //headerLinks-stores\n  var headerLinksStores = document.createElement(\"li\");\n  headerLinksStores.textContent = \"Stores\";\n  headerLinks.appendChild(headerLinksStores);\n\n  //headerLinks-order\n  var headerLinksOrder = document.createElement(\"li\");\n  headerLinksOrder.textContent = \"Order\";\n  headerLinks.appendChild(headerLinksOrder);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://3_workingversion/./src/header.js?");

/***/ }),

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_title_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/title-image.jpg */ \"./src/assets/title-image.jpg\");\n\nfunction hero() {\n  //anchor\n  var heroAnchor = document.getElementById(\"heroDiv\");\n\n  //titleBox\n  var titleBoxDiv = document.createElement(\"div\");\n  titleBoxDiv.classList.add(\"title-box\");\n  heroAnchor.appendChild(titleBoxDiv);\n\n  //titleBox-title\n  var titleBoxTitle = document.createElement(\"div\");\n  titleBoxTitle.textContent = \"Fresh grilled burgers\";\n  titleBoxTitle.classList.add(\"title\");\n  titleBoxDiv.appendChild(titleBoxTitle);\n\n  //titleBox-subtitle\n  var titleBoxSubTitle = document.createElement(\"div\");\n  titleBoxSubTitle.textContent = \"Freshly made 100% beef patties straight from the friggin' grinder! The only handmade, home-made grilled burgers in U.P. Diliman! come get your f***in burgers only here at the Snack Shack!\";\n  titleBoxSubTitle.classList.add(\"subtitle\");\n  titleBoxDiv.appendChild(titleBoxSubTitle);\n\n  //titleBox-button\n  var titleBoxButton = document.createElement(\"button\");\n  titleBoxButton.textContent = \"Order\";\n  titleBoxButton.classList.add(\"order\");\n  titleBoxDiv.appendChild(titleBoxButton);\n\n  //storesDiv\n  var storesDiv = document.createElement(\"div\");\n  heroAnchor.appendChild(storesDiv);\n\n  //storesDiv-Img\n  var storesDivImg = document.createElement(\"img\");\n  storesDivImg.src = _assets_title_image_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  storesDivImg.classList.add(\"hero-image\");\n  storesDiv.appendChild(storesDivImg);\n  /* event listener to homepage*/\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);\n\n//# sourceURL=webpack://3_workingversion/./src/hero.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skeleton */ \"./src/skeleton.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero */ \"./src/hero.js\");\n/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes */ \"./src/quotes.js\");\n/* harmony import */ var _callToAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./callToAction */ \"./src/callToAction.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _slidesHome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slidesHome */ \"./src/slidesHome.js\");\n/* harmony import */ var _slidesMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slidesMenu */ \"./src/slidesMenu.js\");\n/* harmony import */ var _slidesStores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slidesStores */ \"./src/slidesStores.js\");\n/* harmony import */ var _slidesOrder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slidesOrder */ \"./src/slidesOrder.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_skeleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //generate skeleton of html\n(0,_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //generate header of html\n(0,_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_quotes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_callToAction__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_slidesOrder__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\nconsole.log('The index.js is working'); //test\n\n//# sourceURL=webpack://3_workingversion/./src/index.js?");

/***/ }),

/***/ "./src/quotes.js":
/*!***********************!*\
  !*** ./src/quotes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction quotes() {\n  //anchor\n  var quotesAnchor = document.getElementById(\"quotesDiv\");\n\n  //cite-pQuote\n  var quotesPQ = document.createElement(\"p\");\n  quotesPQ.classList.add(\"quote\");\n  quotesPQ.textContent = \"Great food with generous servings! I highly recommend the half pounder with cheese, to which I add extra jalapenos, bacon, and blue cheese. Add a side of regular fries and you have there a divine combination...\";\n  quotesAnchor.appendChild(quotesPQ);\n\n  //cite-pAuthor\n  var quotesPA = document.createElement(\"p\");\n  quotesPA.classList.add(\"cite\");\n  quotesPA.textContent = \"G. Guibone, Google Reviews\";\n  quotesAnchor.appendChild(quotesPA);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (quotes);\n\n//# sourceURL=webpack://3_workingversion/./src/quotes.js?");

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction skeleton() {\n  //main anchor\n  var mainBody = document.getElementById(\"mainBody\");\n\n  //html skeleton with dummy text, class, and id\n\n  //header \n  var headerSectionDiv = document.createElement(\"div\");\n  headerSectionDiv.classList.add(\"header-box\");\n  headerSectionDiv.setAttribute(\"id\", \"headerSectionDiv\");\n  mainBody.appendChild(headerSectionDiv);\n\n  //hero/title\n  var heroDiv = document.createElement(\"div\");\n  heroDiv.classList.add(\"title-section\");\n  heroDiv.setAttribute(\"id\", \"heroDiv\");\n  mainBody.appendChild(heroDiv);\n\n  //slides/body\n  var slidesDiv = document.createElement(\"div\");\n  slidesDiv.classList.add(\"slides-section\");\n  slidesDiv.setAttribute(\"id\", \"slidesDiv\");\n  mainBody.appendChild(slidesDiv);\n\n  //quote/testimony \n  var quotesDiv = document.createElement(\"div\");\n  quotesDiv.classList.add(\"quote-section\");\n  quotesDiv.setAttribute(\"id\", \"quotesDiv\");\n  mainBody.appendChild(quotesDiv);\n\n  //call to action \n  var callToActionDiv = document.createElement(\"div\");\n  callToActionDiv.classList.add(\"cta-section\");\n  callToActionDiv.setAttribute(\"id\", \"callToActionDiv\");\n  mainBody.appendChild(callToActionDiv);\n\n  //footer \n  var footerDiv = document.createElement(\"div\");\n  footerDiv.classList.add(\"footer\");\n  footerDiv.setAttribute(\"id\", \"footerDiv\");\n  mainBody.appendChild(footerDiv);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skeleton);\n\n//# sourceURL=webpack://3_workingversion/./src/skeleton.js?");

/***/ }),

/***/ "./src/slidesHome.js":
/*!***************************!*\
  !*** ./src/slidesHome.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/burger.jpg */ \"./src/assets/burger.jpg\");\n/* harmony import */ var _assets_fries_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/fries.jpg */ \"./src/assets/fries.jpg\");\n/* harmony import */ var _assets_wings_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/wings.jpg */ \"./src/assets/wings.jpg\");\n\n\n\nfunction slidesHome() {\n  //anchor\n  var slidesHomeAnchor = document.getElementById(\"slidesDiv\");\n\n  //slidesHomeTitle\n  var slidesHomeTitle = document.createElement(\"div\");\n  slidesHomeTitle.textContent = \"Made with love\";\n  slidesHomeTitle.classList.add(\"slides-title\");\n  slidesHomeAnchor.appendChild(slidesHomeTitle);\n\n  //slidesHomeSlides\n  var slidesHomeSlides = document.createElement(\"div\");\n  slidesHomeSlides.classList.add(\"slides\");\n  slidesHomeAnchor.appendChild(slidesHomeSlides);\n\n  //slidesHomeSlides-fig-burger\n  var slidesHomeFigBurger = document.createElement(\"figure\");\n  slidesHomeFigBurger.classList.add(\"fig\");\n  slidesHomeSlides.appendChild(slidesHomeFigBurger);\n\n  //slidesHomeSlides-fig-burger-img\n  var slidesHomeImgBurger = document.createElement(\"img\");\n  slidesHomeImgBurger.src = _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  slidesHomeImgBurger.classList.add(\"fig-img\");\n  slidesHomeFigBurger.appendChild(slidesHomeImgBurger);\n\n  //slidesHomeSlides-fig-burger-figcaption\n  var slidesHomeCapBurger = document.createElement(\"figcaption\");\n  slidesHomeCapBurger.textContent = \"Fresh Grilled Burgers\";\n  slidesHomeFigBurger.appendChild(slidesHomeCapBurger);\n\n  //slidesHomeSlides-fig-fries\n  var slidesHomeFigFries = document.createElement(\"figure\");\n  slidesHomeFigFries.classList.add(\"fig\");\n  slidesHomeSlides.appendChild(slidesHomeFigFries);\n\n  //slidesHomeSlides-fig-fries-img\n  var slidesHomeImgFries = document.createElement(\"img\");\n  slidesHomeImgFries.src = _assets_fries_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  slidesHomeImgFries.classList.add(\"fig-img\");\n  slidesHomeFigFries.appendChild(slidesHomeImgFries);\n\n  //slidesHomeSlides-fig-fries-figcaption\n  var slidesHomeCapFries = document.createElement(\"figcaption\");\n  slidesHomeCapFries.textContent = \"French Fries\";\n  slidesHomeFigFries.appendChild(slidesHomeCapFries);\n\n  //slidesHomeSlides-fig-wings\n  var slidesHomeFigWings = document.createElement(\"figure\");\n  slidesHomeFigWings.classList.add(\"fig\");\n  slidesHomeSlides.appendChild(slidesHomeFigWings);\n\n  //slidesHomeSlides-fig-wings-img\n  var slidesHomeImgWings = document.createElement(\"img\");\n  slidesHomeImgWings.src = _assets_wings_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  slidesHomeImgWings.classList.add(\"fig-img\");\n  slidesHomeFigWings.appendChild(slidesHomeImgWings);\n\n  //slidesHomeSlides-fig-wings-figcaption\n  var slidesHomeCapWings = document.createElement(\"figcaption\");\n  slidesHomeCapWings.textContent = \"Chicken Wings\";\n  slidesHomeFigWings.appendChild(slidesHomeCapWings);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidesHome);\n\n//# sourceURL=webpack://3_workingversion/./src/slidesHome.js?");

/***/ }),

/***/ "./src/slidesMenu.js":
/*!***************************!*\
  !*** ./src/slidesMenu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//import burgerImg from './assets/burger.jpg'\n//import friesImg from './assets/fries.jpg'\n//import wingsImg from './assets/wings.jpg'\n\nfunction slidesMenu() {\n  //anchor\n  var slidesMenuAnchor = document.getElementById(\"slidesDiv\");\n\n  //slidesMenuTitle OK\n  var slidesMenuTitle = document.createElement(\"div\");\n  slidesMenuTitle.textContent = \"The Snack Shack Menu\";\n  slidesMenuTitle.classList.add(\"slides-title\");\n  slidesMenuAnchor.appendChild(slidesMenuTitle);\n\n  //slidesMenuDiv\n  var slidesMenuDiv = document.createElement(\"div\");\n  slidesMenuDiv.classList.add(\"menuTable\");\n  slidesMenuAnchor.appendChild(slidesMenuDiv);\n\n  //slidesMenuTable\n  var slidesMenuTable = document.createElement(\"table\");\n  slidesMenuDiv.appendChild(slidesMenuTable);\n\n  //slidesMenuTable-tabHeader\n  var tabHeader = document.createElement(\"tr\");\n  tabHeader.col1 = document.createElement(\"td\");\n  tabHeader.col2 = document.createElement(\"td\");\n  tabHeader.col1.textContent = \"*COMBOS*\";\n  tabHeader.col2.textContent = \"\";\n  slidesMenuTable.appendChild(tabHeader);\n  tabHeader.appendChild(tabHeader.col1);\n  tabHeader.appendChild(tabHeader.col2);\n\n  //slidesMenuTable-qP OK\n  var SS1 = document.createElement(\"tr\");\n  SS1.col1 = document.createElement(\"td\");\n  SS1.col2 = document.createElement(\"td\");\n  SS1.col1.textContent = \"SS1 - Quarter Pounder+Fries+Iced Tea\";\n  SS1.col2.textContent = \"200\";\n  slidesMenuTable.appendChild(SS1);\n  SS1.appendChild(SS1.col1);\n  SS1.appendChild(SS1.col2);\n\n  //slidesMenuTable-SS2 OK\n  var SS2 = document.createElement(\"tr\");\n  SS2.col1 = document.createElement(\"td\");\n  SS2.col2 = document.createElement(\"td\");\n  SS2.col1.textContent = \"SS2 - Half Pounder+fries+Iced Tea\";\n  SS2.col2.textContent = \"310\";\n  slidesMenuTable.appendChild(SS2);\n  SS2.appendChild(SS2.col1);\n  SS2.appendChild(SS2.col2);\n\n  //slidesMenuTable-bkd \n  var bkd = document.createElement(\"tr\");\n  bkd.col1 = document.createElement(\"td\");\n  bkd.col2 = document.createElement(\"td\");\n  bkd.col1.textContent = \"Barkada5 - Five (5) Quarter Pounder +1.5L Softdrinks\";\n  bkd.col2.textContent = \"675\";\n  slidesMenuTable.appendChild(bkd);\n  bkd.appendChild(bkd.col1);\n  bkd.appendChild(bkd.col2);\n\n  //slidesMenuTable-fgbSection\n  var fgbSection = document.createElement(\"tr\");\n  fgbSection.col1 = document.createElement(\"td\");\n  fgbSection.col2 = document.createElement(\"td\");\n  fgbSection.col1.textContent = \"*FRESH GRILLED BURGERS*\";\n  fgbSection.col2.textContent = \"\";\n  slidesMenuTable.appendChild(fgbSection);\n  fgbSection.appendChild(fgbSection.col1);\n  fgbSection.appendChild(fgbSection.col2);\n\n  //slidesMenuTable-hp \n  var hp = document.createElement(\"tr\");\n  hp.col1 = document.createElement(\"td\");\n  hp.col2 = document.createElement(\"td\");\n  hp.col1.textContent = \"Half Pounder With Double Cheese\";\n  hp.col2.textContent = \"235\";\n  slidesMenuTable.appendChild(hp);\n  hp.appendChild(hp.col1);\n  hp.appendChild(hp.col2);\n\n  //slidesMenuTable-gbc\n  var gbc = document.createElement(\"tr\");\n  gbc.col1 = document.createElement(\"td\");\n  gbc.col2 = document.createElement(\"td\");\n  gbc.col1.textContent = \"Grilled Bacon Cheeseburger\";\n  gbc.col2.textContent = \"180\";\n  slidesMenuTable.appendChild(gbc);\n  gbc.appendChild(gbc.col1);\n  gbc.appendChild(gbc.col2);\n\n  //slidesMenuTable-qp\n  var qp = document.createElement(\"tr\");\n  qp.col1 = document.createElement(\"td\");\n  qp.col2 = document.createElement(\"td\");\n  qp.col1.textContent = \"Quarter Pounder With Cheese\";\n  qp.col2.textContent = \"120\";\n  slidesMenuTable.appendChild(qp);\n  qp.appendChild(qp.col1);\n  qp.appendChild(qp.col2);\n\n  //slidesMenuTable-qpam\n  var qpam = document.createElement(\"tr\");\n  qpam.col1 = document.createElement(\"td\");\n  qpam.col2 = document.createElement(\"td\");\n  qpam.col1.textContent = \"QPAM - Quarter Pounder With Cheese All Meat\";\n  qpam.col2.textContent = \"105\";\n  slidesMenuTable.appendChild(qpam);\n  qpam.appendChild(qpam.col1);\n  qpam.appendChild(qpam.col2);\n\n  //slidesMenuTable-adds\n  var adds = document.createElement(\"tr\");\n  adds.col1 = document.createElement(\"td\");\n  adds.col2 = document.createElement(\"td\");\n  adds.col1.textContent = \"*ADD-ONS*\";\n  adds.col2.textContent = \"\";\n  slidesMenuTable.appendChild(adds);\n  adds.appendChild(adds.col1);\n  adds.appendChild(adds.col2);\n\n  //slidesMenuTable-bac\n  var bac = document.createElement(\"tr\");\n  bac.col1 = document.createElement(\"td\");\n  bac.col2 = document.createElement(\"td\");\n  bac.col1.textContent = \"Bacon\";\n  bac.col2.textContent = \"60\";\n  slidesMenuTable.appendChild(bac);\n  bac.appendChild(bac.col1);\n  bac.appendChild(bac.col2);\n\n  //slidesMenuTable-xc\n  var xc = document.createElement(\"tr\");\n  xc.col1 = document.createElement(\"td\");\n  xc.col2 = document.createElement(\"td\");\n  xc.col1.textContent = \"Extra Cheese/Jalapeno/Cheese Sauce/Chilicon\";\n  xc.col2.textContent = \"40\";\n  slidesMenuTable.appendChild(xc);\n  xc.appendChild(xc.col1);\n  xc.appendChild(xc.col2);\n\n  //slidesMenuTable-to\n  var to = document.createElement(\"tr\");\n  to.col1 = document.createElement(\"td\");\n  to.col2 = document.createElement(\"td\");\n  to.col1.textContent = \"Take Out Hotsauce/Ketchup/Mayo/Mustard\";\n  to.col2.textContent = \"30\";\n  slidesMenuTable.appendChild(to);\n  to.appendChild(to.col1);\n  to.appendChild(to.col2);\n\n  //slidesMenuTable-xv\n  var xv = document.createElement(\"tr\");\n  xv.col1 = document.createElement(\"td\");\n  xv.col2 = document.createElement(\"td\");\n  xv.col1.textContent = \"Extra Veggies (Lettuce, Onion,Tomato)\";\n  xv.col2.textContent = \"30\";\n  slidesMenuTable.appendChild(xv);\n  xv.appendChild(xv.col1);\n  xv.appendChild(xv.col2);\n\n  //slidesMenuTable-fries\n  var fries = document.createElement(\"tr\");\n  fries.col1 = document.createElement(\"td\");\n  fries.col2 = document.createElement(\"td\");\n  fries.col1.textContent = \"*FRIES*\";\n  fries.col2.textContent = \"\";\n  slidesMenuTable.appendChild(fries);\n  fries.appendChild(fries.col1);\n  fries.appendChild(fries.col2);\n\n  //slidesMenuTable-ol\n  var ol = document.createElement(\"tr\");\n  ol.col1 = document.createElement(\"td\");\n  ol.col2 = document.createElement(\"td\");\n  ol.col1.textContent = \"Overload Fries With Chili,cheese Sauce and Bacon\";\n  ol.col2.textContent = \"270\";\n  slidesMenuTable.appendChild(ol);\n  ol.appendChild(ol.col1);\n  ol.appendChild(ol.col2);\n\n  //slidesMenuTable-lo\n  var lo = document.createElement(\"tr\");\n  lo.col1 = document.createElement(\"td\");\n  lo.col2 = document.createElement(\"td\");\n  lo.col1.textContent = \"Loaded Fries With Chili, Cheese Sauce and Bacon\";\n  lo.col2.textContent = \"140\";\n  slidesMenuTable.appendChild(lo);\n  lo.appendChild(lo.col1);\n  lo.appendChild(lo.col2);\n\n  //slidesMenuTable-bf\n  var bf = document.createElement(\"tr\");\n  bf.col1 = document.createElement(\"td\");\n  bf.col2 = document.createElement(\"td\");\n  bf.col1.textContent = \"Bacon Fries\";\n  bf.col2.textContent = \"115\";\n  slidesMenuTable.appendChild(bf);\n  bf.appendChild(bf.col1);\n  bf.appendChild(bf.col2);\n\n  //slidesMenuTable-rf\n  var rf = document.createElement(\"tr\");\n  rf.col1 = document.createElement(\"td\");\n  rf.col2 = document.createElement(\"td\");\n  rf.col1.textContent = \"Fries\";\n  rf.col2.textContent = \"80\";\n  slidesMenuTable.appendChild(rf);\n  rf.appendChild(rf.col1);\n  rf.appendChild(rf.col2);\n\n  //slidesMenuTable-cwSection\n  var cwSection = document.createElement(\"tr\");\n  cwSection.col1 = document.createElement(\"td\");\n  cwSection.col2 = document.createElement(\"td\");\n  cwSection.col1.textContent = \"*CHICKEN*\";\n  cwSection.col2.textContent = \"\";\n  slidesMenuTable.appendChild(cwSection);\n  cwSection.appendChild(cwSection.col1);\n  cwSection.appendChild(cwSection.col2);\n\n  //slidesMenuTable-cw\n  var cw = document.createElement(\"tr\");\n  cw.col1 = document.createElement(\"td\");\n  cw.col2 = document.createElement(\"td\");\n  cw.col1.textContent = \"Chicken Wings 6pcs\";\n  cw.col2.textContent = \"200\";\n  slidesMenuTable.appendChild(cw);\n  cw.appendChild(cw.col1);\n  cw.appendChild(cw.col2);\n\n  //slidesMenuTable-sausSection\n  var sausSection = document.createElement(\"tr\");\n  sausSection.col1 = document.createElement(\"td\");\n  sausSection.col2 = document.createElement(\"td\");\n  sausSection.col1.textContent = \"*SAUSAGES*\";\n  sausSection.col2.textContent = \"\";\n  slidesMenuTable.appendChild(sausSection);\n  sausSection.appendChild(sausSection.col1);\n  sausSection.appendChild(sausSection.col2);\n\n  //slidesMenuTable-cdsaus\n  var cdsaus = document.createElement(\"tr\");\n  cdsaus.col1 = document.createElement(\"td\");\n  cdsaus.col2 = document.createElement(\"td\");\n  cdsaus.col1.textContent = \"Chilidog - Hungarian/Bockwurst\";\n  cdsaus.col2.textContent = \"200\";\n  slidesMenuTable.appendChild(cdsaus);\n  cdsaus.appendChild(cdsaus.col1);\n  cdsaus.appendChild(cdsaus.col2);\n\n  //slidesMenuTable-saus\n  var saus = document.createElement(\"tr\");\n  saus.col1 = document.createElement(\"td\");\n  saus.col2 = document.createElement(\"td\");\n  saus.col1.textContent = \"Hungarian/Bockwurst\";\n  saus.col2.textContent = \"180\";\n  slidesMenuTable.appendChild(saus);\n  saus.appendChild(saus.col1);\n  saus.appendChild(saus.col2);\n\n  //slidesMenuTable-drinkSection\n  var drinkSection = document.createElement(\"tr\");\n  drinkSection.col1 = document.createElement(\"td\");\n  drinkSection.col2 = document.createElement(\"td\");\n  drinkSection.col1.textContent = \"*DRINKS*\";\n  drinkSection.col2.textContent = \"\";\n  slidesMenuTable.appendChild(drinkSection);\n  drinkSection.appendChild(drinkSection.col1);\n  drinkSection.appendChild(drinkSection.col2);\n\n  //slidesMenuTable-sola\n  var sola = document.createElement(\"tr\");\n  sola.col1 = document.createElement(\"td\");\n  sola.col2 = document.createElement(\"td\");\n  sola.col1.textContent = \"Sola Iced Tea Bottle/Can\";\n  sola.col2.textContent = \"65/45\";\n  slidesMenuTable.appendChild(sola);\n  sola.appendChild(sola.col1);\n  sola.appendChild(sola.col2);\n\n  //slidesMenuTable-sdit\n  var sdit = document.createElement(\"tr\");\n  sdit.col1 = document.createElement(\"td\");\n  sdit.col2 = document.createElement(\"td\");\n  sdit.col1.textContent = \"Softdrinks/Iced Tea\";\n  sdit.col2.textContent = \"50\";\n  slidesMenuTable.appendChild(sdit);\n  sdit.appendChild(sdit.col1);\n  sdit.appendChild(sdit.col2);\n\n  //slidesMenuTable-sdit\n  var mw = document.createElement(\"tr\");\n  mw.col1 = document.createElement(\"td\");\n  mw.col2 = document.createElement(\"td\");\n  mw.col1.textContent = \"Bottled Water\";\n  mw.col2.textContent = \"35\";\n  slidesMenuTable.appendChild(mw);\n  mw.appendChild(mw.col1);\n  mw.appendChild(mw.col2);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidesMenu);\n\n//# sourceURL=webpack://3_workingversion/./src/slidesMenu.js?");

/***/ }),

/***/ "./src/slidesOrder.js":
/*!****************************!*\
  !*** ./src/slidesOrder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_header_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/header-logo.jpg */ \"./src/assets/header-logo.jpg\");\n/* harmony import */ var _assets_grab_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/grab.png */ \"./src/assets/grab.png\");\n/* harmony import */ var _assets_foodpanda_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/foodpanda.png */ \"./src/assets/foodpanda.png\");\n\n\n\nfunction slidesOrder() {\n  //anchor\n  var slidesOrderAnchor = document.getElementById(\"slidesDiv\");\n\n  //title\n  var title = document.createElement(\"div\");\n  title.classList.add(\"slides-title\");\n  title.textContent = \"Order now?\";\n  slidesOrderAnchor.appendChild(title);\n\n  //slides\n  var slides = document.createElement(\"div\");\n  slides.classList.add(\"slides\");\n  slidesOrderAnchor.appendChild(slides);\n\n  //slides-figureSS\n  var figureSS = document.createElement(\"figure\");\n  figureSS.classList.add(\"fig\");\n  slides.appendChild(figureSS);\n  //slides-figureSS-img\n  var figureSSImg = document.createElement(\"img\");\n  figureSSImg.classList.add(\"fig-img\");\n  figureSSImg.src = _assets_header_logo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  figureUP.appendChild(figureUPImg);\n  //slides-figureSS-caption\n  var figureUPCap = document.createElement(\"figcaption\");\n  figureUPCap.classList.add(\"fig-img\");\n  figureUPCap.textContent = \"UP Diliman Fitness Center\";\n  figureUP.appendChild(figureUPCap);\n  //slides-figureSS-caption-details\n  var figureUPCapDet = document.createElement(\"ul\");\n  figureUPCapDet.l1 = document.createElement(\"li\");\n  figureUPCapDet.l2 = document.createElement(\"li\");\n  figureUPCapDet.l3 = document.createElement(\"li\");\n  figureUPCapDet.classList.add(\"storelist\");\n  figureUPCapDet.l1.classList.add(\"cta-subtitle\");\n  figureUPCapDet.l2.classList.add(\"cta-subtitle\");\n  figureUPCapDet.l3.classList.add(\"cta-subtitle\");\n  figureUPCapDet.l1.textContent = \"10:00AM - 07:00PM\";\n  figureUPCapDet.l2.textContent = \"09152599495\";\n  figureUPCapDet.l3.textContent = \"UP SnackShack Online Orders (link)\";\n  figureUPCap.appendChild(figureUPCapDet);\n  figureUPCapDet.appendChild(figureUPCapDet.l1);\n  figureUPCapDet.appendChild(figureUPCapDet.l2);\n  figureUPCapDet.appendChild(figureUPCapDet.l3);\n\n  //slides-figureGrab\n  var figureSK = document.createElement(\"figure\");\n  figureSK.classList.add(\"fig\");\n  slides.appendChild(figureSK);\n  //slides-figureGrab-img\n  var figureSKImg = document.createElement(\"img\");\n  figureSKImg.classList.add(\"fig-img\");\n  figureSKImg.src = skStore;\n  figureSK.appendChild(figureSKImg);\n  //slides-figureGrab-caption\n  var figureSKCap = document.createElement(\"figcaption\");\n  figureSKCap.classList.add(\"fig-img\");\n  figureSKCap.textContent = \"Sikatuna Village QC\";\n  figureSK.appendChild(figureSKCap);\n\n  //slides-figurePanda\n  var figureMC = document.createElement(\"figure\");\n  figureMC.classList.add(\"fig\");\n  slides.appendChild(figureMC);\n  //slides-figurePanda-img\n  var figureMCImg = document.createElement(\"img\");\n  figureMCImg.classList.add(\"fig-img\");\n  figureMCImg.src = mcStore;\n  figureMC.appendChild(figureMCImg);\n  //slides-figurePanda-caption\n  var figureMCCap = document.createElement(\"figcaption\");\n  figureMCCap.classList.add(\"fig-img\");\n  figureMCCap.textContent = \"Marikina Concepcion\";\n  figureMC.appendChild(figureMCCap);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidesOrder);\n\n//# sourceURL=webpack://3_workingversion/./src/slidesOrder.js?");

/***/ }),

/***/ "./src/slidesStores.js":
/*!*****************************!*\
  !*** ./src/slidesStores.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_ssUP_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/ssUP.jpeg */ \"./src/assets/ssUP.jpeg\");\n/* harmony import */ var _assets_ssMC_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/ssMC.jpg */ \"./src/assets/ssMC.jpg\");\n/* harmony import */ var _assets_ssSK_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ssSK.jpg */ \"./src/assets/ssSK.jpg\");\n\n\n\nfunction slidesStores() {\n  //anchor\n  var slidesStoresAnchor = document.getElementById(\"slidesDiv\");\n\n  //title\n  var title = document.createElement(\"div\");\n  title.classList.add(\"slides-title\");\n  title.textContent = \"Visit our stores!\";\n  slidesStoresAnchor.appendChild(title);\n\n  //slides\n  var slides = document.createElement(\"div\");\n  slides.classList.add(\"slides\");\n  slidesStoresAnchor.appendChild(slides);\n\n  //slides-figureUP\n  var figureUP = document.createElement(\"figure\");\n  figureUP.classList.add(\"fig\");\n  slides.appendChild(figureUP);\n  //slides-figureUP-img\n  var figureUPImg = document.createElement(\"img\");\n  figureUPImg.classList.add(\"fig-img\");\n  figureUPImg.src = _assets_ssUP_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  figureUP.appendChild(figureUPImg);\n  //slides-figureUP-caption\n  var figureUPCap = document.createElement(\"figcaption\");\n  figureUPCap.classList.add(\"fig-img\");\n  figureUPCap.textContent = \"UP Diliman Fitness Center\";\n  figureUP.appendChild(figureUPCap);\n  //slides-figureUP-caption-details\n  var figureUPCapDet = document.createElement(\"ul\");\n  figureUPCapDet.l1 = document.createElement(\"li\");\n  figureUPCapDet.l2 = document.createElement(\"li\");\n  figureUPCapDet.l3 = document.createElement(\"li\");\n  figureUPCapDet.classList.add(\"storelist\");\n  figureUPCapDet.l1.classList.add(\"cta-subtitle\");\n  figureUPCapDet.l2.classList.add(\"cta-subtitle\");\n  figureUPCapDet.l3.classList.add(\"cta-subtitle\");\n  figureUPCapDet.l1.textContent = \"10:00AM - 07:00PM\";\n  figureUPCapDet.l2.textContent = \"09152599495\";\n  figureUPCapDet.l3.textContent = \"UP SnackShack Online Orders (link)\";\n  figureUPCap.appendChild(figureUPCapDet);\n  figureUPCapDet.appendChild(figureUPCapDet.l1);\n  figureUPCapDet.appendChild(figureUPCapDet.l2);\n  figureUPCapDet.appendChild(figureUPCapDet.l3);\n\n  //slides-figureSK\n  var figureSK = document.createElement(\"figure\");\n  figureSK.classList.add(\"fig\");\n  slides.appendChild(figureSK);\n  //slides-figureSK-img\n  var figureSKImg = document.createElement(\"img\");\n  figureSKImg.classList.add(\"fig-img\");\n  figureSKImg.src = _assets_ssSK_jpg__WEBPACK_IMPORTED_MODULE_2__;\n  figureSK.appendChild(figureSKImg);\n  //slides-figureUP-caption\n  var figureSKCap = document.createElement(\"figcaption\");\n  figureSKCap.classList.add(\"fig-img\");\n  figureSKCap.textContent = \"Sikatuna Village QC\";\n  figureSK.appendChild(figureSKCap);\n  //slides-figureUP-caption-details\n  var figureSKCapDet = document.createElement(\"ul\");\n  figureSKCapDet.l1 = document.createElement(\"li\");\n  figureSKCapDet.l2 = document.createElement(\"li\");\n  figureSKCapDet.l3 = document.createElement(\"li\");\n  figureSKCapDet.classList.add(\"storelist\");\n  figureSKCapDet.l1.classList.add(\"cta-subtitle\");\n  figureSKCapDet.l2.classList.add(\"cta-subtitle\");\n  figureSKCapDet.l3.classList.add(\"cta-subtitle\");\n  figureSKCapDet.l1.textContent = \"11:30AM - 09:00PM\";\n  figureSKCapDet.l2.textContent = \"09265122257\";\n  figureSKCapDet.l3.textContent = \"SK SnackShack Online Orders (link)\";\n  figureSKCap.appendChild(figureSKCapDet);\n  figureSKCapDet.appendChild(figureSKCapDet.l1);\n  figureSKCapDet.appendChild(figureSKCapDet.l2);\n  figureSKCapDet.appendChild(figureSKCapDet.l3);\n\n  //slides-figureMC\n  var figureMC = document.createElement(\"figure\");\n  figureMC.classList.add(\"fig\");\n  slides.appendChild(figureMC);\n  //slides-figureSK-img\n  var figureMCImg = document.createElement(\"img\");\n  figureMCImg.classList.add(\"fig-img\");\n  figureMCImg.src = _assets_ssMC_jpg__WEBPACK_IMPORTED_MODULE_1__;\n  figureMC.appendChild(figureMCImg);\n  //slides-figureUP-caption\n  var figureMCCap = document.createElement(\"figcaption\");\n  figureMCCap.classList.add(\"fig-img\");\n  figureMCCap.textContent = \"Marikina Concepcion\";\n  figureMC.appendChild(figureMCCap);\n  //slides-figureUP-caption-details\n  var figureMCCapDet = document.createElement(\"ul\");\n  figureMCCapDet.l1 = document.createElement(\"li\");\n  figureMCCapDet.l2 = document.createElement(\"li\");\n  figureMCCapDet.l3 = document.createElement(\"li\");\n  figureMCCapDet.classList.add(\"storelist\");\n  figureMCCapDet.l1.classList.add(\"cta-subtitle\");\n  figureMCCapDet.l2.classList.add(\"cta-subtitle\");\n  figureMCCapDet.l3.classList.add(\"cta-subtitle\");\n  figureMCCapDet.l1.textContent = \"11:30AM - 09:00PM\";\n  figureMCCapDet.l2.textContent = \"09153094580\";\n  figureMCCapDet.l3.textContent = \"MC SnackShack Online Orders (link)\";\n  figureMCCap.appendChild(figureMCCapDet);\n  figureMCCapDet.appendChild(figureMCCapDet.l1);\n  figureMCCapDet.appendChild(figureMCCapDet.l2);\n  figureMCCapDet.appendChild(figureMCCapDet.l3);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slidesStores);\n\n//# sourceURL=webpack://3_workingversion/./src/slidesStores.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*body is default BW*/\\nbody {\\n  background: black;\\n  color: white;\\n  /*padding: 5px 100px;*/\\n}\\n\\n.header-section {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.header-box {\\n  display: flex;\\n  justify-content: flex-start;\\n  gap: 5px;\\n  align-items: center;\\n}\\n\\n.header-logo {\\n  width: 30px;\\n  padding: 0px;\\n  /*padding: 10px;*/\\n}\\n\\n.icon-text {\\n  color: white;\\n  font-size: 18px;\\n  font-weight: bolder;\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\n  display: flex;\\n  align-content: center;\\n}\\n\\n.header-links, .subtitle {\\n  font-size: 18px;\\n  color: gray;\\n}\\n\\nul.header-links {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  gap: 10px;\\n  padding: 10px;\\n}\\n\\n.title-section {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-evenly;\\n  padding: 50px 0px;\\n}\\n\\n.title-box {\\n  width: 300px;\\n  text-align: center;\\n  /*flex:1 1 auto;*/\\n}\\n\\n.hero-image {\\n  max-width: 300px;\\n  max-height: 326px;\\n  height: auto;\\n  width: auto;\\n  /*flex:1 1 auto;*/\\n}\\n\\n.title, .subtitle, .order {\\n  margin: 10px 0px;\\n}\\n\\n.title {\\n  font-size: 48px;\\n  font-weight: bolder;\\n}\\n\\nbutton.order {\\n  font-size: 18px;\\n  font-weight: bolder;\\n  color: white;\\n  background-color: #3882F6;\\n  padding: 5px 25px;\\n  border: none;\\n  border-radius: 5px;\\n}\\n\\n.slides-section {\\n  background-color: white;\\n  margin: 0px;\\n}\\n\\n.slides-title {\\n  font-size: 36px;\\n  font-weight: bolder;\\n  text-align: center;\\n  color: black;\\n  padding: 20px;\\n}\\n\\n.slides {\\n  display: flex;\\n  justify-content: space-evenly;\\n  text-align: left;\\n}\\n\\nli.storelist, ul.storelist {\\n  text-align: left;\\n}\\n\\n.fig-img {\\n  width: 150px;\\n  aspect-ratio: auto;\\n  display: block;\\n  margin: auto;\\n}\\n\\nfigcaption {\\n  color: black;\\n  text-align: center;\\n  font-size: 20px;\\n  font-weight: bolder;\\n}\\n\\nslides {\\n  color: black;\\n  text-align: center;\\n  font-size: 20px;\\n  font-weight: bolder;\\n}\\n\\n.menuTable > * {\\n  /* div */\\n  margin: auto;\\n  padding: 20px;\\n  /* Font */\\n  color: rgb(0, 0, 0);\\n  font-size: 18px;\\n  font-weight: bolder;\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\n}\\n\\ntable {\\n  padding: 20px;\\n}\\n\\nth, td { /* format the cell header and cells */\\n  padding: 5px;\\n  border: 1px solid black;\\n}\\n\\n.quote-section {\\n  background-color: lightgrey;\\n  padding: 20px;\\n  margin: 0px;\\n}\\n\\n.quote {\\n  color: black;\\n  text-align: center;\\n  font-size: 20px;\\n  font-style: italic;\\n}\\n\\n.cite {\\n  color: black;\\n  text-align: right;\\n  font-size: 10px;\\n  font-weight: bolder;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n.cta-section {\\n  background-color: black;\\n  color: white;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.cta-container {\\n  display: flex;\\n  justify-content: space-between;\\n  width: 500px;\\n  padding: 50px 100px;\\n  text-align: left;\\n  gap: 50px;\\n  margin: 50px;\\n  background-color: lightgrey;\\n  border-radius: 20px;\\n}\\n\\n.cta-title {\\n  color: black;\\n  font-size: 16px;\\n  font-weight: bolder;\\n}\\n\\n.cta-subtitle {\\n  color: black;\\n  font-size: 12px;\\n  font-style: italic;\\n}\\n\\n.footer {\\n  background-color: black;\\n  color: white;\\n  text-align: center;\\n  font-size: 12px;\\n  font-family: Georgia, \\\"Times New Roman\\\", Times, serif;\\n}\\n\\n/*img {\\n  width: 100%;\\n}*/\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://3_workingversion/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://3_workingversion/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://3_workingversion/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://3_workingversion/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://3_workingversion/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://3_workingversion/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://3_workingversion/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://3_workingversion/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://3_workingversion/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://3_workingversion/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/burger.jpg":
/*!*******************************!*\
  !*** ./src/assets/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"burger.jpg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/burger.jpg?");

/***/ }),

/***/ "./src/assets/foodpanda.png":
/*!**********************************!*\
  !*** ./src/assets/foodpanda.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"foodpanda.png\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/foodpanda.png?");

/***/ }),

/***/ "./src/assets/fries.jpg":
/*!******************************!*\
  !*** ./src/assets/fries.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fries.jpg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/fries.jpg?");

/***/ }),

/***/ "./src/assets/grab.png":
/*!*****************************!*\
  !*** ./src/assets/grab.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"grab.png\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/grab.png?");

/***/ }),

/***/ "./src/assets/header-logo.jpg":
/*!************************************!*\
  !*** ./src/assets/header-logo.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"header-logo.jpg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/header-logo.jpg?");

/***/ }),

/***/ "./src/assets/ssMC.jpg":
/*!*****************************!*\
  !*** ./src/assets/ssMC.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ssMC.jpg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/ssMC.jpg?");

/***/ }),

/***/ "./src/assets/ssSK.jpg":
/*!*****************************!*\
  !*** ./src/assets/ssSK.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ssSK.jpg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/ssSK.jpg?");

/***/ }),

/***/ "./src/assets/ssUP.jpeg":
/*!******************************!*\
  !*** ./src/assets/ssUP.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ssUP.jpeg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/ssUP.jpeg?");

/***/ }),

/***/ "./src/assets/title-image.jpg":
/*!************************************!*\
  !*** ./src/assets/title-image.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"title-image.jpg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/title-image.jpg?");

/***/ }),

/***/ "./src/assets/wings.jpg":
/*!******************************!*\
  !*** ./src/assets/wings.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"wings.jpg\";\n\n//# sourceURL=webpack://3_workingversion/./src/assets/wings.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;