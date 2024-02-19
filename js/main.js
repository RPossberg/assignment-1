console.log('main.js loaded');

/*
    Create a new project in your code editor and add a new file called main.js.
    This application needs to be able to create album cards with a title, description, and a cover image.

    To add an album, the form has to have valid input before we can render the album card template to the DOM.
        1. The select element must not have the default option "select album art". 
        If it does, display and give the end user feedback that they must select an image before creating a card.

        2. The Album title needs to be between 0 and 20 characters in length before an album card can be created, in addition the field must not be empty.
        If it is, display and give the end user feedback that they must enter a title before creating a card.

        3. The Album description needs to be between 0 and 40 characters in length before an album card can be created, 
        in addition the field must not be empty or exceed 40 characters.

        4. Remove hints and error messages when the user has entered valid input and the album card has been created.

        5. Add hint when input value exceeds the maximum length. Character count should be updated in real-time.
*/

const albumForm = document.getElementById('album-form');
const albumTitle = document.getElementById('album-title');
const albumDescription = document.getElementById('album-description');
const albumArt = document.getElementById('album-art');

albumForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Check if the album art is the default option
    if (albumArt.value === 'select album art') {
        alert('Please select an album art');
        return;
    }

    // Check if the album title is empty or exceeds 20 characters
    if (albumTitle.value === '' || albumTitle.value.length > 20) {
        alert('Please enter a title between 1 and 20 characters');
        return;
    }

    // Check if the album description is empty or exceeds 40 characters
    if (albumDescription.value === '' || albumDescription.value.length > 40) {
        alert('Please enter a description between 1 and 40 characters');
        return;
    }

    // Create the album card
    createAlbumCard(albumTitle.value, albumDescription.value, albumArt.value);
});

function createAlbumCard(title, description, albumArt) {
    const albumCard = document.createElement('div');
    albumCard.classList.add('album-card');
    albumCard.innerHTML = `
        <img src="img/${albumArt}.jpg" alt="${title}">
        // <div class="album-card-text">
        //     <h2>${title}</h2>
        //     <p>${description}</p>
        // </div>
        <div class="col">
	        <div class="card shadow-sm">
		    <img class="bd-placeholder-img card-img-top" src="img/${albumArt}.jpg alt="${title}" />
                <div class="card-body">
                <h5 class="card-title">${description}</h5>
                <p class="card-text">${title}</p>
                </div>
            </div>
        </div>
    `;

    const albumContainer = document.getElementById('album-container');
    albumContainer.appendChild(albumCard);
}