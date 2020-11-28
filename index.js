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

pushNewInfo("Reynholm Industries", "https://patricklang87.github.io/reynholm/", "A static welcome page for Reynholm Industries from the IT crowd designed to practice flexbox and grid in CSS. Uses screenshots from YouTube and images from the IT Crowd Fan Wiki.", "27 Nov 2020", "28 Nov 2020");

pushNewInfo("Sentence Assesser", "tbd", "An adaptation of Levenstein Distance, meant to calculate the minimum number word order changes needed in order to match a given form. Part of a project to design an automatic sentence scoring program. Written in Python. Link not yet available.", "Oct 2020", "Oct 2020");

pushNewInfo("Vocab List Builder", "tbd", "A simple program that allows vocab words to be added to a database and then tested. Written in JavaScript to practice JSON, node.js, and database construction. Link not yet available.", "Sept 2020", "Sept 2020")

pushNewInfo("Battle Engine", "https://patricklang87.github.io/battle_engine/", "A simple RPG battle engine designed to practice the use of objects in JavaScript. Features Beverly, Battle Bot, and a Pack of Wild Dogs.", "Sept 2020", "Sept 2020");

pushNewInfo("Are you a Dweeb?", "https://patricklang87.github.io/dweeb/", "A quiz to determine whether you are a dweeb. Written quickly to practice radio buttons in the HTML DOM.", "Sept 2020", "Sept 2020");

pushNewInfo("Familie Spikhardt in Frankfurt", "https://patricklang87.github.io/spikhardt/", "A quiz on German adjectival endings written to practice working with the HTML DOM.", "July 2020", "July 2020");

pushNewInfo("The Coveted Object", "https://patricklang87.github.io/coveted_object/", "A MidLibs style game to practice using input boxes in HTML and JavaScript. My first independent project.", "June 2020", "June 2020");

let gridDivs = "";

for (let i = 0; i < projArray.length; i++) {
    let gridDiv = `<div id="${projArray[i].title}" class="grid-item">
                    <a href="${projArray[i].link}">
                    <h2>${projArray[i].title}</h2>
                    <p>${projArray[i].info}</p>
                    <p>Start: ${projArray[i].startDate}</p>
                    <p>Update: ${projArray[i].lastUpdate}</p>
                    </a>
                    </div>`
  gridDivs = gridDivs + gridDiv;
}

console.log(gridDivs);
document.getElementById("link-grid").innerHTML = gridDivs;


