var photoarr = ["p0", "p1", "p2", "p3", "p4", "p5", "p6"];
var photo = "";
var currentCard = null;

photoarrx2 = photoarr.concat(photoarr);
shuffle(photoarrx2);

function addPhoto() {
    for(var i=0; i<photoarrx2.length; i++) {
        photo += '<div class="card" onClick="flipp(this)" data-name="'+photoarrx2[i]+'"><div class="back"><img src="img/back.gif"></div><div class="front"><img src="img/'+photoarrx2[i]+'.jpg"></div></div>';
    }
    $(".content").html(photo);
}

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

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
    $(card).toggleClass("flip");
    if (!currentCard) {
        currentCard = $(card);
        currentCard.css("pointer-events","none")
        console.log("1");
    }
    else {
        if(currentCard.attr('data-name') != $(card).attr('data-name')) {
            // 2 card khac nhau
            
            console.log(currentCard.attr('data-name'));
            console.log($(card).attr('data-name'));

            setTimeout(function(){
                currentCard.toggleClass("flip");
                $(card).toggleClass("flip");
                currentCard = null;
                currentCard.css("pointer-events","auto")
            }, 500);  
            currentCard.css("pointer-events","auto")

        }
        
        else {
            // 2 card giong nhau
            console.log(currentCard.attr('data-name'));
            console.log($(card).attr('data-name'));
            
            setTimeout(function(){
                $(card).css("opacity", "0");
                currentCard.css("opacity", "0");
                currentCard = null;
            }, 250);

            console.log("giong");
        }
    }
}    