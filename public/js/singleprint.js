const printSingle = document.getElementById("print-single");
var headtitle = document.getElementById("title-print")
var paginationbottom= document.getElementById("pagination")
const main = document.getElementById("main");
const table = document.getElementById("table")
// const mainwidth = document.getElementsByClassName(".main")
// const table = document.getElementsByTagName("table");
    var card = document.querySelector("tr.grid-container:nth-last-child(4)");
    var cardTwo = document.querySelector("tr.grid-container:nth-last-child(3)");
    var cardThree = document.querySelector("tr.grid-container:nth-last-child(2)");
    var cardfour = document.querySelector("tr.grid-container:nth-last-child(1)");

const printSinglePage= ()=>{
    
    // const printFrame = document.createElement("iFrame");  
    //  printFrame.src="print.ejs"
    //  document.body.appendChild(printFrame);
    //  printFrame.contentWindow.focus();
    //  printFrame.contentWindow.print();
 
    main.style.width="535px"
    main.style.height="785px";
    main.style.margin="0 auto";
    table.style.width="534px"
    table.style.height="785px";
    table.style.margin="0 auto";

    headtitle.style.display = "none";
    cardTwo.style.display="none";
    cardThree.style.display = "none";
    cardfour.style.display = "none";
    paginationbottom.style.display = "none";
    window.print();
    
    // cardTwo.style.dispaly = "none";
    // cardThree.style.dispaly = "none";
    // cardfour.style.dispaly = "none";
    // const mWidth =  mainwidth.style;
    // mWidth.width = "100%"
    // mWidth.margin = "0 auto";
    // mWidth.height = "auto";
        
    // const tstle=  table.style;
    // tstle.width="1082px";
    // tstle.margin= "0 auto";
    // tstle.height= "1566px";
    // tstle.transform= "rotateX(180deg)";
    
    // const cstyle = card.style;
    // cstyle.width="534px";
    // cstyle.height= "778px";
    // cstyle.backgroundPosition = 'center';
    // cstyle.backgroundSize= 'cover';
    // cstyle.marginRight="3px";
    // cstyle.marginBottom = "5px";
}

printSingle.addEventListener("click", ()=>{
    
    printSinglePage();
    
})