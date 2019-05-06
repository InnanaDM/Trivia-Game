console.log('hi this is the right js file');

var config = {
    apiKey: "AIzaSyBCrQFsGbYct8kiiOIdjg5EibnNuToXuPQ",
    authDomain: "gtcbc-clickcount.firebaseapp.com",
    databaseURL: "https://gtcbc-clickcount.firebaseio.com",
    projectId: "gtcbc-clickcount",
    storageBucket: "gtcbc-clickcount.appspot.com",
    messagingSenderId: "282263685473"
};

firebase.initializeApp(config);
// Create a variable to reference the database
var database = firebase.database();




// Initial Values
var name = "";
var email = "";
var age = 0;
var comment = "";
// database.ref().set({
//     name: name,
//     role: role,
//     startDate: startDate,
//     rate: rate
// });
// Change the HTML to reflect
$("#name-display").prepend(name);
$("#role-display").prepend(role);
$("#date-display").prepend(startDate);
$("#months-worked-display").prepend(rate);


var name;
var role;
var startDate;
var rate;

$('#submit-button').on('click', function () {
    console.log('i was clicked');

    var name = ('<p>' + $("#name-input").val().trim() + '</p>');
    var role = $("#role-input").val().trim();
    var startDate = $("#startdate-input").val().trim();
    var rate = $("#rate-input").val().trim();

    database.ref().set({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate
    });
    // Console log each of the user inputs to confirm we are receiving them
    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(rate);


    // Output all of the new information into the relevant HTML sections
    $("#name-display").prepend(name);
    $("#role-display").text(role);
    $("#date-display").text(startDate);
    $("#monthly-rate-display").text(rate);
})
