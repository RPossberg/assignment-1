# Assignment 1

Read the pdf attached.

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

### HTML TEMPLATE

```html
<div class="col">
	<div class="card shadow-sm">
		<img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE" />
		<div class="card-body">
			<h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
			<p class="card-text">ALBUM TITLE HERE</p>
		</div>
	</div>
</div>
```

Image attribution:

- [cassette](https://unsplash.com/photos/FZWivbri0Xk)
- [gazing at stars](https://unsplash.com/photos/oMpAz-DN-9I)
- [mountains](https://unsplash.com/photos/wKlHsooRVbg)
- [tv](https://unsplash.com/photos/UBhpOIHnazM)
