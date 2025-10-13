const printButton = document.getElementById("print-button");
const printPage= ()=>{
    // const printFrame = document.createElement("iFrame");  
    //  printFrame.src="print.ejs"
    //  document.body.appendChild(printFrame);
    //  printFrame.contentWindow.focus();
    //  printFrame.contentWindow.print();
    window.print();

}

printButton.addEventListener("click", ()=>{
    printPage();
})