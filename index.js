// You can access to the main application using the remote function of electron
const remote = require('electron').remote
const main = remote.require('./main.js')

// Creation of a button, he call the main function using the remote main constant.
var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', () => {
    main.openWindow()
} , false)
document.body.appendChild(button)