/* Event Listener 1: This event listener listens for the click on h2 with the id:
headlineTwo. Once heard, this listener appends the section with the class: mainContent
with an article that holds a paragraph with information on Corgi temperements.*/

var heading = document.getElementById( 'headlineTwo' );

heading.addEventListener( 'click', function() {
    var myElement = document.createElement( 'article' );
    myElement.innerHTML = '<p>Corgis are very active and energetic. They have a strong desire to please and should receive both physical and mental exercise regularly. They should be socialized early on because they tend to be shy and cautious with strangers and other dogs. They have a tendency to be very vocal, and for this reason make good alarm dogs.</p>';
    document.getElementsByClassName( 'mainContent' )[ 0 ].appendChild( myElement );
} ) ;

/* Event Listener 2: This event listener listens for the click on the image with
the id: cuteCorgi. Once heard, this listener uses a conditional statement to switch
the image from the one already present to a new one. Another click changes it back,
and vice versa.*/

document.getElementById( 'cuteCorgi' ).addEventListener( 'click', changeImage );

function changeImage() {
    var image = document.getElementById( 'cuteCorgi' );
        if ( image.src.match( 'corgibutt' ) ) {
            image.src = 'img/cutecorgi.jpg';
        } else {
        image.src = 'img/corgibutt.jpg';
        }
}
