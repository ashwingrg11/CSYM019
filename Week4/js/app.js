function print4() {
  for (var i = 1; i <= 5; i++) {
    // alert(i+1);
    console.log(i);
  }
}
print4();
print4();


// JavaScript Exercise

// update the content of heading
function updateContents() {
  var headingElm = document.getElementById('pageHeading');
  headingElm.firstChild.nodeValue = 'New heading contents from JavaScript';
  var paragraphElm = document.getElementById('pageParagraph');
  paragraphElm.firstChild.nodeValue = 'New paragraph contents from JavaScript';
}

function myLoadFunction() {
  var elm = document.getElementById('updateBtn');
  elm.addEventListener('click', updateContents);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
//document.addEventListener('click', updateContents);