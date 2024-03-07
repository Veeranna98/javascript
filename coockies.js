
// // To create cookies in a JavaScript program, you can use the document.cookie property to set the cookie's value. Here's how you can create a cookie:

// // javascript
// // Copy code
// // Function to set a cookie
// function setCookie(name, value, days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + value + expires + "; path=/";
// }

// // Example: Set a cookie named "username" with value "john" that expires in 7 days
// setCookie("username", "john", 7);


// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to get the value of a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to delete a cookie by name
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Example: Set a cookie named "username" with value "john" that expires in 7 days
setCookie("username", "john", 7);

// Example: Get the value of the "username" cookie and log it
var username = getCookie("username");
console.log("Username:", username);

// Example: Delete the "username" cookie
deleteCookie("username");
console.log("Cookie deleted");
