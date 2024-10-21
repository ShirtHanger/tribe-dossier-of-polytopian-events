/* <!-- You MIGHT make a second page specifically to show off tribe data when user clicks a tribe when user clicks a tribe --> */

/* After wracking my head trying to do it all in ONE JavaScript file, I decided to do two
I knew I could import so I did some googling and discovered sessionStorage
https://www.w3schools.com/jsref/prop_win_sessionstorage.asp */

const loreTextDisplay = document.querySelector('#lore-text-display')
const descriptionTextDisplay = document.querySelector('#description-text-display')
const mediaDisplay = document.querySelector('#media-display')
const tribeHeadDisplay = document.querySelector('#tribe-head-display')
const tribeUnitDisplay = document.querySelectorAll('.tribe-unit-display')
const tribeCard = document.querySelector('#tribe-card')

window.addEventListener('load', async () => {
    console.log('PAGE IS LOADED')
    console.log('===================')

    let selectedTribe = sessionStorage.getItem('loadedTribe')
    console.log('On the previous page, you selected', selectedTribe)

    /* YIPEE! */

    let tribeDrill = await getTribeInfo('tribes', selectedTribe)
    let cultureDrill = await getTribeInfo('cultures', selectedTribe)
    let mediaDrill = await getTribeInfo('medias', selectedTribe)

    console.log(tribeDrill[0].description) /* IDK why it's doing this, it seems to do this when I use Tribe Name Search */
    /* Maybe it's the way I defined it in server.js... */

    tribeHeadDisplay.setAttribute('src', tribeDrill[0].headImageURL)

    for (unit of tribeUnitDisplay) {
        unit.setAttribute('src', tribeDrill[0].unitImageURL)
    }

    tribeCard.style.backgroundColor = tribeDrill[0].colorHex


    /* Creates iterable arrays of tribe lore and it's cooresponding picture
    Indexes should link together in accordance to the lore and its year */

    let loreBlurbs = cultureDrill[0].lore
    let mediaLinks = mediaDrill[0].mediaURLs

    let loreArray = []
    let mediaArray = []

    /* I should point out: This is a for IN loop, not a for OF, for IN works for objects */
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in */

    for (blurb in loreBlurbs) {
        iterateOverObject(loreBlurbs, blurb, loreArray)
    }

    for (media in mediaLinks) {
        iterateOverObject(mediaLinks, media, mediaArray)
    }

    randomLore = randNum(loreArray.length)

    loreTextDisplay.textContent = loreArray[randomLore]
    descriptionTextDisplay.textContent = tribeDrill[0].description

    if (mediaArray[randomLore].includes('images')) { /* Links like these are considered https://static.wikia.nocookie.net/supertribes/images/7/79/Bardur_Tribe_Moon_2022.jpg */
        mediaDisplay.innerHTML = `
        <img src="${mediaArray[randomLore]}">
        `
    } else {
        mediaDisplay.innerHTML = `
        <iframe src="${mediaArray[randomLore]}" frameborder="0" allowfullscreen></iframe>`
    }

    
})


/* FUNCTIONS */

function randNum(maxNum) {
    /* Returns a random number between 0 and the length of given array */
    /* Used to randomly iterate over tribe facts */

    randIndex = Math.floor(Math.random() * maxNum) // Copied this from my Pokemon Album Prework, edited for this
    return randIndex
  }

/* Iterates over an object like an array, returns the value of each key */
/* https://www.geeksforgeeks.org/how-to-iterate-over-a-javascript-object/ (#1) */

function iterateOverObject(object, objectKey, array) {
    if (object.hasOwnProperty(objectKey)) {
        objectValue = object[objectKey]
        array.push(objectValue)
    }
}

async function getTribeInfo(category, tribeName) {
    let response = await axios.get(`http://localhost:3001/${category}/name/${tribeName}`)
    return response.data
}