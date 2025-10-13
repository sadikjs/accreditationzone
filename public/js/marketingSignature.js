
const signature_input = document.querySelector("#image_signature");

let upload_image_sig = "";

signature_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        upload_image_sig = reader.result;
        const sigfour = document.querySelector("tr#display_image:nth-last-child(4) > td.item17").style;
        const sigthree = document.querySelector("tr#display_image:nth-last-child(3) > td.item17").style;
        const sigtwo = document.querySelector("tr#display_image:nth-last-child(2) > td.item17").style;
        const sigone = document.querySelector("tr#display_image:nth-last-child(1) > td.item17").style;
        sigfour.backgroundImage=`url(${upload_image_sig})`;
        sigthree.backgroundImage=`url(${upload_image_sig})`;
        sigtwo.backgroundImage=`url(${upload_image_sig})`;
        sigone.backgroundImage=`url(${upload_image_sig})`;
        sigfour.backgroundSize = "100px 41px";
        sigthree.backgroundSize = "100px 41px";
        sigtwo.backgroundSize = "100px 41px";
        sigone.backgroundSize = "100px 41px";
    });
    reader.readAsDataURL(this.files[0]);
});