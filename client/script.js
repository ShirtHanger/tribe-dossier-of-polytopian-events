/*
================== 
DOM ELEMENTS
==================
 */

const tribeListContainer = document.querySelector('.tribe-list-container')
let randomTribeArray = []
let selectedTribe

/* Buttons */

randomTribeButton = document.querySelector('#random-tribe-button')


/* Loads page with ALL tribes for user to select from */
window.addEventListener('load', async () => {
    
    let tribeResponseInitial = await axios.get(`http://localhost:3001/tribes`)

    let fullListOfTribes = tribeResponseInitial.data

    /* Shuffles list of tribes so user is more likely to see more tribes */

    fullListOfTribes.sort((a, b) => 0.5 - Math.random())
    
    /* Custom sort */
    /* https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj */

    // Note to self, try to find a way to shuffle this array that actually makes sense to you

    for (tribe of fullListOfTribes) {
        let tribeItem = document.createElement('article')
        tribeItem.classList.add('tribe-preview')
        
        tribeItem.innerHTML = `

        <div>
        
        <a href="tribeData.html"><img src="${tribe.headImageURL}" alt="${tribe.name}" class="tribe-preview-picture" ></a>
        
        </div>

        <button id="tribe-link-button"><a href="tribeData.html">${tribe.name}<a></button>

        <p class="tribe-preview-description">${tribe.description}</p>`


        tribeListContainer.appendChild(tribeItem)
        tribeItem.style.backgroundColor = tribe.colorHex

        randomTribeArray.push(tribe.name)

        localStorage.setItem('allTribes', randomTribeArray)

        console.log(randomTribeArray)
    } 


    tribePreview = document.querySelectorAll('.tribe-preview')
    tribeLinkButtons = document.querySelectorAll('#tribe-link-button')
    tribePreviewPictures = document.querySelectorAll('.tribe-preview-picture')
    for (picture of tribePreviewPictures) {
        console.log(picture.alt)
    }

    allTribeButtons = [...tribeLinkButtons, ... tribePreviewPictures]

    /* Loads data up for whichever tribe the user selects */
    
    // for (let link of tribeLinkButtons) {
    //     link.addEventListener('click', async () => {

    //         if (link.innerText) {

    //             selectedTribe = link.innerText

    //             console.log('YOU CLICKED ON:', selectedTribe)

    //             localStorage.setItem('loadedTribe', selectedTribe)
    //             /* Allows the tribe's name to be passed onto the tribeData.js file */

    //         } else {
    //             console.log(`Error, IDK`)
    //         }
            
    //     })
    //     /* This REFUSED to work until I added 'let' before each selector, redefines it apparently */
    //     /* Apparently, you're supposed to redeclare https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */
    // }

    // for (let picture of tribePreviewPictures) {
    //     picture.addEventListener('click', async () => {

    //         if (picture.alt) {

    //             selectedTribe = picture.alt

    //             console.log('YOU CLICKED ON:', selectedTribe)

    //             localStorage.setItem('loadedTribe', selectedTribe)
    //             /* Allows the tribe's name to be passed onto the tribeData.js file */

    //         } else {
    //             console.log(`Error, IDK`)
    //         }
    //     })
    // }

    for (let tribeButton of allTribeButtons) {
        tribeButton.addEventListener('click', async () => {

            if (tribeButton.alt || tribeButton.textContent) {

                loadUpTribe(tribeButton.alt || tribeButton.textContent)

                // selectedTribe = tribeButton.alt || tribeButton.textContent

                // console.log('YOU CLICKED ON:', selectedTribe)

                // localStorage.setItem('loadedTribe', selectedTribe)
                // /* Allows the tribe's name to be passed onto the tribeData.js file */

            } else {
                console.log(`Error, IDK`)
            }
        })
    }



})

/* If they can't decide, this random tribe button will give them a random one */
randomTribeButton.addEventListener('click', async () => {

            randomIndex = randNum(randomTribeArray.length)

            loadUpTribe(randomTribeArray[randomIndex])

            // selectedTribe = randomTribeArray[randomIndex]
            // console.log('YOU GOT:', selectedTribe)

            // localStorage.setItem('loadedTribe', selectedTribe)
            // /* Allows the tribe's name to be passed onto the tribeData.js file */
    
})

/* 
==================
FUNCTIONS
==================
 */

/* Returns a random number between 0 and the length of given array */
/* Used for random tribe button */
function randNum(maxNum) {

    randIndex = Math.floor(Math.random() * maxNum) // Copied this from my Pokemon Album Prework, edited for this
    return randIndex
}

function loadUpTribe(tribeName) {

    selectedTribe = tribeName
    console.log('YOU GOT:', selectedTribe)

    localStorage.setItem('loadedTribe', selectedTribe)
    /* Allows the tribe's name to be passed onto the tribeData.js file */
}