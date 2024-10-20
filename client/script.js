/* DOM ELEMENTS */

/* Containers */
const tribeListContainer = document.querySelector('.tribe-list-container')
const tribeList = document.querySelector('#tribe-list')

/* Buttons */


window.addEventListener('load', async () => {
    /* Loads page with ALL tribes at bottom for user to select from */
    let tribeResponseInitial = await axios.get(`http://localhost:3001/tribes`)

    for (tribe of tribeResponseInitial.data) {
        let testTribeItem = document.createElement('li')
        testTribeItem.classList.add('tribe-pull-button')
        testTribeItem.innerHTML = `<a href="tribeData.html">TRIBE: ${tribe.name}<a>`
        tribeList.appendChild(testTribeItem)
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
            
        })
    }

})





/* EVENT LISTENERS */

/* FUNCTIONS */