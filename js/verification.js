document.getElementById('verification-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(this);
    const email = formData.get('email');
  
    // Validate email
    if (!email) {
      // Show error message with SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email!',
      });
      return;
    }
  
    // Check if email exists
    checkEmailExists(email)
      .then(exists => {
        if (exists) {
          // Show appropriate error message using SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Email Exists',
            text: 'This email address is already registered. Please use a different email.',
          });
        } else {
          // Proceed with signup
          // You can put your signup logic here
          console.log('Email does not exist!');
        }
      })
      .catch(error => {
        console.error('Error checking email existence:', error);
        // Show appropriate error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred while checking email existence. Please try again later.',
        });
      });
  });
  
  function checkEmailExists(email) {
    return new Promise((resolve, reject) => {
      // Make API call to check if email exists
      fetch(' https://quickteller.k8.isw.la/api/v1/accounts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }) // Check the correct key name for the email field
      })
      .then(response => {
        if (response.status === 400) {
          throw new Error('Bad request. Please check your email format.');
        }
        if (!response.ok) {
          throw new Error('Unexpected response from server');
        }
        return response.json();
      })
      .then(data => {
        // Assuming the API returns a JSON response with a field indicating existence
        // Modify this based on the actual response structure of the API
        if (data.exists) {
          resolve(true); // Email exists
        } else {
          resolve(false); // Email does not exist
        }
      })
      .catch(error => {
        // Reject with error message
        reject(error);
      });
    });
  }
  
  
  

