let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let fn = document.getElementById('fname');
let em = document.getElementById('email');
let fm = document.getElementById('contact-form');
let sb = document.getElementById('submit-button');
let ms = document.getElementById('message');

function formValidator(e){
    e.preventDefault();
  let data = {};
  let errors = [];
  
  if (fn.value) {
      data.fullname = fn.value;
  } else {
      errors.push('Full name is required');
  }
   
  if (em.value) {
      if (pattern.test(em.value)) {
        data.email = em.value;  
      } else {
      errors.push('Email is invalid');  
     } 
} else {
     errors.push('Email is required');  
}
    if (ms.value) {
      data.message = ms.value;
  } else {
      errors.push('Message is required');
  }
    
  if (errors.length ===0) {
      console.log(data);
      document.getElementById('contact-form').reset();
  }else{
      
  }
    console.log(errors);

    
}

sb.addEventListener('click', formValidator);
//fm.addEventListener('submit', formValidator);



// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors


//    +-----------+    
//    | FULL NAME |
//    +-----------+
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.


//    +-------+    
//    | EMAIL | 
//    +-------+
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.


//    +---------+    
//    | MESSAGE | 
//    +---------+
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.


//    +-----------------+
//    | FEEDBACK/ERRORS |
//    +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

// Close your function here
    
// Register your form to "click" event.