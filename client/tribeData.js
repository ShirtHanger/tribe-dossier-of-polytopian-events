/* After wracking my head trying to do it all in ONE JavaScript file, I decided to do two
I knew I could import so I did some googling and discovered localStorage
https://www.w3schools.com/jsref/prop_win_localStorage.asp */

/* 
=====================
DOM ELEMENTS
=======================
 */

/* Tribe info */

const tribeDataContainer = document.querySelector('#tribe-data-container')

const tribeCard = document.querySelector('#tribe-card')
const tribeHeadDisplay = document.querySelector('#tribe-head-display')
const descriptionTextDisplay = document.querySelector('#description-text-display')

const leaderNameDisplay = document.querySelector('#leader-name-display')

const mediaDisplay = document.querySelector('#media-display')
const mediaCaption = document.querySelector('#media-caption')

const loreTextDisplay = document.querySelector('#lore-text-display')
const tribeUnitDisplay = document.querySelectorAll('.tribe-unit-display')

const inspirationsHeader = document.querySelector('#inspirations-header')
const inspirationsList = document.querySelector('#inspirations-list')

/* Buttons  */

const learnMoreButton = document.querySelector('#learn-more-button')
const toggleSkinButton = document.querySelector('#toggle-skin-button')
const randomTribeButton = document.querySelector('#random-tribe-button')
const musicButton = document.querySelector('#music-button')

/* Comments section */

const commentsSectionContainer = document.querySelector('.comments-section-container')
const submitCommentButton = document.querySelector('#submit-comment-button')
const userNameInput = document.querySelector('#user-name-input')
const userCommentInput = document.querySelector('#user-comment-input')
const commentFieldLabel = document.querySelector('#comment-field-label')


/* =================================
Global Variables (Less Axios calls and ability to shuffle information from random tribes via multiple event listeners)
============================ */

/* Variables from main script.js */

let selectedTribe, randomTribeArray

/* Response drills */

let tribeDrill, cultureDrill, mediaDrill, commentsDrill, currentTribeID

/* Main tribe info */

let tribeName, tribeHead, tribeDescription, tribeUnit, tribeMusic, tribeAmbience, tribeColor, tribeLeader, tribeInspirations

/* Tribe skin info (If it exists) */

let tribeSkinDrill, skinName, skinHead, skinDescription, skinUnit, skinMusic, skinAmbience

/* Comments Section  */

let allComments // For Axios PUT requests for comments

/* 
=============================
ON PAGE LOAD
Populates page with data from selected tribe
============================= */

window.addEventListener('load', async () => {
    console.log('PAGE IS LOADED')
    console.log('===================')

    selectedTribe = localStorage.getItem('loadedTribe')
    console.log('On the previous page, you selected', selectedTribe)
    randomTribeArray = localStorage.getItem('allTribes')
    randomTribeArray = randomTribeArray.split(',')
    console.log('List of random tribes!')
    console.log(randomTribeArray)



    loadAllTribeData(selectedTribe)

    /* After loading data at first, shuffles a random tribe into the selectedTribe variable */
    /* When user reloads the page, they will be greeted by an entirely new tribe! */

    randomIndex = randNum(randomTribeArray.length) /* Yanks array of all tribes from previous page */

    selectedTribe = randomTribeArray[randomIndex]

    localStorage.setItem('loadedTribe', selectedTribe)
    
})

/* EVENT LISTENERS */

learnMoreButton.addEventListener('click', async () => {
    console.log('Toggling lore of:', tribeName)
    cultureDrill = await getTribeInfo('cultures', tribeName)
    mediaDrill = await getTribeInfo('medias', tribeName)

    populateTribeLore(cultureDrill, mediaDrill)
})

/* Swaps between base tribe and their skin */
toggleSkinButton.addEventListener('click', async () => { 
    if (tribeSkinDrill) { /* If the tribe had no skin, does nothing */
        startAmbience(tribeDrill, tribeName)
        if (tribeHeadDisplay.alt === tribeName) { /* It is on the tribe, swap to skin  */
            toggleSkinButton.textContent = `Go back to the ${tribeName} tribe!`
            musicButton.textContent = `Hear some ${tribeName} music!`
            console.log(tribeInspirations) 
            
            setTribeCard(skinName, skinDescription, tribeLeader, skinHead, skinUnit, tribeColor, tribeInspirations)
        } else { /* It is on the skin, swap to original tribe */
            toggleSkinButton.textContent = `Check out the ${skinName} clan!`
            musicButton.textContent = `Hear some ${skinName} music!`
            console.log(tribeInspirations)
            setTribeCard(tribeName, tribeDescription, tribeLeader, tribeHead, tribeUnit, tribeColor, tribeInspirations)
        }
    } else {
        alert('This tribe does not have a skin... yet! (BTW This button is supposed to be invisible)')
    }
})

/* Gives the user a randomized tribe */
randomTribeButton.addEventListener('click', async () => {

    randomIndex = randNum(randomTribeArray.length) /* Yanks array of all tribes from previous page */

    let newTribe = randomTribeArray[randomIndex]
    console.log('Swapping to:', newTribe)

    loadAllTribeData(newTribe)



})

/* Allows user to submit a comment via the U in CRUD */
submitCommentButton.addEventListener('click', async () => {
    if (userCommentInput.value) { /* Makes sure the comment field isn't empty first */

        let newUserName

        if (userNameInput.value) {
            newUserName = userNameInput.value
        } else {
            newUserName = 'Anonymous'
        }

        let newComment = userCommentInput.value
        let currentTime = new Date().toISOString() /* Apparently defaults to the current time when not specified */

        /* New comment stored as an object */
        let newPost = {
            userName: newUserName,
            postTime: currentTime,
            comment: newComment,
            }

        console.log(newPost)

        let updatedComments = allComments /* Retrieve all comments array from global scope */
        updatedComments.push(newPost) /* New array, contains all old comments + the new submission */
        console.log(updatedComments)

        let newCommentsObject = {... commentsDrill, comments_section: updatedComments } /* This is the chatGPT code, different variable names */

        console.log(newCommentsObject)

        console.log('===========================')

        let newCommentsSection = await axios.put(`http://localhost:3001/comments/name/${tribeName}`, newCommentsObject)

        /* Saw this format online https://jasonwatmore.com/post/2021/08/24/axios-http-put-request-examples */

        /* Took me too long to realize I had to define this PUT function in the backend */


        console.log('Updated comments!')
        console.log(newCommentsSection)
        /* Reloads comments, user should see their addition in real time */
        loadAllComments(commentsDrill, tribeName)

    } else {
        alert('Error: Comment field is empty')
    }

})

musicButton.addEventListener('click', async () => {
    if (tribeSkinDrill) {
        console.log(tribeHeadDisplay.alt)
        if (tribeHeadDisplay.alt !== tribeName) {
            console.log(tribeSkinDrill)
            await playMusic(tribeSkinDrill, skinName)
    } else {
        await playMusic(tribeDrill, tribeName)
        }
    }
})

/* Getting the update function to work was very difficult
My idea was to grab the entire comments section from the previous axios calls, push the new comment object into
the comments_section object, then Axios.put it in, but online resources were not helpful
Since I, admiteddly, did not factor my comments schema in a smart way

I asked ChatGPT for advice, it basically told me to do the same thing, 
I took ONE line of code from it to help me 

Then I took a long time to realize I had to actually define a put route that used the tribe's name... */


/* 
========================
FUNCTIONS
===========================
 */

/* Axios call function using name search */
async function getTribeInfo(category, tribeName) {
    let response = await axios.get(`http://localhost:3001/${category}/name/${tribeName}`)
    return response.data[0] 
    /* It's like this because I use find instead of findOne in backend, trying to fix this gave me errors
    will leave as is for now */
}

/* Calls ALL data population functions to fill page */
async function loadAllTribeData(selectedTribe) {
    learnMoreButton.textContent = `Learn more about the ${selectedTribe} tribe!`

    /* Axios calls */

    tribeDrill = await getTribeInfo('tribes', selectedTribe)
    cultureDrill = await getTribeInfo('cultures', selectedTribe)
    mediaDrill = await getTribeInfo('medias', selectedTribe)
    commentsDrill = await getTribeInfo('comments', selectedTribe)

    if (tribeDrill.skins[0]) { /* Ignored if no tribe skin exists */
        tribeSkinDrill = tribeDrill.skins[0]
    }

    /* You may need to look at this when Midjiwan gives each tribe more than one skin (💀💀In 2028💀💀) */

    /* Base tribe properties */

    tribeName = tribeDrill.name
    tribeHead = tribeDrill.headImageURL
    tribeDescription = tribeDrill.description
    tribeUnit = tribeDrill.unitImageURL
    tribeLeader = tribeDrill.leader
    tribeInspirations = tribeDrill.inspirations
    tribeColor = tribeDrill.colorHex
    currentTribeID = tribeDrill._id
    console.log(currentTribeID)

    /* Tribe skin properties (If skin exists)
    Otherwise, set them all to empty strings just incase */

    if (tribeDrill.skins.length > 0) {
        skinName = tribeSkinDrill.name
        skinHead = tribeSkinDrill.headImageURL
        skinDescription = tribeSkinDrill.description
        skinUnit = tribeSkinDrill.unitImageURL
        skinMusic = new Audio(tribeSkinDrill.theme)
        skinAmbience = new Audio(tribeSkinDrill.natureAmbience)
        toggleSkinButton.style.visibility = 'visible'
        toggleSkinButton.textContent = `Check out the ${skinName} clan!`

    } else {
        skinName = ``
        skinHead = ``
        skinDescription = ``
        skinUnit = ``
        skinMusic = ``
        skinAmbience = ``
        toggleSkinButton.style.visibility = 'hidden'
        toggleSkinButton.textContent = ``
    }


    setTribeCard(tribeName, tribeDescription, tribeLeader, tribeHead, tribeUnit, tribeColor, tribeInspirations)

    startAmbience(tribeDrill, tribeName)

    populateTribeLore(cultureDrill, mediaDrill)

    loadAllComments(commentsDrill, tribeName)
}

/* Creates lore/media arrays, then summons lore load function */

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

/* Fills up the tribe card with information, + cultural inspirations below the lore blurb  */
function setTribeCard(tribeName, tribeDescription, tribeLeader, tribeHead, tribeUnit, tribeColor, tribeInspirations) {
    descriptionTextDisplay.textContent = tribeDescription
    leaderNameDisplay.textContent = tribeLeader
    tribeHeadDisplay.setAttribute('src', tribeHead)
    tribeHeadDisplay.setAttribute('alt', tribeName)
    musicButton.textContent = `Hear some ${tribeName} music!`

    for (unit of tribeUnitDisplay) {
    unit.setAttribute('src', tribeUnit)
    }

    tribeCard.style.backgroundColor = tribeColor
    // inspirationsHeader.style.backgroundColor = tribeColor

    inspirationsList.innerHTML = ``

    for (inspiration of tribeInspirations) {

        let inspirationItem = document.createElement('li')

        inspirationItem.classList.add('inspiration-item')

        inspirationItem.textContent = inspiration
        inspirationItem.style.backgroundColor = tribeColor
        inspirationItem.style.borderRadius = `30%`
        inspirationItem.style.borderStyle = `outset`
        inspirationItem.style.margin = '2vh'

        inspirationsList.appendChild(inspirationItem)
    }
    
}

/* Yanks all comments from database and populates at bottom of page */
function loadAllComments(commentsDrill, tribeName) {

    /* Clears previous comment section and user input */
    commentsSectionContainer.innerHTML = ``
    userCommentInput.value = ``
    userNameInput.value = ``
    commentFieldLabel.textContent = `Say something nice about the ${tribeName}`

    commentsSectionContainer.style.backgroundColor = tribeColor

    allComments = commentsDrill.comments_section /* Array of objects */
    for (comment of allComments) {
        let userName = comment.userName
        let userComment = comment.comment
        let commentDate = new Date(comment.postTime) /* Took me a minute to realize I had to redefine */

        let commentFromDatabase = document.createElement('article')

        commentFromDatabase.classList.add('user-comment-container')

        commentFromDatabase.innerHTML = `
        <h5 class="user-name">${userName} - (${commentDate.toDateString()})</h5>
        <p class="user-comment">${userComment}</p>
        `
        commentsSectionContainer.appendChild(commentFromDatabase)
    }
}

/* Loads up randomized lore image and blurb */
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

/* Plays tribe's environment ambience when page loads */
async function startAmbience(responseDrill, responseTribeName) {

    if (tribeAmbience) { /* Pauses previous audio if loading another tribe */
        await tribeAmbience.pause()
    }

    if (tribeMusic) {
        await tribeMusic.pause()
    }

    /* Define (Or redefines) music to be played to that of current tribe */
    tribeMusic = new Audio(responseDrill.theme)
    tribeAmbience = new Audio(responseDrill.natureAmbience)
    
    tribeAmbience.loop = true
    tribeAmbience.play()

    console.log(`Now playing ${responseTribeName} ambience`)
}

async function playMusic(responseDrill, responseTribeName) { /* You must create a drill PARAMETER/ARGUEMENT, or ambience wont toggle for tribe */

    if (tribeAmbience && !tribeAmbience.paused) { /* Pauses previous audio if loading another tribe */
        await tribeAmbience.pause()
        tribeMusic = new Audio(responseDrill.theme)
        tribeMusic.loop = true
        tribeMusic.play()
        console.log(`Now playing ${responseTribeName} Music`)
        musicButton.textContent = `Hear some ${responseTribeName} ambience...`
    } else if (tribeMusic && !tribeMusic.paused) {
        await tribeMusic.pause()
        tribeAmbience = new Audio(tribeDrill.natureAmbience)
        tribeAmbience.loop = true
        tribeAmbience.play()
        console.log(`Now playing ${responseTribeName} ambience`)
        musicButton.textContent = `Hear some ${responseTribeName} music!`
    }

    /* Define (Or redefines) music to be played */

}

/* Returns a random number between 0 and the length of given array */
/* Used for random lore swapping and random tribe button */
function randNum(maxNum) {

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