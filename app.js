var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];
var ele = [];

const popUp=document.querySelector(".popUp");

function box(itm){
    const that=this;
    that.style(itm.color);
    that.image(itm.image);
    that.name(itm.name);
    that.price(itm.price);
    this.ele.appendChild(this.img);
    this.ele.appendChild(this.nameEle);
    this.ele.appendChild(this.priceEle);
    document.body.appendChild(this.container);
    this.container.appendChild(this.ele);
    this.ele.addEventListener("click", function(){
        that.popUp();
    })
    this.ele.addEventListener("mouseenter", function (){
        that.colorTo(itm.color);
    })
    this.ele.addEventListener("mouseleave",function (){
        that.colorTo("black");
    })
}

box.prototype.style= function (color){
    this.ele=document.createElement("div");
    this.container=document.createElement("div");
    this.container.className="product";
    this.ele.className="product";

}
box.prototype.image=function(image){
    this.img=document.createElement("img");
    this.img.src=image;

}
box.prototype.name=function(name){
    this.nameEle=document.createElement("p");
    this.nameEle.innerHTML="Name: " + name;
}
box.prototype.price=function(price){
    this.priceEle=document.createElement("p");
    this.priceEle.innerHTML="Price: $"+price;
}
box.prototype.popUp = function(pop){
    const that=this;
    this.ele.className="popUp";
    this.ele.addEventListener("click", function(){
        that.products();
    })

}
box.prototype.colorTo=function(color){
    this.ele.style.borderColor = color;
}
box.prototype.products=function(){
    const that=this;
    this.ele.className="product";
    this.ele.addEventListener("click", function(){
        that.popUp();
    })
}
function start() {
    popUp.style.display = "none";
    for (let i = 0; i < products.length; i++) {
        ele.push(new box(products[i]));
    }
}

start();