let instance = null;
class ThemeSettings {
    
    constructor(color,font,layout) {
        if(instance){
            return instance;
        }
        this.color = color;
        this.font = font;
        this.layout = layout;
    }
}

let myTheme1 = new ThemeSettings('black','openSans','grid');
let myTheme2 = new ThemeSettings('white','roboto','flex');

console.log(myTheme1===myTheme2);
document.getElementById("demo").innerHTML = "color: " + myTheme1.color + "<br>font: " + myTheme1.font + "<br>layout: " + myTheme1.layout;

console.log( "color: " + myTheme2.color + " /font: " + myTheme2.font + " /layout: " + myTheme2.layout);
