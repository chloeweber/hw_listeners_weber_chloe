var firstNameInput = document.getElementById( 'firstName' );
var lastNameInput = document.getElementById( 'lastName' );
var emailInput = document.getElementById( 'email' );
var messageInput = document.getElementById( 'message' );

document.querySelector( 'form.simpleForm' ).addEventListener( 'submit', function( event ) {

    event.preventDefault();

    console.log( 'The first name is: ' + firstNameInput.value );
    console.log( 'The last name is: ' + lastNameInput.value );
    console.log( 'The email is: ' + emailInput.value );
    console.log( 'The message is: ' + messageInput.value );
    console.log( 'Wow this is a cool tool!' );
} );
