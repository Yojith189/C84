canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var back_img="mars.jpg";

rover_img="rover.png";
Rv_X = 10;
Rv_Y = 10;

Rv_width = 90;
Rv_height = 89;


function add(){
    background_img= new Image();
    background_img.src= back_img;
    background_img.onload=uploadBackground ;

    Marsrov_img = new Image();
    Marsrov_img.src = rover_img;
    Marsrov_img.onload = uploadImage;


}
function uploadBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);

}
function uploadImage(){
    ctx.drawImage(Marsrov_img ,Rv_X,Rv_Y,Rv_width,Rv_height);
}















