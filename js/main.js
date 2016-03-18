var firstNameInput = document.getElementById( 'firstName' );
document.querySelector( 'form.simpleForm' ).addEventListener( 'submit', function( event ) {

    event.preventDefault();

    console.log( 'The first name is: ' + firstNameInput.value );
} );

var lastNameInput = document.getElementById( 'lastName' );
document.querySelector( 'form.simpleForm' ).addEventListener( 'submit', function( event ) {

    event.preventDefault();

    console.log( 'The last name is: ' + lastNameInput.value );
} );

var emailInput = document.getElementById( 'email' );
document.querySelector( 'form.simpleForm' ).addEventListener( 'submit', function( event ) {

    event.preventDefault();

    console.log( 'The email is: ' + emailInput.value );
} );

var messageInput = document.getElementById( 'message' );
document.querySelector( 'form.simpleForm' ).addEventListener( 'submit', function( event ) {

    event.preventDefault();

    console.log( 'The message is: ' + messageInput.value );
    console.log( 'Wow this is a cool tool!' );
} );
