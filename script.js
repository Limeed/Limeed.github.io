function siteLoaded() {
    createHomePage();
}

function createHomePage() {
    const mainHeader = document.createElement('h1');
    mainHeader.textContent = "Collaborative Writing";
    mainHeader.className = "mainheader";
    mainHeader.id = "mainheader";

    const playButton = document.createElement('button');
    playButton.textContent = "Play";
    playButton.id = 'playbutton';

    document.body.appendChild(mainHeader);
    document.body.appendChild(playButton);

    playButton.addEventListener('click', function() {
        goToGamePage();
    });
}

function goToGamePage() {
    const mainHeader = document.getElementById('mainheader');
    const playButton = document.getElementById('playbutton');

    if (mainHeader) {
        mainHeader.style.display = "none";
    }
    if (playButton) {
        playButton.style.display = "none";
    }


    const addPeopleHeader = document.createElement('h1');
    addPeopleHeader.textContent = "Who's Playing?";
    addPeopleHeader.className = "mainheader";

    const resetNamesButton = document.createElement('button');
    resetNamesButton.textContent = 'Reset Names';
    resetNamesButton.style.borderRadius = "15px";
    resetNamesButton.style.width = "20vw";
    resetNamesButton.style.height = "5vh";

    const inputWrapper = document.createElement('div');
    inputWrapper.style.display = "flex";
    inputWrapper.style.flexDirection = "column";
    inputWrapper.style.alignItems = "center";
    inputWrapper.style.gap = "10px";

    const addNameTextBox = document.createElement('input');
    addNameTextBox.type = 'text';
    addNameTextBox.placeholder = 'John';
    addNameTextBox.style.borderRadius = '15px';
    addNameTextBox.style.width = "20vw";
    addNameTextBox.style.height = "5vh";

    const addNameButton = document.createElement('button');
    addNameButton.textContent = 'Add Name';
    addNameButton.style.borderRadius = "15px";
    addNameButton.style.width = "20vw";
    addNameButton.style.height = "5vh";

    const startGameButton = document.createElement('button');
    startGameButton.textContent = 'Start';
    startGameButton.style.borderRadius = "15px";
    startGameButton.style.width = "20vw";
    startGameButton.style.height = "5vh";
    startGameButton.style.textAlign = "center";
    startGameButton.style.marginTop = "10px"

    const showPlayers = document.createElement('div');
    showPlayers.id = 'playerList';
    showPlayers.style.display = 'flex';
    showPlayers.style.flexWrap = 'wrap';
    showPlayers.style.justifyContent = 'center';
    showPlayers.style.gap = '10px';

    function getPlayerItem(text) {
        let returnedItem = document.createElement('div');
        returnedItem.textContent = text;
        returnedItem.style.border = "1px solid black";
        returnedItem.style.borderRadius = "10px";
        returnedItem.style.padding = "10px";
        returnedItem.style.backgroundColor = "rgb(30,30,80)";
        returnedItem.style.flex = "1 1 calc(25% - 10px)";
        returnedItem.style.textAlign = "center";
        returnedItem.style.boxShadow = "border-box";
        return returnedItem;
    }


    if (!getCookie('players')) {
        // If the cookie does not exist, set it
        setCookie('players', '', 365); // Set the cookie to expire in 365 days
        console.log("Cookie set for the first-time visitor.");
    }

    let playersBefore = getCookie('players').split(',');
    for (let i = 0; i < playersBefore.length; i++) {
        if (playersBefore[i].trim()) { // Ensure no empty values
            let item = getPlayerItem(playersBefore[i]);
            showPlayers.appendChild(item);
        }
    }


    inputWrapper.appendChild(addNameTextBox);
    inputWrapper.appendChild(addNameButton);
    inputWrapper.appendChild(startGameButton);
    inputWrapper.appendChild(resetNamesButton);

    document.body.appendChild(inputWrapper);
    document.body.appendChild(startGameButton);
    document.body.appendChild(showPlayers);

    addNameButton.addEventListener('click', function () {
        let playerName = addNameTextBox.value.trim();
        if (playerName) {
            let currentPlayers = getCookie('players');
            setCookie('players', currentPlayers ? currentPlayers + "," + playerName : playerName);
            let item = getPlayerItem(playerName);
            showPlayers.appendChild(item);
            addNameTextBox.value = ''; // Clear the input field after adding
        }
    });

    resetNamesButton.addEventListener('click', function() {
        setCookie('players', '',1);
        showPlayers.innerHTML = '';
    });

    startGameButton.addEventListener('click', function () {
        startGame();
    });

}

function startGame() {
    inputWrapper.style.display = "none";
    startGameButton.style.display = "none";
    showPlayers.style.display = "none";
}

// Call siteLoaded when the page is fully loaded
window.onload = siteLoaded;

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null; // Return null if the cookie is not found
}


/* Example object

const story = {
    sentences: ["Once upon a time", "In a land far away"]
};

*/


window.onload = siteLoaded;


function createStory() {

}
