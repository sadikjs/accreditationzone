
const signature_input = document.querySelector("#image_signature");

let upload_image_sig = "";

signature_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        upload_image_sig = reader.result;
        const sigfour = document.querySelector("div#display_image:nth-last-child(4) > div#signat").style;
        const sigthree = document.querySelector("div#display_image:nth-last-child(3) > div#signat").style;
        const sigtwo = document.querySelector("div#display_image:nth-last-child(2) > div#signat").style;
        const sigone = document.querySelector("div#display_image:nth-last-child(1) > div#signat").style;
        sigfour.backgroundImage=`url(${upload_image_sig})`;
        sigthree.backgroundImage=`url(${upload_image_sig})`;
        sigtwo.backgroundImage=`url(${upload_image_sig})`;
        sigone.backgroundImage=`url(${upload_image_sig})`;
        sigfour.backgroundSize = "100px 35px";
        sigthree.backgroundSize = "100px 35px";
        sigtwo.backgroundSize = "100px 35px";
        sigone.backgroundSize = "100px 35px";
    });
    reader.readAsDataURL(this.files[0]);
});