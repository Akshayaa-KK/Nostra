document.getElementById("cancelOffer").addEventListener("click",function(){
    document.getElementById("offerBar").style.display="none"
})

document.getElementById("menuBar").addEventListener("click",function(){
    document.getElementById("sideNav").style.left="0"
})

document.getElementById("cancelNav").addEventListener("click",function(){
    document.getElementById("sideNav").style.left="-50%"
})


var imageWrapper=document.getElementById("imageWrapper")
var images=imageWrapper.querySelectorAll("img")
var leftArrow=document.getElementById("leftArrowbtn")
var rightArrow=document.getElementById("rightArrowbtn")
var imgLength=images.length
var imageIndex=0

rightArrow.addEventListener("click",function(){
    
    const imagesList=document.getElementsByName("bannerImage")
    if(imageIndex>=0)
    {
       imagesList[imageIndex].classList.add("hidden")
       imageIndex=(imageIndex<imagesList.length-1)?imageIndex+1:0
       imagesList[imageIndex].classList.remove("hidden")
    }
    
})

leftArrow.addEventListener("click",function(){
    
    const imagesList=document.getElementsByName("bannerImage")
    if(imageIndex>=0)
    {
       imagesList[imageIndex].classList.add("hidden")
       imageIndex=(imageIndex<imagesList.length-1)?imageIndex+1:0
       imagesList[imageIndex].classList.remove("hidden")
    }
    
})




   