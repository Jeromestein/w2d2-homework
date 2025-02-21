// Add this at the very beginning of the file
// console.log("JavaScript file loaded!");

/* ------ RANDOM CODES ------ */

// Store the generated code globally
var generatedCode = '';

function generateCode() {
    // console.log("generateCode function called");
    var code = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'; 
    
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); 
        code += str.charAt(char); 
    }
    generatedCode = code;
    
    // Make sure to update display
    var displayElement = document.getElementById("codes");
    // console.log("Display element found:", !!displayElement);
    if (displayElement) {
        displayElement.innerHTML = code;
        // console.log("Generated code:", code);
    }
    
    return code; 
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // console.log("DOM Content Loaded");
    
    // Check if elements exist
    // console.log("codes element exists:", !!document.getElementById("codes"));
    // console.log("codeentered element exists:", !!document.getElementById("codeentered"));
    // console.log("submit button exists:", !!document.getElementById("submit"));
    
    // Generate initial code
    generateCode();
    
    // Initially disable the button
    disableButton(true);
    
    // Set up input listener
    var codebox = document.getElementById("codeentered");
    if (codebox) {
        codebox.addEventListener("input", evaluateCode);
        // console.log("Input listener added");
    }
});

// Disable Button
function disableButton(btnvalue) {
    // console.log("disableButton called with value:", btnvalue);
    var submitButton = document.getElementById("submit");
    if (submitButton) {
        submitButton.disabled = btnvalue;
        if (btnvalue == true) {
            submitButton.style.backgroundColor = "rgba(73, 119, 209, 0.3)";
            submitButton.style.color = "rgba(255, 255, 255, 0.5)";
        } else {
            submitButton.style.backgroundColor = "rgba(73, 119, 209, 1)";
            submitButton.style.color = "rgba(255, 255, 255, 1)";
        }
        // console.log("Button state updated");
    } else {
        // console.log("Submit button not found!");
    }
}

var getCode = "";
function evaluateCode() {
    // console.log("evaluateCode function called");
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim();
    var charset2 = generatedCode.trim();
    
    // console.log("Input code:", charset1);
    // console.log("Generated code:", charset2);
    
    if (charset1.length == charset2.length && charset1 === charset2) {
        // console.log("Codes match! Enabling button");
        disableButton(false);
    } else {
        // console.log("Codes don't match. Disabling button");
        disableButton(true);
    }
}