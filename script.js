console.log('JS connected');

// class Element function
function getElementsClass(id) {
    const element = document.getElementsByClassName(id);
    return element;
}
// id Element function
function getElementId(id){
    const elements = document.getElementById(id);
    return elements
}

// Heart Count
const heartIcons = getElementsClass("heart-icon")

for(let hearticon of heartIcons){
    hearticon.addEventListener("click", function(){

        const heartCount =getElementId("heart-count").innerText

        const currentHeartLove = Number(heartCount) + 1;
        getElementId("heart-count").innerText = currentHeartLove;
    })
}

