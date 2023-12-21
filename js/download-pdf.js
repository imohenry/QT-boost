//select the pdf id
const downloadPdf = document 
.querySelector("#download-pdf"); 

downloadPdf.addEventListener("click", () => { 
  
    // Creating the element anchor that 
    // will download pdf 
    let element = document.createElement("a"); 
    element.href = "../QTB-eBook.pdf"; 
    element.download = "../QTB-eBook.pdf"; 

    // Adding the element to body 
    document.documentElement.appendChild(element); 

    // Above code is equivalent to 
    // <a href="path of file" download="file name">  

    // onClick property, to trigger download 
    element.click(); 

    // Removing the element from body 
    document.documentElement.removeChild(element); 

})