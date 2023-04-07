function radio_onclick(path, item) {
  var frame = document.getElementById("myframe");
  frame.src = path + item + ".html";
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function html_onclick() {
  // Get the text area that contains the HTML code
  var htmlCode = document.querySelector(".code-window:nth-of-type(1) .code-area");

  // Select the text inside the text area
  htmlCode.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  window.getSelection().removeAllRanges();

  // Alert the user that the code has been copied
  alert("HTML code has been copied to clipboard!");

}
function css_onclick() {
  // Get the text area that contains the CSS code
  var cssCode = document.querySelector(".code-window:nth-of-type(2) .code-area");

  // Select the text inside the text area
  cssCode.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Deselect the text
  window.getSelection().removeAllRanges();

  // Alert the user that the code has been copied
  alert("CSS code has been copied to clipboard!");
}

