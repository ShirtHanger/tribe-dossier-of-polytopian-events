/* DOM ELEMENTS */

/* Containers */
const tribeListContainer = document.querySelector('.tribe-list-container')
let randomTribeArray = []
let selectedTribe

/* Buttons */

randomTribeButton = document.querySelector('#random-tribe-button')


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

        randomTribeArray.push(tribe.name)
    } 

    console.log(randomTribeArray)

    tribePreview = document.querySelectorAll('.tribe-preview')
    tribeLinks = document.querySelectorAll('#tribe-link')
    sessionStorage.setItem('allTribes', randomTribeArray)




    /* This REFUSED to work until I added 'let' before each selector, redefines it apparently */
    /* Apparently, you're supposed to redeclare https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */
    for (let tribelink of tribeLinks) {
        tribelink.addEventListener('click', async () => {

            selectedTribe = tribelink.innerText

            console.log('YOU CLICKED ON:', selectedTribe)

            sessionStorage.setItem('loadedTribe', selectedTribe)
            /* Allows the tribe's name to be passed onto the tribeData.js file */
            
        })
    }

})

randomTribeButton.addEventListener('click', async () => {

            randomIndex = randNum(randomTribeArray.length)

            selectedTribe = randomTribeArray[randomIndex]
            console.log('YOU GOT:', selectedTribe)

            sessionStorage.setItem('loadedTribe', selectedTribe)
            /* Allows the tribe's name to be passed onto the tribeData.js file */
    
})



/* EVENT LISTENERS - LANDING PAGE */

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