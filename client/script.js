/* DOM ELEMENTS */

/* Containers */
const tribeListContainer = document.querySelector('.tribe-list-container')

/* Buttons */


window.addEventListener('load', async () => {
    /* Loads page with ALL tribes at bottom for user to select from */
    let tribeResponseInitial = await axios.get(`http://localhost:3001/tribes`)

    for (tribe of tribeResponseInitial.data) {
        let tribeItem = document.createElement('article')
        tribeItem.classList.add('tribe-pull-button')
        tribeItem.innerHTML = `
        <div class="tribe-preview-pictures">
        <img src="${tribe.unitImageURL}">
        <img src="${tribe.headImageURL}">
        <img src="${tribe.unitImageURL}">
        </div>
        <h3>${tribe.name}</h3>
        <p>${tribe.description}</p>
        <a href="tribeData.html">SELECT<a>`
        tribeListContainer.appendChild(tribeItem)
    } 

    tribePullButtons = document.querySelectorAll('.tribe-pull-button')


    /* This REFUSED to work until I added 'let' before each selector, redefines it apparently */
    /* Apparently, you're supposed to redeclare https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of */
    for (let button of tribePullButtons) {
        button.addEventListener('click', async () => {

            console.log('YOU CLICKED ON:', button.innerText)
            let tribeResponseLoad = await axios.get(`http://localhost:3001/tribes/name/${button.innerText}`)
            let cultureResponse = await axios.get(`http://localhost:3001/cultures/name/${button.innerText}`)
            let mediaResponse = await axios.get(`http://localhost:3001/medias/name/${button.innerText}`)

            /* Creates iterable arrays of tribe lore and it's cooresponding picture */

            let loreBlurbs = cultureResponse.data.lore
            let mediaLinks = mediaResponse.data.mediaURLs

            let loreArray = []
            let mediaArray = []

            for (blurb of loreBlurbs) {
                loreArray.push(blurb)
            }

            for (media of mediaLinks) {
                mediaArray.push(media)
            }
            
        })
    }

})





/* EVENT LISTENERS */

/* FUNCTIONS */

function randNum(maxNum) {
    /* Returns a random number between 0 and the length of given array */
    /* Used to randomly iterate over tribe facts */

    randIndex = Math.floor(Math.random() * maxNum) // Copied this from my Pokemon Album Prework, edited for this
    return randIndex
  }