var heading = document.getElementById( 'headlineOne' );

heading.addEventListener( 'click', function() {
    var myElement = document.createElement( 'article' );
    myElement.innerHTML = '<p>This is click number</p>';
    document.getElementsByClassName( 'container' )[ 0 ].appendChild( myElement );
} ) ;
