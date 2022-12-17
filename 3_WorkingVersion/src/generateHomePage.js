
function generateHomePage(){
    //Adds text to an object in html
    const anchorDiv = document.getElementById('anchorDiv');//declare as object
    anchorDiv.textContent = "This is a DOM-generated text";

    //Creates an element in html
    //create DOM
    const divElement = document.createElement("div");
    //add text
    divElement.textContent = "This is a DOM-generated element and text and potentially more";
    //add class
    divElement.classList.add("domClass");
    //add id
    divElement.setAttribute("id", "12345");
    //attach to document
    anchorDiv.appendChild(divElement);


    
    //test, needs to be called via console log
    //this code ends any other processes, codes after this would be unreachable
    return "The generateHomePageModule is working";
}

export default generateHomePage;