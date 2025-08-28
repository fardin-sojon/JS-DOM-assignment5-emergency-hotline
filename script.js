console.log('JS connected');

// class Element function
function getElementsClass(id) {
    const element = document.getElementsByClassName(id);
    return element;
}
// id Element function
function getElementId(id) {
    const element = document.getElementById(id);
    return element
}

// Heart Count
const heartIcons = getElementsClass("heart-icon")

for (let hearticon of heartIcons) {
    hearticon.addEventListener("click", function () {

        const heartCount = getElementId("heart-count").innerText

        const currentHeartLove = Number(heartCount) + 1;
        getElementId("heart-count").innerText = currentHeartLove;
    })
}


// coins-charge
let coinBalance = getElementId("coin-balance").innerText
const coinChange = 20;

// Call 
const callButton = document.getElementsByClassName("call-btn")

for (let callbtn of callButton) {
    callbtn.addEventListener("click", function () {

        const cardSubTitle = callbtn.parentNode.parentNode.children[1].children[1].innerText;

        const cardHelplineNumber = callbtn.parentNode.parentNode.children[2].children[0].innerText

        if (coinBalance >= coinChange) {
            coinBalance = coinBalance - coinChange;
            alert(`📞 Calling ${cardSubTitle} ${cardHelplineNumber},,,`);
        }
        else {
            alert("❌ You don't have enough coins! You need at least 20 coins to make a call.")
            return;
        }
        getElementId("coin-balance").innerText = coinBalance;

        const historyContainer = getElementId("card-hisroty-container");

        const newHistoryCard = document.createElement("div")
        newHistoryCard.innerHTML = `
            <div class="flex flex-col md:flex-col lg:flex-row justify-between items-center bg-[#fafafa] px-3 py-4 rounded-lg mt-4">
              <div class="flex flex-col items-center md:items-crnter lg:items-start">
                <h1 class="font-semibold text-[14px] md:text-[16px]">${cardSubTitle}</h1>
                <span class="text-[#5C5C5C]">${cardHelplineNumber}</span>
              </div>
              <div><span class="">${new Date().toLocaleTimeString()}</span></div>
            </div>
        `
        historyContainer.append(newHistoryCard)
    })
}



getElementId("clear-btn")
    .addEventListener("click", function () {
        const historyContainer = getElementId("card-hisroty-container")
        historyContainer.innerHTML = "";
    })



// copy count
const copyButton = getElementsClass("copy-btn")

for (let copy of copyButton) {
    copy.addEventListener("click", function () {
        const copyCount = getElementId("copy-count").innerText;

        const currentCopyNumber = Number(copyCount) + 1;
        getElementId("copy-count").innerText = currentCopyNumber;

        const cardHelplineNumber = copy.parentNode.parentNode.children[2].children[0].innerText

        navigator.clipboard.writeText(cardHelplineNumber)
            .then(() => {
                alert("Number Copied: " + cardHelplineNumber);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    })
}