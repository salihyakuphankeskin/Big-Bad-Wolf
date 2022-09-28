/*
String.prototype.yell = function (){
    console.log(this.toUpperCase());
}
const string01 = 'hello I am bicuk';
string01.yell();

function makeColor(r,g,b) {
    const color ={};
    color.r = r;    
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const{r,g,b}=this;
        return `rgb(${r},${g},${b})`;        
    };
    return color;
};
const firstColor = makeColor(55,243,46);
firstColor.rgb()

function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
    this.rgb = function () {
        const{r,g,b}=this;
        return `rgb(${r},${g},${b})`;        
    };
}
Color.prototype.hex= function () {
    const {r,g,b}=this;
    return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)    
}
const color1 = new Color(23,54,43);
*/
/*
    Classes are a template for creating objects. 
    They encapsulate data with code to work on that data. 
*/
class Colour{
    constructor(r,g,b,name){
/*this refence to upper element and take data from element */
        this.r=r;
        this.g=g;
        this.b=b;
        this.name=name;
    }
    innerRGB(){
        const{r,g,b}=this;
        return`${r},${g},${b}`
    }
    rgb(){return`rgb(${this.innerRGB})`}
    rgba(a=1.0){return`rgba(${this.innerRGB},${a})`}
}
/*new key make a empty window. And this used itself*/
const c1 = new Colour(21,53,87);
/*  CLASSES
-   Classes are a template for creating objects. They encapsulate data with code to work on that data.

constructor
- Makes classes base input data  

*/
class Pet{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return`${this.name} is eating`;
    }
}
/*
-   Extends used for taking data from parent class. 
-   Super used inside of classes to take source data from parent class
and used for creating extra constructor

*/
class Cat extends Pet{
    constructor(name,age,livesLeft=9){
        super(name,age);
        this.livesLeft=livesLeft;
    }
    meov(){
        return`MEOV !!!`;
    }
}

class Dog extends Pet{
    bark(){
        return`WOOF !!!`;
    }
}