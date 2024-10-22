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
const leaderNameDisplay = document.querySelector('#leader-name-display')
const mediaCaption = document.querySelector('#media-caption')
const randomTribeButton = document.querySelector('#random-tribe-button')

/* Variables to be accessed globally */

/* I have done this so tribe data can be toggled via other event listeners, as global variables */

/* Variables from main script.js */

let selectedTribe, randomTribeArray

/* Response drills */

let tribeDrill, cultureDrill, mediaDrill

/* Main tribe info */

let tribeName, tribeHead, tribeDescription, tribeUnit, tribeMusic, tribeAmbience, tribeColor, tribeLeader

/* Tribe skin info (If it exists) */

let tribeSkinDrill, skinName, skinHead, skinDescription, skinUnit, skinMusic

/* Other (Contents TBA) */

/* ON PAGE LOAD */

window.addEventListener('load', async () => {
    console.log('PAGE IS LOADED')
    console.log('===================')

    selectedTribe = sessionStorage.getItem('loadedTribe')
    console.log('On the previous page, you selected', selectedTribe)
    randomTribeArray = sessionStorage.getItem('allTribes')
    randomTribeArray = randomTribeArray.split(',')
    console.log('List of random tribes!')
    console.log(randomTribeArray)

    /* YIPEE! */

    loadAllTribeData(selectedTribe)

    // learnMoreButton.textContent = `Learn more about the ${selectedTribe} tribe!`

    // tribeDrill = await getTribeInfo('tribes', selectedTribe)
    // cultureDrill = await getTribeInfo('cultures', selectedTribe)
    // mediaDrill = await getTribeInfo('medias', selectedTribe)

    // if (tribeDrill.skins[0]) {
    //     tribeSkinDrill = tribeDrill.skins[0]
    // }

    // // tribeSkinDrill = tribeDrill.skins[0] 
    // /* You may need to look at this when Midjiwan gives each tribe more than one skin (💀💀In 2028💀💀) */

    // /* Base tribe properties */

    // tribeName = tribeDrill.name
    // tribeHead = tribeDrill.headImageURL
    // tribeDescription = tribeDrill.description
    // tribeUnit = tribeDrill.unitImageURL
    // tribeLeader = tribeDrill.leader
    // tribeMusic = new Audio(tribeDrill.theme)
    // tribeAmbience = new Audio(tribeDrill.natureAmbience)
    // tribeColor = tribeDrill.colorHex

    // /* Tribe skin properties (If skin exists) */
    // /* Define them outside of scope so they can be accessed globally */
    // if (tribeDrill.skins.length > 0) {
    //     skinName = tribeSkinDrill.name
    //     skinHead = tribeSkinDrill.headImageURL
    //     skinDescription = tribeSkinDrill.description
    //     skinUnit = tribeSkinDrill.unitImageURL
    //     skinMusic = new Audio(tribeSkinDrill.theme)
    //     toggleSkinButton.style.visibility = 'visible'
    //     toggleSkinButton.textContent = `Check out the ${skinName} clan!`

    // } else {
    //     toggleSkinButton.style.visibility = 'hidden'
    //     toggleSkinButton.textContent = ``
    // }


    // setTribeCard(tribeName, tribeDescription, tribeLeader, tribeHead, tribeUnit, tribeColor)
    
    // tribeAmbience.loop = true
    // tribeAmbience.play()

    // populateTribeLore(cultureDrill, mediaDrill)
    
})

/* EVENT LISTENERS */

learnMoreButton.addEventListener('click', async () => {
    console.log('Toggling lore of:', tribeName)
    cultureDrill = await getTribeInfo('cultures', tribeName)
    mediaDrill = await getTribeInfo('medias', tribeName)
    populateTribeLore(cultureDrill, mediaDrill)
})

toggleSkinButton.addEventListener('click', async () => {
    if (tribeSkinDrill) {
        if (tribeHeadDisplay.alt === tribeName) {
            setTribeCard(skinName, skinDescription, tribeLeader, skinHead, skinUnit, tribeColor)
            toggleSkinButton.textContent = `Go back to the ${tribeName} tribe!`
        } else {
            setTribeCard(tribeName, tribeDescription, tribeLeader, tribeHead, tribeUnit, tribeColor)
            toggleSkinButton.textContent = `Check out the ${skinName} clan!`
        }
    }
})

randomTribeButton.addEventListener('click', async () => {

    randomIndex = randNum(randomTribeArray.length)

    let newTribe = randomTribeArray[randomIndex]
    console.log('Swapping to:', newTribe)

    loadAllTribeData(newTribe)



})



/* FUNCTIONS */

/* Axios call function using name search */
async function getTribeInfo(category, tribeName) {
    let response = await axios.get(`http://localhost:3001/${category}/name/${tribeName}`)
    return response.data[0] /* IDK why I have to do this, must be the way my name search works in backend */
}

async function loadAllTribeData(selectedTribe) {
    learnMoreButton.textContent = `Learn more about the ${selectedTribe} tribe!`

    tribeDrill = await getTribeInfo('tribes', selectedTribe)
    cultureDrill = await getTribeInfo('cultures', selectedTribe)
    mediaDrill = await getTribeInfo('medias', selectedTribe)

    if (tribeDrill.skins[0]) {
        tribeSkinDrill = tribeDrill.skins[0]
    }

    // tribeSkinDrill = tribeDrill.skins[0] 
    /* You may need to look at this when Midjiwan gives each tribe more than one skin (💀💀In 2028💀💀) */

    /* Base tribe properties */

    tribeName = tribeDrill.name
    tribeHead = tribeDrill.headImageURL
    tribeDescription = tribeDrill.description
    tribeUnit = tribeDrill.unitImageURL
    tribeLeader = tribeDrill.leader
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

    } else {
        toggleSkinButton.style.visibility = 'hidden'
        toggleSkinButton.textContent = ``
    }


    setTribeCard(tribeName, tribeDescription, tribeLeader, tribeHead, tribeUnit, tribeColor)
    
    tribeAmbience.loop = true
    tribeAmbience.play()

    populateTribeLore(cultureDrill, mediaDrill)
}

/* Loads all content in second page, toggles when user requests different lore */

function populateTribeLore(cultureDrill, mediaDrill) {

    mediaCaption.textContent = `Life in the ${tribeName} empire`

    let loreBlurbs = cultureDrill.lore
    let mediaLinks = mediaDrill.mediaURLs

    /* Creates iterable arrays of tribe lore and it's cooresponding picture
    Indexes should link together in accordance to the lore and its year */

    loreArray = []
    mediaArray = []

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

function setTribeCard(tribeName, tribeDescription, tribeLeader, tribeHead, tribeUnit, tribeColor) {
    descriptionTextDisplay.textContent = tribeDescription
    leaderNameDisplay.textContent = tribeLeader
    tribeHeadDisplay.setAttribute('src', tribeHead)
    tribeHeadDisplay.setAttribute('alt', tribeName)

    for (unit of tribeUnitDisplay) {
    unit.setAttribute('src', tribeUnit)
    }

    tribeCard.style.backgroundColor = tribeColor
    
}

/* Sets the lore properties of tribe data page */
function toggleLore(randomLore, loreArray, mediaArray, loreTextDisplay) {
    loreTextDisplay.textContent = loreArray[randomLore]

    if (mediaArray[randomLore].includes('images')) { /* Links like these are considered https://static.wikia.nocookie.net/supertribes/images/7/79/Bardur_Tribe_Moon_2022.jpg */
        mediaDisplay.innerHTML = `
        <img src="${mediaArray[randomLore]}" width="150%">` /* Image size MUST be adjusted here */

    } else {
        mediaDisplay.innerHTML = `
        <iframe width="560" height="315" src="${mediaArray[randomLore]}" frameborder="50" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }
}

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