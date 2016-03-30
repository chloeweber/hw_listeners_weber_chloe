var heading = document.getElementById( 'headlineOne' );
var counter = 1;

heading.addEventListener( 'click', function() {
    var myElement = document.createElement( 'article' );
    myElement.innerHTML = '<p>This is click number ' + counter + '</p>';
    document.getElementsByClassName( 'container' )[ 0 ].appendChild( myElement );
    counter = counter + 1;
} ) ;
