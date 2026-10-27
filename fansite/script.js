let myThing = document.querySelector("#blokje");

function verander() {
    if (myThing.style.color == "pink") {
        myThing.style.color = "blue";
        myThing.innerHTML = "Wow zag je dat? de kleur van de tekst is nu blauw!";
    } else {
        myThing.style.color = "pink";
        myThing.innerHTML = "WOW licht roze! Klik nog is";
    }
}