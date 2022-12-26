//import burgerImg from './assets/burger.jpg'
//import friesImg from './assets/fries.jpg'
//import wingsImg from './assets/wings.jpg'



function slidesMenu(){
    //anchor
    const slidesMenuAnchor = document.getElementById("slidesDiv");

    //slidesMenuTitle OK
    const slidesMenuTitle = document.createElement("div");
    slidesMenuTitle.textContent = "The Snack Shack Menu";
    slidesMenuTitle.classList.add("slides-title");
    slidesMenuAnchor.appendChild(slidesMenuTitle);

    //slidesMenuDiv
    const slidesMenuDiv = document.createElement("div");
    slidesMenuDiv.classList.add("menuTable");
    slidesMenuAnchor.appendChild(slidesMenuDiv);

    //slidesMenuTable
    const slidesMenuTable = document.createElement("table");
    slidesMenuDiv.appendChild(slidesMenuTable);

    //slidesMenuTable-tabHeader
    const tabHeader = document.createElement("tr");
    tabHeader.col1 = document.createElement("td");
    tabHeader.col2 = document.createElement("td");
    (tabHeader.col1).textContent = "*COMBOS*";
    (tabHeader.col2).textContent = "";
    slidesMenuTable.appendChild(tabHeader);
    tabHeader.appendChild(tabHeader.col1);
    tabHeader.appendChild(tabHeader.col2);

 //slidesMenuTable-qP OK
 const SS1 = document.createElement("tr");
 SS1.col1 = document.createElement("td");
 SS1.col2 = document.createElement("td");
 (SS1.col1).textContent = "SS1 - Quarter Pounder+Fries+Iced Tea";
 (SS1.col2).textContent = "200";
 slidesMenuTable.appendChild(SS1);
 SS1.appendChild(SS1.col1);
 SS1.appendChild(SS1.col2);

 //slidesMenuTable-SS2 OK
 const SS2 = document.createElement("tr");
 SS2.col1 = document.createElement("td");
 SS2.col2 = document.createElement("td");
 (SS2.col1).textContent = "SS2 - Half Pounder+fries+Iced Tea";
 (SS2.col2).textContent = "310";
 slidesMenuTable.appendChild(SS2);
 SS2.appendChild(SS2.col1);
 SS2.appendChild(SS2.col2);

  //slidesMenuTable-bkd 
  const bkd = document.createElement("tr");
  bkd.col1 = document.createElement("td");
  bkd.col2 = document.createElement("td");
  (bkd.col1).textContent = "Barkada5 - Five (5) Quarter Pounder +1.5L Softdrinks";
  (bkd.col2).textContent = "675";
  slidesMenuTable.appendChild(bkd);
  bkd.appendChild(bkd.col1);
  bkd.appendChild(bkd.col2);

  //slidesMenuTable-fgbSection
  const fgbSection = document.createElement("tr");
  fgbSection.col1 = document.createElement("td");
  fgbSection.col2 = document.createElement("td");
  (fgbSection.col1).textContent = "*FRESH GRILLED BURGERS*";
  (fgbSection.col2).textContent = "";
  slidesMenuTable.appendChild(fgbSection);
  fgbSection.appendChild(fgbSection.col1);
  fgbSection.appendChild(fgbSection.col2);

 //slidesMenuTable-hp 
 const hp = document.createElement("tr");
 hp.col1 = document.createElement("td");
 hp.col2 = document.createElement("td");
 (hp.col1).textContent = "Half Pounder With Double Cheese";
 (hp.col2).textContent = "235";
 slidesMenuTable.appendChild(hp);
 hp.appendChild(hp.col1);
 hp.appendChild(hp.col2);

//slidesMenuTable-gbc
const gbc = document.createElement("tr");
gbc.col1 = document.createElement("td");
gbc.col2 = document.createElement("td");
(gbc.col1).textContent = "Grilled Bacon Cheeseburger";
(gbc.col2).textContent = "180";
slidesMenuTable.appendChild(gbc);
gbc.appendChild(gbc.col1);
gbc.appendChild(gbc.col2);

//slidesMenuTable-qp
const qp = document.createElement("tr");
qp.col1 = document.createElement("td");
qp.col2 = document.createElement("td");
(qp.col1).textContent = "Quarter Pounder With Cheese";
(qp.col2).textContent = "120";
slidesMenuTable.appendChild(qp);
qp.appendChild(qp.col1);
qp.appendChild(qp.col2);

//slidesMenuTable-qpam
const qpam = document.createElement("tr");
qpam.col1 = document.createElement("td");
qpam.col2 = document.createElement("td");
(qpam.col1).textContent = "QPAM - Quarter Pounder With Cheese All Meat";
(qpam.col2).textContent = "105";
slidesMenuTable.appendChild(qpam);
qpam.appendChild(qpam.col1);
qpam.appendChild(qpam.col2);

//slidesMenuTable-adds
const adds = document.createElement("tr");
adds.col1 = document.createElement("td");
adds.col2 = document.createElement("td");
(adds.col1).textContent = "*ADD-ONS*";
(adds.col2).textContent = "";
slidesMenuTable.appendChild(adds);
adds.appendChild(adds.col1);
adds.appendChild(adds.col2);

//slidesMenuTable-bac
const bac = document.createElement("tr");
bac.col1 = document.createElement("td");
bac.col2 = document.createElement("td");
(bac.col1).textContent = "Bacon";
(bac.col2).textContent = "60";
slidesMenuTable.appendChild(bac);
bac.appendChild(bac.col1);
bac.appendChild(bac.col2);

//slidesMenuTable-xc
const xc = document.createElement("tr");
xc.col1 = document.createElement("td");
xc.col2 = document.createElement("td");
(xc.col1).textContent = "Extra Cheese/Jalapeno/Cheese Sauce/Chilicon";
(xc.col2).textContent = "40";
slidesMenuTable.appendChild(xc);
xc.appendChild(xc.col1);
xc.appendChild(xc.col2);

//slidesMenuTable-to
const to = document.createElement("tr");
to.col1 = document.createElement("td");
to.col2 = document.createElement("td");
(to.col1).textContent = "Take Out Hotsauce/Ketchup/Mayo/Mustard";
(to.col2).textContent = "30";
slidesMenuTable.appendChild(to);
to.appendChild(to.col1);
to.appendChild(to.col2);

//slidesMenuTable-xv
const xv = document.createElement("tr");
xv.col1 = document.createElement("td");
xv.col2 = document.createElement("td");
(xv.col1).textContent = "Extra Veggies (Lettuce, Onion,Tomato)";
(xv.col2).textContent = "30";
slidesMenuTable.appendChild(xv);
xv.appendChild(xv.col1);
xv.appendChild(xv.col2);

//slidesMenuTable-fries
const fries = document.createElement("tr");
fries.col1 = document.createElement("td");
fries.col2 = document.createElement("td");
(fries.col1).textContent = "*FRIES*";
(fries.col2).textContent = "";
slidesMenuTable.appendChild(fries);
fries.appendChild(fries.col1);
fries.appendChild(fries.col2);

//slidesMenuTable-ol
const ol = document.createElement("tr");
ol.col1 = document.createElement("td");
ol.col2 = document.createElement("td");
(ol.col1).textContent = "Overload Fries With Chili,cheese Sauce and Bacon";
(ol.col2).textContent = "270";
slidesMenuTable.appendChild(ol);
ol.appendChild(ol.col1);
ol.appendChild(ol.col2);

//slidesMenuTable-lo
const lo = document.createElement("tr");
lo.col1 = document.createElement("td");
lo.col2 = document.createElement("td");
(lo.col1).textContent = "Loaded Fries With Chili, Cheese Sauce and Bacon";
(lo.col2).textContent = "140";
slidesMenuTable.appendChild(lo);
lo.appendChild(lo.col1);
lo.appendChild(lo.col2);

//slidesMenuTable-bf
const bf = document.createElement("tr");
bf.col1 = document.createElement("td");
bf.col2 = document.createElement("td");
(bf.col1).textContent = "Bacon Fries";
(bf.col2).textContent = "115";
slidesMenuTable.appendChild(bf);
bf.appendChild(bf.col1);
bf.appendChild(bf.col2);

//slidesMenuTable-rf
const rf = document.createElement("tr");
rf.col1 = document.createElement("td");
rf.col2 = document.createElement("td");
(rf.col1).textContent = "Fries";
(rf.col2).textContent = "115";
slidesMenuTable.appendChild(rf);
rf.appendChild(rf.col1);
rf.appendChild(rf.col2);

//slidesMenuTable-cwSection
const cwSection = document.createElement("tr");
cwSection.col1 = document.createElement("td");
cwSection.col2 = document.createElement("td");
(cwSection.col1).textContent = "*CHICKEN*";
(cwSection.col2).textContent = "";
slidesMenuTable.appendChild(cwSection);
cwSection.appendChild(cwSection.col1);
cwSection.appendChild(cwSection.col2);

//slidesMenuTable-cw
const cw = document.createElement("tr");
cw.col1 = document.createElement("td");
cw.col2 = document.createElement("td");
(cw.col1).textContent = "Chicken Wings 6pcs";
(cw.col2).textContent = "200";
slidesMenuTable.appendChild(cw);
cw.appendChild(cw.col1);
cw.appendChild(cw.col2);

//slidesMenuTable-sausSection
const sausSection = document.createElement("tr");
sausSection.col1 = document.createElement("td");
sausSection.col2 = document.createElement("td");
(sausSection.col1).textContent = "*SAUSAGES*";
(sausSection.col2).textContent = "";
slidesMenuTable.appendChild(sausSection);
sausSection.appendChild(sausSection.col1);
sausSection.appendChild(sausSection.col2);

//slidesMenuTable-cdsaus
const cdsaus = document.createElement("tr");
cdsaus.col1 = document.createElement("td");
cdsaus.col2 = document.createElement("td");
(cdsaus.col1).textContent = "Chilidog - Hungarian/Bockwurst";
(cdsaus.col2).textContent = "200";
slidesMenuTable.appendChild(cdsaus);
cdsaus.appendChild(cdsaus.col1);
cdsaus.appendChild(cdsaus.col2);

//slidesMenuTable-saus
const saus = document.createElement("tr");
saus.col1 = document.createElement("td");
saus.col2 = document.createElement("td");
(saus.col1).textContent = "Hungarian/Bockwurst";
(saus.col2).textContent = "180";
slidesMenuTable.appendChild(saus);
saus.appendChild(saus.col1);
saus.appendChild(saus.col2);

//slidesMenuTable-drinkSection
const drinkSection = document.createElement("tr");
drinkSection.col1 = document.createElement("td");
drinkSection.col2 = document.createElement("td");
(drinkSection.col1).textContent = "*DRINKS*";
(drinkSection.col2).textContent = "";
slidesMenuTable.appendChild(drinkSection);
drinkSection.appendChild(drinkSection.col1);
drinkSection.appendChild(drinkSection.col2);

//slidesMenuTable-sola
const sola = document.createElement("tr");
sola.col1 = document.createElement("td");
sola.col2 = document.createElement("td");
(sola.col1).textContent = "Sola Iced Tea Bottle/Can";
(sola.col2).textContent = "65/45";
slidesMenuTable.appendChild(sola);
sola.appendChild(sola.col1);
sola.appendChild(sola.col2);

//slidesMenuTable-sdit
const sdit = document.createElement("tr");
sdit.col1 = document.createElement("td");
sdit.col2 = document.createElement("td");
(sdit.col1).textContent = "Softdrinks/Iced Tea";
(sdit.col2).textContent = "50";
slidesMenuTable.appendChild(sdit);
sdit.appendChild(sdit.col1);
sdit.appendChild(sdit.col2);

//slidesMenuTable-sdit
const mw = document.createElement("tr");
mw.col1 = document.createElement("td");
mw.col2 = document.createElement("td");
(mw.col1).textContent = "Bottled Water";
(mw.col2).textContent = "35";
slidesMenuTable.appendChild(mw);
mw.appendChild(mw.col1);
mw.appendChild(mw.col2);


}

export default slidesMenu;