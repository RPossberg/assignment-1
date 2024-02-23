console.log('main.js loaded');

/*
    Create a new project in your code editor and add a new file called main.js.
    This application needs to be able to create album cards with a title, description, and a cover image from the img/ directory.

    To add an album, the form has to have valid input before we can render the album card template to the DOM.

        1. When all form elements are empty and the submit event fires, then all error messages should be displayed.

        2. Remove hints when input value is valid.

        3. Add hint when select element displays the default option "Select album art".

        4. The select element must not have the default option "Select album art". 
        If it does, display and give the end user feedback that they must select an image before creating a card.

        5. The Album title needs to be between 0 and 20 characters in length before an album card can be created, in addition the field must not be empty.
        If it is, display and give the end user feedback that they must enter a title before creating a card.

        6. Add hint when input value exceeds the maximum length. Character count should be updated in real-time.

        7. The Album description needs to be between 0 and 40 characters in length before an album card can be created, 
        in addition the field must not be empty or exceed 40 characters.

        8. Add album cover when all form inputs are valid.

        9. Remove hints and error messages when the user has entered valid input and the album card has been created.


*/

const albumForm = document.getElementById('album-form');
const albumTitle = document.getElementById('album-title');
const albumDescription = document.getElementById('album-description');
const albumArt = document.getElementById('album-art');

albumForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const isAlbumArtDefault = albumArt.value === 'select album art';
    const isAlbumTitleInvalid = albumTitle.value === '' || albumTitle.value.length > 20;
    const isAlbumDescriptionInvalid = albumDescription.value === '' || albumDescription.value.length > 40; 
    const albumArtDisplay = document.getElementById('#album-art'); 

    albumArt.addEventListener('change', function() {
        const selectedArt = albumArt.value;
        albumArtDisplay.src = `img/${selectedArt}.jpg`;
    });   

    if (isAlbumArtDefault) {
        alert('Please select an album art');
        return;
    }

    if (isAlbumTitleInvalid) {
        alert('Please enter a title between 1 and 20 characters');
        return;
    }

    if (isAlbumDescriptionInvalid) {
        alert('Please enter a description between 1 and 40 characters');
        return;
    }

    createAlbumCard(albumTitle.value, albumDescription.value, albumArt.value);
});

function createAlbumCard(title, description, albumArt) {
    const albumCard = document.createElement('div');
    albumCard.classList.add('album-card');
    albumCard.innerHTML = `
        <div class="col">
            <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" src="img/${albumArt}.png" alt="${title}" />
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

// document.getElementById('albumForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     var albumArt = document.getElementById('albumArt');
//     var albumTitle = document.getElementById('albumTitle');
//     var albumDescription = document.getElementById('albumDescription');

//     var errors = [];

//     if (albumArt.value === 'Select album art') {
//         errors.push('You must select an image before creating a card.');
//     }

//     if (albumTitle.value.length === 0 || albumTitle.value.length > 20) {
//         errors.push('The Album title needs to be between 1 and 20 characters in length.');
//     }

//     if (albumDescription.value.length === 0 || albumDescription.value.length > 40) {
//         errors.push('The Album description needs to be between 1 and 40 characters in length.');
//     }

//     if (errors.length > 0) {
//         alert(errors.join('\n'));
//     } else {
//         var albumCards = document.getElementById('albumCards');
//         var newCard = document.createElement('div');
//         newCard.innerHTML = `
//             <h2>${albumTitle.value}</h2>
//             <img src="img/${albumArt.value}" alt="${albumTitle.value}">
//             <p>${albumDescription.value}</p>
//         `;
//         albumCards.appendChild(newCard);
//     }
// });

// document.getElementById('albumTitle').addEventListener('input', function(event) {
//     var counter = document.getElementById('titleCounter');
//     counter.textContent = `${event.target.value.length}/20`;
// });

// document.getElementById('albumDescription').addEventListener('input', function(event) {
//     var counter = document.getElementById('descriptionCounter');
//     counter.textContent = `${event.target.value.length}/40`;
// });
