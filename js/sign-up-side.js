
// document.getElementById('email').addEventListener('change', function() {
//     const emailInput = document.getElementById('email');
//     const emailAddress = emailInput.value;

//     // Call the API to check if the email already exists
//     fetch(`https://quickteller.com/api/v1/accounts/${emailAddress}/exists`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         // if (!response.ok) {
//         //     throw new Error('Network response was not ok');
//         // }
//         // return response.json();
//         console.log(response.json())
     
        
//     })
//     // .then(data => {
//     //     // If email already exists, show error
//     //     const emailError = document.getElementById('emailError');
//     //     if (data.exists) {
//     //         emailInput.style.borderColor = 'red';
//     //         emailError.textContent = 'Email already exists.';
//     //     } else {
//     //         emailInput.style.borderColor = '';
//     //         emailError.textContent = '';
//     //     }
//     // })
//     // .catch(error => {
//     //     console.error('Error checking email:', error);
//     // });
// });

// let form = document.getElementById('form_details')

// async function verifyEmail () {
//   const emailAddress = document.getElementById('email').value;
//   const response = await fetch(`https://quickteller.com/api/v1/accounts/${emailAddress}/exists`
  
//   );
//   // const res = await response.json();  
//   console.log(response);
//   console.log(emailAddress)
//  }

//  document.getElementById('email').addEventListener('change', verifyEmail) 


// async function signUp () {
//   const firstName = document.getElementById('firstName').value;
//   const lastName = document.getElementById('lastName').value;
//   const emailAddress = document.getElementById('email').value;
//   const number = document.getElementById('phoneNumber').value;
//   const password = document.getElementById('password').value;

//   const payload = {
//     "countryCode": "NG",
//     "emailAddress": emailAddress,
//     "firstName": firstName,
//     "lastName": lastName,
//     "mobileNumber": number,
//     "password": password,
//     "referralCode": "",
//   }

//   if (!firstName || !lastName || !emailAddress || !number || !password) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Oops...',
//       text: 'Please fill out all fields!',
//     });
//     return;
//   }
//     const response = await fetch('https://quickteller.k8.isw.la/api/v1/accounts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//       })
//       .then(console.log(payload)
        
//       )
//       .catch(error => {
//           Swal.fire({
//               icon: "error",
//               title : "Error",
//               text: error.response.data.description
//           })
//           console.log(error)
//       })
//     }

// document.getElementById('form_details').addEventListener('submit', signUp) 

document.getElementById('form_details').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
  
    if (!firstName || !lastName || !emailAddress || !number || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all fields!',
      });
      return;
    }
  

    const payload = {
        "countryCode": "NG",
        "emailAddress": emailAddress,
        "firstName": firstName,
        "lastName": lastName,
        "mobileNumber": number,
        "password": password,
        "referralCode": "",
        "referralId": ""
    };
  
    fetch('https://quickteller.com/api/v1/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Signup successful:', data);
      Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
        text: 'You have successfully signed up!',
      });
    })
    .catch(error => {
      console.error('Error signing up:', error);
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: 'An error occurred while signing up. Please try again later.',
      });
    });
  
});

// Netcore setup

// smartech('create', 'ADGMOT35CHFLVDHBJNIG50K968HGC4AU9CK8VRN68EHEH9MQ0RU0');
// smartech('register', 'ed71c43ad003846d01e0e99be1c64d00');
// smartech('identify', '');

// smartech('dispatch', 1, {
//     "s^url": "<Replace url value here>",
//     "i^sts": "<Replace sts value here>",
//     "i^pts": "<Replace pts value here>",
//     "i^npv": "<Replace npv value here>",
//     "s^title": "<Replace title value here>"
// });


// form.addEventListener('submit' , (e) => {e.preventDefault();
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//     var email = document.getElementById('email').value;
//     var mobile = document.getElementById('number').value;
//     var password = document.getElementById('password').value;


//     if (firstName === "" | lastName === "" | email === "" | mobile === "" | password === "") {
//         Swal.fire({ title: "Error!", text: 'Please fill the form fields', type: "danger" });

//     } else {

//         smartech('identify', email);
//         smartech('dispatch', "boost_ebook_data", {
//             "email": email,
//             "FIRSTNAME": firstName,
//             "LASTNAME": lastName,
//             "PHONENUMBER": number,
//             "OTHERS": password
                
//         })
//         smartech('contact', '412', {
//                 'pk^email': email,
//                 "FIRSTNAME": firstName,
//                 "LASTNAME": lastName,
//                 "PHONENUMBER": number,
//                 "OTHERS": password
                
//             })

//             // Swal.fire({
//             //     title: "Congratulations!",
//             //     icon: "success",
//             //     text: "Your details has been received",
//             // })
//         //form.reset();
//         }})




// GOOGLE SHEET SETUP

let signup_form = document.forms["form_details"];

$("#download-pdf").on("submit", function (e) {
  e.preventDefault();
  let first_Name = document.getElementById('firstName').value;
  let last_Name = document.getElementById('lastName').value;
  let email_Address = document.getElementById('email').value;
  let number = document.getElementById('number').value;
  let password = document.getElementById('password').value;
  // let designation = document.getElementById("designation").value;

  if (
    first_Name == "" ||
    last_Name == "" ||
    email_Address == "" ||
    number == "" ||
    password == ""
    // privacy == false
  ) {
    Swal.fire({
      title: "Error!",
      text: "Please fill the form fields",
      type: "danger",
    });
  } else {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxgnjgjzV0rrutXF977EGcihKNYrInBp5je2cV53nvBzBFpAvzQdaOI_KuTbnKs5u5B4A/exec";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      // .then(
      //   Swal.fire({
      //     icon: "success",
      //     html: "We've received your signup! <br><br> ebook will download shortly",
      //   })
      // )
      // .then(form.reset());
   }
});