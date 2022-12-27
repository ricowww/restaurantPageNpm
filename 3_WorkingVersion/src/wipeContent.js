//REMOVE NODE CHILD
//note, nodes will always replenish its first child whenever its first child is removed
//remove  first childs in each step
//tested working

//function wipeContent(objectWithChild){
//    while (objectWithChild.firstChild) {
//        objectWithChild.removeChild(objectWithChild.firstChild); 
//}};

function wipeContent(){
    const nodeWithChild = document.getElementById("slidesDiv");
    while (nodeWithChild.firstChild) {
        nodeWithChild.removeChild(nodeWithChild.firstChild); 
    }
};

export default wipeContent