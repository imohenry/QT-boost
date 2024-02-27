
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
function downloadPDF() {
  const pdfUrl = 'https://mcusercontent.com/a3d687905d2a2c4b266d653e8/files/d19ee639-6d78-215e-7c5e-c475dae07e25/QTB_eBook.pdf'; // Update this with the correct PDF URL

  const anchor = document.createElement('a');
  anchor.href = pdfUrl;
  anchor.download = 'QTB_eBook.pdf';
  anchor.target = '_blank';
  anchor.style.display = 'none';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

document.getElementById('form_details').addEventListener('submit', async function(event) {
  event.preventDefault();

  // Form data extraction
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const emailAddress = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const password = document.getElementById('password').value;

  // Form validation
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

  try {
    const response = await fetch('https://quickteller.com/api/v1/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    // Submit data regardless of response status
    smartech('create', 'ADGMOT35CHFLVDHBJNIG50K968HGC4AU9CK8VRN68EHEH9MQ0RU0');
    smartech('register', 'ed71c43ad003846d01e0e99be1c64d00');
    smartech('identify', '');

    smartech('dispatch', 1, {
        "s^url": "<Replace url value here>",
        "i^sts": "<Replace sts value here>",
        "i^pts": "<Replace pts value here>",
        "i^npv": "<Replace npv value here>",
        "s^title": "<Replace title value here>"
    });
    await smartech('identify', emailAddress);
    await smartech('dispatch', "boost_ebook_data", {
        "email": emailAddress,
        "FIRSTNAME": firstName,
        "LASTNAME": lastName,
        "PHONENUMBER": number,
        "OTHERS": password
    });
    await smartech('contact', '412', {
        'pk^email': emailAddress,
        "FIRSTNAME": firstName,
        "LASTNAME": lastName,
        "PHONENUMBER": number,
        "OTHERS": password
    });
      const scriptURL = "https://script.google.com/macros/s/AKfycbxgnjgjzV0rrutXF977EGcihKNYrInBp5je2cV53nvBzBFpAvzQdaOI_KuTbnKs5u5B4A/exec"; 
      const form = document.getElementById('form_details');
      const formData = new FormData(form);
      await fetch(scriptURL, { method: "POST", body: new FormData(form) },
      { mode: 'no-cors'}
      // .then((res) => res.json())
      // .then((data) => console.log(data))
      );
      console.log("FormData:", formData);

     // Handle success and existing user scenarios based on the API response
    if (response.ok) {
      

      Swal.fire({
        icon: 'success',
        title: 'Welcome!',
        text: 'Your account has been successfully created. Click on Download Ebook to get your copy.',
        // showCancelButton: true,
        // cancelButtonColor: '#d33',
        confirmButtonText: 'Download Ebook',
        // cancelButtonText: 'Close'
      }) .then((result) => {
        if (result.isConfirmed) {
          downloadPDF();
        }
      });

      // Clear the form after successful submission
      const form = document.getElementById('form_details');
      form.reset();
    } else if (response.status === 400) {
      Swal.fire({
        icon: 'warning',
        title: 'Already Registered',
        text: 'You are already registered. Click on Download Ebook to get your copy.',
        // showCancelButton: true,
        // confirmButtonColor: '#3085d6',
        // cancelButtonColor: '#d33',
        confirmButtonText: 'Download Ebook',
        // cancelButtonText: 'Close'
      }).then((result) => {
        if (result.isConfirmed) {
          downloadPDF();
        }
      });
      const form = document.getElementById('form_details');
      form.reset();
    } else {
      // Handle unexpected errors
      throw new Error(`API returned unknown error: ${data}`);
    }
  } catch (error) {
    console.error('Error signing up:', error);
    Swal.fire({
      icon: 'error',
      title: 'Signup Failed',
      text: 'An error occurred while signing up. Please try again later.',
    });
  }
});

