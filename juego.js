
var xgal1 = 0;

var xgal2 = 0;

function meta(meta){
    if(meta == 300){
        
        document.querySelector(".metafinal").style.display="block";
        document.querySelector(".metafinal").style.marginLeft="70%";
        document.querySelector(".metafinal").style.position="absolute"


    }
}

document.querySelector("body").addEventListener('keydown', (event)=>{
if(event.code=='KeyP'){
    xgal1=xgal1+10;
    document.querySelector('#gal1').style.marginLeft=xgal1 + 'px';
meta(xgal1)

}else if (event.code=='KeyQ'){
    xgal2=xgal2+20;
    document.querySelector('#gal2').style.marginLeft=xgal2 + 'px';
meta(xgal2)

}

})