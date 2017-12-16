// Initial array of gifs
var topics = ["woah","clapping", "high five", "crying","facepalm", "middle finger","hell of a drug", "dollar dollar bills", "shocked", "dancing"];
function displayGifInfo() {
$("#gifs-view").empty();
var gif = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
gif + "&api_key=dc6zaTOxFJmzC&limit=10";
// Creates AJAX call for the specific gif button being clicked
$.ajax({
url: queryURL,
method: "GET"
}).done(function(response) {
var results =response.data;
console.log(results);
for (var i = 0; i < results.length; i++) {

var gifDiv = $('<div class="gifz">')
  var gifImage = results[i].images.fixed_height_still.url
  var rating = results[i].rating
  var gifAnimate = results[i].images.fixed_height.url
  var still = "still";
  // var animate = "animate";
  //Test=====================
  //=========================
  
  var ratingDiv = $('<div>').html(rating)
    var img = $('<img>').attr({'src': gifImage,'data-state': still,'data-still':gifImage, 'data-animate':gifAnimate, 'class': "gifz",  })
    // Append each element to the gif div created
    gifDiv.append(ratingDiv, img)
    // Append the gif div to the gifs view div
    $("#gifs-view").append(gifDiv)
    } //End For loop
    }); //End Ajax Call
    } //END displayGif Function
    // Function for displaying gif data
    function renderButtons() {
    // Deletes the gifs prior to adding new gifs
    
    $("#buttons-view").empty();
    // Loops through the array of gifs
    for (var i = 0; i < topics.length; i++) {
    // Then dynamicaly generates buttons for each gif in the array
    
    var a = $("<button>");
    // Adds a class of gif to our button
    a.addClass("gif btn-lg");
    // Added a data-attribute
    a.attr("data-name", topics[i]);
    // Provided the initial button text
    a.text(topics[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
    }
    }
    //Still to animate Function
    function imageAnimate(){
    
    console.log("Test");
    
    var state = $(this).attr("data-state");
    gifImage = $(this).attr("data-still");
    gifAnimate = $(this).attr("data-animate");
    still = "still";
    animate = "animate";
    gifImage = $(this).attr("data-still");
    gifAnimate = $(this).attr("data-animate");
    if (state === "still") {
    $(this).attr('data-state','animate' );
    $(this).attr("src",gifAnimate );
    }
    else if (state === "animate") {
    $(this).attr('data-state','still' );
    $(this).attr("src",gifImage );
    }
    }
    // This function handles events where the add gif button is clicked
    $("#add-gif").on("click", function(event) {
    $
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var gif = $("#gif-input").val().trim();
    // The gif from the textbox is then added to topics array
    topics.push(gif);
    // Calling renderButtons which handles the processing of topics array
    renderButtons();
    }); //ENd add gif event handler
    // Adding click event listeners to all elements with a class of "gif"
    $(document).on("click", ".gif", displayGifInfo);
    $(document).on("click", ".gifz", imageAnimate );
    // Calling the renderButtons function to display the intial buttons
    renderButtons();