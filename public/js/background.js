
const image_input = document.querySelector("#image_input");

let upload_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        upload_image = reader.result;
        const esfour = document.querySelector("div#display_image:nth-last-child(4)").style;
        const esthree = document.querySelector("div#display_image:nth-last-child(3)").style;
        const estwo = document.querySelector("div#display_image:nth-last-child(2)").style;
        const esone = document.querySelector("div#display_image:nth-last-child(1)").style;
        esfour.backgroundImage=`url(${upload_image})`;
        esthree.backgroundImage=`url(${upload_image})`;
        estwo.backgroundImage=`url(${upload_image})`;
        esone.backgroundImage=`url(${upload_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});