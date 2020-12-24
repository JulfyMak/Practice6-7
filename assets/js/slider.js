//	Used to add a numeric id on slide creation to let us target the element later
let slideIndex = 0;
//	Tells us which slide we are on
let currentSlideIndex = 0;
//	An Array to hold all the slides
let slideArray = [];

//	Template for creating a custom Slide object
function Slide(title, subtitle, background, link) {
    this.title = title;
    this.subtitle = subtitle;
    this.background = background;
    this.link = link;
// we need an id to target later using getElementById
    this.id = "slide" + slideIndex;
// Add one to the index for the next slide number
    slideIndex++;
// Add this Slide to our array
    slideArray.push(this);
}

//	Creating our slide objects, you can make as many as you want
let walkingDead = new Slide(
    "Google",
    "Google 1",
    "https://google.com",
    "http://google.com"
);
let LastMan = new Slide(
    "Yahoo",
    "yahoo not",
    "https://www.wired.com/wp-content/uploads/2015/02/LMOE-AliveInTuscon_scene44_00 28_hires2.jpg",
    "http://yahoo.com"
);

function buildSlider() {
// A letiable to hold all our HTML
    let myHTML = "";
// Go through the Array and add the code to our HTML
    for (let i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].id +
            "' class='singleSlide' style='background-image:url(" + slideArray[i].background +
            ");'>" +
            "<div class='slideOverlay'>" +
            "<h1>" + slideArray[i].title + "</h1>" +
            "<h4>" + slideArray[i].subtitle + "</h4>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            "</div>" +
            "</div>";
    }

    // Print our HTML to the web page
    document.getElementById("mySlider").innerHTML = myHTML; // Display the first slide
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

//	Create our slider buildSlider();
//	Navigates to the previous slide in the list
function prevSlide() {
// Figure out what the previous slide is
    let nextSlideIndex;
// If we are at zero go to the last slide in the list
    if (currentSlideIndex === 0) {
        nextSlideIndex = slideArray.length - 1;
    } else {
// Otherwise the next one is this slide minus 1
        nextSlideIndex = currentSlideIndex - 1;
    }
// Setup the next slide and current slide for animations
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
// Add the appropriate animation class to the slide
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
// Set current slide to the new current slide
    currentSlideIndex = nextSlideIndex;
}

//	Navigates to the next slide in the list
function nextSlide() {
// Figure out what the next slide is
    let nextSlideIndex;
// If we are at the last slide the next one is the first (zero based)
    if (currentSlideIndex === (slideArray.length - 1)) {
        nextSlideIndex = 0;
    } else {
// Otherwise the next slide is the current one plus 1
        nextSlideIndex = currentSlideIndex + 1;
    }
// Setup the next slide and current slide for animations
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
// Add the appropriate animation class to the slide
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
// Set current slide to the new current slide
    currentSlideIndex = nextSlideIndex;
}
