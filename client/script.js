/* DOM ELEMENTS */

/* Containers */
const tribeListContainer = document.querySelector('.tribe-list-container')

const loreTextDisplay = document.querySelector('#lore-text-display')
const descriptionTextDisplay = document.querySelector('#description-text-display')
const mediaDisplay = document.querySelector('#media-display')

console.log(loreTextDisplay, descriptionTextDisplay, mediaDisplay) /* Returns null */

/* Buttons */


window.addEventListener('load', async () => {
    /* Loads page with ALL tribes at bottom for user to select from */
    let tribeResponseInitial = await axios.get(`http://localhost:3001/tribes`)

    for (tribe of tribeResponseInitial.data) {
        let tribeItem = document.createElement('article')
        tribeItem.classList.add('tribe-preview')
        
        tribeItem.innerHTML = `

        <div class="tribe-preview-picture">
        
        <img src="${tribe.headImageURL}">
        
        </div>

        <button id="tribe-link"><a href="tribeData.html">${tribe.name}<a></button>

        <p class="tribe-preview-description">${tribe.description}</p>`


        tribeListContainer.appendChild(tribeItem)
        tribeItem.style.backgroundColor = tribe.colorHex
    } 

    tribePreview = document.querySelectorAll('.tribe-preview')
    tribeLinks = document.querySelectorAll('#tribe-link')




    /* This REFUSED to work until I added 'let' before each selector, redefines it apparently */
    /* Apparently, you're supposed to redeclare https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */
    for (let tribelink of tribeLinks) {
        tribelink.addEventListener('click', async () => {

            let selectedTribe = tribelink.innerText

            console.log('YOU CLICKED ON:', selectedTribe)

            let tribeDrill = await getTribeInfo('tribes', selectedTribe)
            let cultureDrill = await getTribeInfo('cultures', selectedTribe)
            let mediaDrill = await getTribeInfo('medias', selectedTribe)

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

            /* Supposed to load content in the other HTML page
            Doesn't work because these are null ??? */

            loreTextDisplay.textContent = loreArray[randomLore]
            descriptionTextDisplay.textContent = tribeDrill.description

            
        })
    }

})





/* EVENT LISTENERS - LANDING PAGE */

/* EVENT LISTENERS - TRIBE INFORMATION PAGE */

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