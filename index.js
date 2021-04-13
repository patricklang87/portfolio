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

pushNewInfo("Learn Your Flags", "https://patricklang87.github.io/flagflashcards/", "Test and build your knowledge of country and territory flags. Practices React-Redux and React Routers using the restcountries.eu API.", "April 5 2021", "April 13 2021");

pushNewInfo("TicTacToe 3D", "https://patricklang87.github.io/tictactoe_3d/", "Another take on TicTacToe. Written to practice React and explore CSS's 3D capabilities.", "Feb 19 2021", "Feb 22 2021");

pushNewInfo("Meta TicTacToe", "https://patricklang87.github.io/meta_tictactoe/", "Written to practice react, an adaptation of React's simple tictactoe tutorial.", "Feb 13 2021", "Feb 16 2021");

pushNewInfo("Meteor Jumper", "https://patricklang87.github.io/hat_game/", "A browser deployment of Codecademy's console game, 'Find your hat'. I've given it a sci-fi twist.", "Jan 23 2021", "Jan 31 2021");

pushNewInfo("Sentence Assesser", "https://patricklang87.github.io/js_assess_2/", "Inspired by Sakai's autoscoring functions, this is an effort to write a program that can autoscore narrow-scope short-answer language questions according to spelling and word order. Written in JS. I am still debugging this program.", "Oct 2020", "Dec 24 2020");

pushNewInfo("Reynholm Industries", "https://patricklang87.github.io/reynholm/", "A static welcome page for Reynholm Industries from the IT crowd designed to practice flexbox and grid in CSS. Uses screenshots from YouTube and images from the IT Crowd Fan Wiki.", "27 Nov 2020", "28 Nov 2020");

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


