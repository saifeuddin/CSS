                    // Changing css Variables with Javascript
                     
// Select the root 
var root = document.querySelector(':root');

// Get the Styles of root 
var rootStyles = getComputedStyle(root);

// Get the variables and values
var red = rootStyles.getPropertyValue('--red');
var beige = rootStyles.getPropertyValue('--beige');

// U can also Change variable property value 
root.style.setProperty('--red', 'blue');
root.style.setProperty('--beige', 'white');
