/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //

        // uncomment this to inspect all available data; delete when done //

        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
       $('#section-bio').css('color', 'red');
       $('#section-quotes').css('color', 'blue');
       let topRated = data.discography.topRated;
       _.forEach(topRated, function(recording) {
       console.log(recording);
});
let $section = $('<section>').attr('id', 'section-rider');
$section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#list-top-rated'));

        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
