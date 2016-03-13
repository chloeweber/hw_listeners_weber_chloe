var textInput = document.getElementsByClassName( 'name' );

document.querySelector( 'form.simpleForm' ).addEventListener( 'submit', function( event ) {

    //prevent the normal submission of the form
    event.preventDefault();

    console.log( textInput.value );
} );
