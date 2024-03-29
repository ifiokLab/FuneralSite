



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n){
 
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").setAttribute('disabled',true);//style.display = "none";
  } else {
    document.getElementById("prevBtn").removeAttribute('disabled');
  }
  if(n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}


function nextPrev(n) {
  // This function will figure out which tab to display
  //var born = document.getElementById('born');
  //born.innerHTML = `When was ${first_name} born?`;
  
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      //y[i].className += " invalid";
      y[i].classList.toggle('invalid');
      y[i].placeholder = 'please fill out this field';
     
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  //if (valid) {
    //document.getElementsByClassName("step")[currentTab].className += " finish";
  //}
  return valid; // return the valid status
}


function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var stage = document.getElementById('stage');
  var bar = document.getElementById('bar');
  stage.innerHTML = `${n+1} of 3`;
  bar.value =`${n+1}`;

 
 
} 


//var deceased_name = document.getElementById('id_first_name');
//deceased_name.value;


