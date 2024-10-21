/* <!-- You MIGHT make a second page specifically to show off tribe data when user clicks a tribe when user clicks a tribe --> */

/* After wracking my head trying to do it all in ONE JavaScript file, I decided to do two
I knew I could import so I did some googling and discovered sessionStorage
https://www.w3schools.com/jsref/prop_win_sessionstorage.asp */

const loreTextDisplay = document.querySelector('#lore-text-display')
const descriptionTextDisplay = document.querySelector('#description-text-display')
const mediaDisplay = document.querySelector('#media-display')
const tribeHeadDisplay = document.querySelector('#tribe-head-display')
const tribeUnitDisplay = document.querySelectorAll('.tribe-unit-display')
const tribeDataContainer = document.querySelector('#tribe-data-container')
const tribeCard = document.querySelector('#tribe-card')
const learnMoreButton = document.querySelector('#learn-more-button')
const toggleSkinButton = document.querySelector('#toggle-skin-button')

/* Variables to be accessed globally */

/* I have done this so tribe data can be toggled via other event listeners, as global variables */

let selectedTribe, tribeDrill, cultureDrill, mediaDrill

let tribeHead, tribeDescription, tribeUnit, tribeMusic, tribeAmbience, tribeColor

let tribeSkinDrill, skinName, skinHead, skinDescription, skinUnit, skinMusic

/* ON PAGE LOAD */

window.addEventListener('load', async () => {
    console.log('PAGE IS LOADED')
    console.log('===================')

    selectedTribe = sessionStorage.getItem('loadedTribe')
    console.log('On the previous page, you selected', selectedTribe)

    learnMoreButton.textContent = `Learn more about the ${selectedTribe} tribe!`

    /* YIPEE! */

    tribeDrill = await getTribeInfo('tribes', selectedTribe)
    cultureDrill = await getTribeInfo('cultures', selectedTribe)
    mediaDrill = await getTribeInfo('medias', selectedTribe)

    if (tribeDrill.skins[0]) {
        tribeSkinDrill = tribeDrill.skins[0]
    }

    // tribeSkinDrill = tribeDrill.skins[0] 
    /* You may need to look at this when Midjiwan gives each tribe more than one skin (💀💀In 2028💀💀) */

    /* Base tribe properties */

     tribeHead = tribeDrill.headImageURL
     tribeDescription = tribeDrill.description
     tribeUnit = tribeDrill.unitImageURL
     tribeMusic = new Audio(tribeDrill.theme)
     tribeAmbience = new Audio(tribeDrill.natureAmbience)
     tribeColor = tribeDrill.colorHex

    /* Tribe skin properties (If skin exists) */
    /* Define them outside of scope so they can be accessed globally */
    if (tribeDrill.skins.length > 0) {
        skinName = tribeSkinDrill.name
        skinHead = tribeSkinDrill.headImageURL
        skinDescription = tribeSkinDrill.description
        skinUnit = tribeSkinDrill.unitImageURL
        skinMusic = new Audio(tribeSkinDrill.theme)
        toggleSkinButton.style.visibility = 'visible'
        toggleSkinButton.textContent = `Check out the ${skinName} clan!`

    }


    setTribeCard(tribeDescription, tribeHead, tribeUnit, tribeColor)
    
    tribeAmbience.loop = true
    tribeAmbience.play()

    loadTribeLore(cultureDrill, mediaDrill)
    
})

/* EVENT LISTENERS */

learnMoreButton.addEventListener('click', async () => {
    let selectedTribe = sessionStorage.getItem('loadedTribe')
    console.log('Toggling lore of:', selectedTribe)
    let cultureDrill = await getTribeInfo('cultures', selectedTribe)
    let mediaDrill = await getTribeInfo('medias', selectedTribe)
    loadTribeLore(cultureDrill, mediaDrill)
})

toggleSkinButton.addEventListener('click', async () => {
    if (tribeSkinDrill) {
        setTribeCard(skinDescription, skinHead, skinUnit, tribeColor)
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

/* Axios call function using name search */
async function getTribeInfo(category, tribeName) {
    let response = await axios.get(`http://localhost:3001/${category}/name/${tribeName}`)
    return response.data[0] /* IDK why I have to do this, must be the way my name search works in backend */
}

/* Sets the lore properties of tribe data page */
function toggleLore(randomLore, loreArray, mediaArray, loreTextDisplay) {
    loreTextDisplay.textContent = loreArray[randomLore]

    if (mediaArray[randomLore].includes('images')) { /* Links like these are considered https://static.wikia.nocookie.net/supertribes/images/7/79/Bardur_Tribe_Moon_2022.jpg */
        mediaDisplay.innerHTML = `
        <img src="${mediaArray[randomLore]}" width="100%">` /* Image size MUST be adjusted here */

    } else {
        mediaDisplay.innerHTML = `
        <iframe src="${mediaArray[randomLore]}" frameborder="0" allowfullscreen></iframe>`
    }
}

/* Loads all content in second page, toggles when user requests different lore */

function loadTribeLore(cultureDrill, mediaDrill) {

    let loreBlurbs = cultureDrill.lore
    let mediaLinks = mediaDrill.mediaURLs

    /* Creates iterable arrays of tribe lore and it's cooresponding picture
    Indexes should link together in accordance to the lore and its year */

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

    toggleLore(randomLore, loreArray, mediaArray, loreTextDisplay)
    
}

function setTribeCard(tribeDescription, tribeHead, tribeUnit, tribeColor) {
    descriptionTextDisplay.textContent = tribeDescription
    tribeHeadDisplay.setAttribute('src', tribeHead)

    for (unit of tribeUnitDisplay) {
    unit.setAttribute('src', tribeUnit)
    }

    tribeCard.style.backgroundColor = tribeColor
    
}