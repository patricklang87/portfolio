let projArray = [];

function ProjInfo(title, link, info, startDate, lastUpdate) {
    this.title = title;
    this.link = link;
    this.info = info;
    this.startDate = startDate;
    this.lastUpdate = lastUpdate;
}

let pushNewInfo = (title, link, info, startDate, lastUpdate) => {
	projArray.push(new ProjInfo(title, link, info, startDate, lastUpdate)); 
}

pushNewInfo("Spikhardt", "tbd", "A quiz on German adjectival endings written to practice working with the HTML DOM.", "July 2020", "July 2020");

pushNewInfo("Battle Engine", "tbd", "A simple RPG battle engine designed to practice the use of objects in JavaScript. Features Beverly, Battle Bot, and a Pack of Wild Dogs.", "Sept 2020", "Sept 2020");

let gridDivs = "";

let i;
for (i = 0; i < projArray.length; i++) {
	let gridDiv = `<div id="${projArray[i].title}" class="grid-item" href="${projArray[i].link}">
                    <h2>${projArray[i].title}</h2>
                    <p>${projArray[i].info}</p>
                    <p>Start: ${projArray[i].startDate}</p>
                    <p>Update: ${projArray[i].lastUpdate}</p>
                </div>`
  gridDivs = gridDivs + gridDiv;
}

console.log(gridDivs);
document.getElementById("link-grid").innerHTML = gridDivs;


