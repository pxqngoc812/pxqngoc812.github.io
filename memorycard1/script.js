var photoarr = ["p0", "p1", "p2", "p3", "p4", "p5", "p6"];
var photo = "";

photoarrx2 = photoarr.concat(photoarr);
shuffle(photoarrx2);

function addPhoto() {
    for(var i=0; i<photoarrx2.length; i++) {
        photo += '<div class="card" onclick="flipp(this)"><div class="back"><img src="img/back.gif"></div><div class="front"><img src="img/'+photoarrx2[i]+'.jpg"></div></div>';
    }
    
    $(".content").html(photo);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}

addPhoto();

function flipp(card) {
    $(card).addClass("flip");
}    