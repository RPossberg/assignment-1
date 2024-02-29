console.log("main.js loaded");

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
const albumForm = document.getElementById("album-form"); // Get the form element by its ID
const albumTitle = document.getElementById("album-title");
const albumDescription = document.getElementById("album-description");
const albumArt = document.getElementById("album-art");

// *Add an event listener to the form for the submit event
albumForm.addEventListener("submit", function (event) {
  // title check two checks

  // fn(input, max) to many chars
  validateLength(albumTitle, 20, "#album-hint");
  console.log(albumTitle.value.length);
  validateLength(albumDescription, 40, "#album-hint");

  if (albumTitle.value.length > 20) {
    albumTitle.classList.add("is-invalid");
    console.log("title is invalid");
  } else {
    albumTitle.classList.remove("is-invalid");
  }

  if (albumDescription.value.length > 40) {
    albumDescription.classList.add("is-invalid");
  } else {
    albumDescription.classList.remove("is-invalid");
  }

  if (albumArt.value === "") {
    albumArt.classList.add("is-invalid");
  } else {
    albumArt.classList.remove("is-invalid");
  }

  event.preventDefault();

  if (
    !albumTitle.classList.contains("is-invalid") &&
    !albumDescription.classList.contains("is-invalid") &&
    !albumArt.classList.contains("is-invalid")
  ) {
    createAlbumCard(albumTitle.value, albumDescription.value, albumArt.value);
    console.log(albumTitle.value, albumDescription.value, albumArt.value);
  }
});

function validateLength(input, max, hint) {
  if (input.value.length > max) {
    document.querySelector(hint).classList.add("is-invalid");
  } else {
    document.querySelector(hint).classList.remove("is-invalid");
  }
}

function createAlbumCard(title, description, albumArt) {
  const albumCard = document.createElement("div"); //  Create a new div element
  albumCard.classList.add("album-card"); //  Add the album-card class to the new div element
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
    `;

  //  Append the album card to the album container
  const albumContainer = document.getElementById("all-albums-list");

  albumContainer.appendChild(albumCard);
}
