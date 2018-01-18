/*###############################

The MIT License

ScrollReveal.js
Copyright 2016 Julian Lloyd

############################### */


$(function () {
    $(".fa-bars").click(function () {
        $("#navigationList").slideToggle(500);
    });
});

var slideIndex = 1;
var x = document.getElementsByClassName("mySlides");
var timeout;
changeSlides();
showDivs(slideIndex);

if (document.getElementById("arrowL") && document.getElementById("arrowL")) {
    document.getElementById("arrowL").addEventListener("click", function () {
        clearTimeout(timeout);
        timeout = setTimeout(changeSlides, 4000);
    });
    document.getElementById("arrowR").addEventListener("click", function () {
        clearTimeout(timeout);
        timeout = setTimeout(changeSlides, 4000);
    });
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    displayNone(x);
    if (x[slideIndex - 1]) {
        x[slideIndex - 1].style.display = "block";
    }
}

function changeSlides() {
    displayNone(x);
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    if (x[slideIndex - 1]) {
        x[slideIndex - 1].style.display = "block";
    }
    timeout = setTimeout(changeSlides, 4000);
}

function displayNone(x) {
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}

window.sr = ScrollReveal({
    reset: true
});

sr.reveal('#mainInfo', {
    origin: 'right',
    duration: 1000
});

var map;

function mapaStart() {
    var googleLatAndLong = new google.maps.LatLng(49.294231, 19.953068);
    var mapOptions = {
        zoom: 17,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    addMarker(map, googleLatAndLong);
}

function addMarker(map, latlong) {
    var markerOptions = {
        position: latlong,
        map: map,
        title: "Nasza lokalizacja",
        clickable: true
    };
    var marker = new google.maps.Marker(markerOptions);

    var infoWindowOptions = {
        position: latlong
    };
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function () {
        infoWindow.open(map);
    });
}

$(function () {
    $("#datepicker1").datepicker({
        dateFormat: "dd/mm/yy"
    });
});

$(function () {
    $("#datepicker2").datepicker({
        dateFormat: "dd/mm/yy"
    });
});
