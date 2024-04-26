/*
document.addEventListener("DOMContentLoaded", function() {
    // URL of the raw file on GitHub
    var rawFileUrl = "https://raw.githubusercontent.com/delemoh79912/asxa/main/as.js";

    // Creating a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Setting up the request
    xhr.open("GET", rawFileUrl);

    // Handling the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            var content = xhr.responseText.trim().toLowerCase();
            if (content === "no") {
                // Create a new container element
                var newContainer = document.createElement("div");

                // Set the new container's innerHTML to the desired HTML content
                newContainer.innerHTML = "<h1>Error!</h1><p>:)</p>";

                // Replace the current body element with the new container
                document.body.parentNode.replaceChild(newContainer, document.body);
                document.body.style.display = "none";
            }
        }
    };

    // Sending the request
    xhr.send();
});
*/
document.addEventListener("DOMContentLoaded", function() {
    // URL of the raw file on GitHub with cache-busting parameter
    var rawFileUrl = "https://raw.githubusercontent.com/delemoh79912/asxa/main/as.js?cacheBuster=" + new Date().getTime();

    // Creating a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Setting up the request
    xhr.open("GET", rawFileUrl);

    // Handling the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            var content = xhr.responseText.trim().toLowerCase();
            if (content === "no") {
                // Set the body's innerHTML to the desired HTML content
                document.body.innerHTML = "<h1>Error!</h1><p>:)</p>";
            }
        }
    };

    // Sending the request
    xhr.send();
});
