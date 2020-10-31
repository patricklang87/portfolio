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

console.log(projArray);

let gridDivs = "";

for (let i in projArray) {
	let gridDiv = `<div id="${title}" class="grid-item" href="${link}">
                    <h2>${title}</h2>
                    <p>${info}</p>
                    <p>Start: ${startDate}</p>
                    <p>Last Update: ${lastUpdate}</p>
                </div>`
  gridDivs.concat(gridDiv);
}




