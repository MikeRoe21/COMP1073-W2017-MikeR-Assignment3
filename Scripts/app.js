/* app.js by Mike Roe (200166222) hosted at my server on Dreamhost */

/* Properly using JavaScript to display text on my index.html */

"use strict";

// IIFE - Immediately Involked Function Expression

(function () {

    // Printing a confirmation of startup, followed by the current page's title, to assure the proper content is displayed.
    console.log("App Started.");
    console.info("Page Title: " + document.title);

    // index.html or "About Me"
    switch (document.title) {
        case "About Me":

            // using let as a variable to control text injection to the page
            let Introduction = document.getElementById("Introduction");
            let myBio = 'My name is Mike Roe. I am a first year student just trying to get my name out there.';
            Introduction.textContent = myBio;

            let Description = document.getElementById("Description");
            let PhotoInfo = 'My Graduating class from this past April. I am in the very back, second from the left with the long hair.';
            Description.innerHTML = PhotoInfo;

            break;

        // Projects.html
        case "Projects":

// Projects.html wasn't updated using javascript this assignment, I just wanted to have the layout structure complete

            break;

        // Contact.html - The focus of this Assignment
        case "Contact":

            // Assigning an id to a variable, then taking the value inserted to print to the console
            let Name = document.getElementById("Name");
            document.getElementById("Name").value;
            let Email = document.getElementById("Email");
            document.getElementById("Email").value;
            let Message = document.getElementById("Message");
            document.getElementById("Message").value;
            let ButtonSubmit = document.getElementById("ButtonSubmit");

            // Stops the Button from submitting the form normally, allowing the values to be seen
            ButtonSubmit.addEventListener("click", function (event) {
                event.preventDefault();

                // Prints the values to the console log where we can view them
                console.log(Name.value);
                console.log(Email.value);
                console.log(Message.value);
    

            });

            break;
    }

    /*let myVariable = 500; (was just playing around with printing to the console) */





})(); // The end of the IIFE (Immediately Invoked Function Expression) Statement

