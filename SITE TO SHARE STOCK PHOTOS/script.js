const search = document.querySelector(".search-box input"),
      images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
            value = searcValue.toLowerCase();
            images.forEach(image =>{
                if(value === image.dataset.name){ //matching value with getting attribute of images
                    return image.style.display = "block";
                }
                image.style.display = "none";
            });
    }
});

search.addEventListener("keyup", () =>{
    if(search.value != "") return;

    images.forEach(image =>{
        image.style.display = "block";
    })
})


var downloadLink = document.querySelector('a[download]');
downloadLink.addEventListener('click', function(event) {
  event.preventDefault();
  var imageSrc = this.href;
  var link = document.createElement('a');
  link.href = imageSrc;
  link.download = 'image.jpg'; // Specify the desired filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}); 


const sideNav = document.getElementById('side-nav');

function OpenNav(){
    sideNav.style.width='250px';
}
function CloseNav(){
    sideNav.style.width='0px';
}