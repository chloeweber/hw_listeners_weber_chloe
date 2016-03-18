var heading = document.getElementById( 'headlineOne' );

heading.addEventListener( 'click', function() {
    var myElement = document.createElement( 'article' );
    myElement.innerHTML = '<p>This is click number</p>';
    document.getElementsByClassName( 'container' )[ 0 ].appendChild( myElement );
} ) ;

var add = ( function() {
    var counter = 0;
    return function() {return counter += 1;};
} )();

document.getElementById( 'headlineOne' ).addEventListener( 'click', countingFunction );

function countingFunction() {
    document.getElementById( 'headlineOne' ).innerHTML = add();
}
