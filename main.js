var url1 = "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q2/678295/2017-audi-r8-spyder-instrumented-test-review-car-and-driver-photo-683069-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*"
var url2 = "https://www.flyingflowers.co.uk/ff_images/product/8466/FC93621F.jpg?category"
var url3 = "http://wallfon.com/walls/space/spiralnaya-galaktika.jpg"

function loadImage(url){
    return new Promise(function(resolve){
        var image = document.createElement("img")
        image.height = 200;
        image.src = url
        document.body.appendChild(image)
        image.addEventListener("load",()=>{
            resolve()
        })
    })
}
loadImage(url1)
  .then(()=>loadImage(url2))
  .then(()=>loadImage(url3))
  .then(()=>console.log("картинка 3 загружена"))
