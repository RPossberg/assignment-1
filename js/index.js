console.log('main.js loaded')

//  Declare constiables for the form and form elements
/*
        * Task Form Submit Event
        1. Add a submit event to the form, pass the event object to the handler function
        2. Stop the forms default behavior, submitting refreshing the browser so you can validate the form inputs.
        3. Create references for the “album title”, “album description”, and the album art” form elements.
        
        *Task Validation Errors - Album title, Album description, Album art
        Album title: Please enter a title between 1 and 20 characters.
        1. Validate the form elements 'album title', 'album description' and 'album art' and display an alert message if the input is invalid.
        2. If input value is empty or exceeds the maximum length of 20 characters, display an alert message.
        3. Add is is-invalid class to the input element if the input is invalid. Perform this check on the submit event.
        4. Invalid if the album name is greater than 10 characters. Add 'is-invalid' class to the input element if the input is invalid. Perform this check on the input event.

        Album description: Please enter a description between 1 and 40 characters.
        1. Invalid if input value is empty. Add 'is-invalid' class to the input element if the input is invalid. Perform this check on the submit event.
        2. Invalid if the album description is greater than 30 characters. 
        Add 'is-invalid' class to the input element if the input is invalid. Perform this check on the input event.

        Album art: Please select an album art.
        1. Invalid if the select element option valu returns the text 'Select album art'. 
        Add 'is-invalid' class to the input element if the input is invalid. Perform this check on the change event.
    */

// Declare variables for the form and form elements
const albumForm = document.getElementById('album-form') // Get the form element by its ID
const albumTitle = document.getElementById('album-title')
const albumDescription = document.getElementById('album-description')
const albumArt = document.getElementById('album-art') // Assuming you have an element with id 'album-art'

// albumArt.addEventListener('change', function () {
// 	const albumArt = document.getElementById('album-art') // Get the album art select element by its ID
// 	const selectedArt = albumArt.value // Get the selected album art value
// 	const albumArtDisplay = document.getElementById('album-art-display')
// 	console.log(albumArtDisplay) // Get the album art display element by its ID
// 	albumArtDisplay.src = `img/${selectedArt}.jpg` // Set the album art display source to the selected album art
// })

// Add an event listener to the form for the submit event
albumForm.addEventListener('submit', function (event) {
	event.preventDefault()
	// title check two checks
	// fn(input, max) to many chars
	validateLength(albumTitle, 15, '#album-hint')
	validateLength(albumDescription, 20, '#album-hint')

	createAlbumCard(albumTitle.value, albumDescription.value, albumArt.value)
})

function validateLength(input, max, hint) {
	if (input.value.length !== max) {
		document.querySelector(hint).classList.remove('is-inavlid')
	}
}

function createAlbumCard(title, description, albumArt) {
	const albumCard = document.createElement('div') //  Create a new div element
	albumCard.classList.add('album-card') //  Add the album-card class to the new div element
	albumCard.innerHTML = `
        <div class="col">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" src="img/${albumArt}" alt="${title}" />
                <div class="card-body">
                    <h5 class="card-title">${description}</h5>
                    <p class="card-text">${title}</p>
                </div>
            </div>
        </div>
    `

	//  Append the album card to the album container
	const albumContainer = document.getElementById('all-albums-list')

	albumContainer.appendChild(albumCard)
}
