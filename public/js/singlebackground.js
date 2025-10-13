
const single_input = document.querySelector("#single_input");

let upload_images = "";

single_input.addEventListener("change", function(){
    const readeron = new FileReader();
    readeron.addEventListener("load", ()=>{
        upload_images = readeron.result;
      const esfourone = document.querySelector("tr#display_image:nth-last-child(4)").style;
        // const esthreeone = document.querySelector("tr#display_image:nth-last-child(3)").style;
        // const estwoone = document.querySelector("tr#display_image:nth-last-child(2)").style;
        // const esoneone = document.querySelector("tr#display_image:nth-last-child(1)").style;
        esfourone.backgroundImage=`url(${upload_images})`;
        // esthreeone.backgroundImage=`url(${upload_images})`;
        // estwoone.backgroundImage=`url(${upload_images})`;
        // esoneone.backgroundImage=`url(${upload_images})`; 
    });
    readeron.readAsDataURL(this.files[0]);
});