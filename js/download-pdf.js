// //select the pdf id
// const downloadPdf = document 
// .querySelector("#download-pdf"); 

// downloadPdf.addEventListener("click", () => { 
  
//     // Creating the element anchor that 
//     // will download pdf 
//     let element = document.createElement("a"); 
//     element.href = "https://mcusercontent.com/a3d687905d2a2c4b266d653e8/files/8b0ca48d-67fa-db1f-46de-a072b30ef336/QTB_eBook.pdf"; 
//     element.download = "QTB_eBook.pdf";
    
// Opening the link in a new tab after a delay of 4 seconds
// setTimeout(() => {
//     element.target = "_blank";
//     // Adding the element to body
//     document.documentElement.appendChild(element);
//     // onClick property, to trigger download
//     element.click();
//     // Removing the element from body
//     document.documentElement.removeChild(element);
// }, 2000); // 4000 milliseconds = 4 seconds

// })

  // const pdfUrl = 'https://mcusercontent.com/a3d687905d2a2c4b266d653e8/files/d19ee639-6d78-215e-7c5e-c475dae07e25/QTB_eBook.pdf';
      // const anchor = document.createElement('a');
      // anchor.href = pdfUrl;
      // anchor.download = 'QTB_eBook.pdf'; // Pdf filename
      // anchor.target = '_blank';
      // anchor.style.display = 'none';
      // document.body.appendChild(anchor);
      // anchor.click();
      // document.body.removeChild(anchor);

      function downloadPDF() {
        const pdfUrl = 'https://mcusercontent.com/a3d687905d2a2c4b266d653e8/files/d19ee639-6d78-215e-7c5e-c475dae07e25/QTB_eBook.pdf';
      
        // Create a button element
        const downloadButton = document.createElement('button');
        downloadButton.innerText = 'Download PDF';
      
        // Add click event listener to the button
        downloadButton.addEventListener('click', () => {
          const anchor = document.createElement('a');
          anchor.href = pdfUrl;
          anchor.download = 'QTB_eBook.pdf';
          anchor.target = '_blank';
          anchor.style.display = 'none';
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
        });
      
        // Add the button to your desired location in the DOM
        document.body.appendChild(downloadButton);
      }