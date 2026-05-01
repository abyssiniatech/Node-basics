import color from "./color.js";
import name from "./app.js";
import { add, subtract } from "./math.js";
const info={name:name.name,name2:name.name2}
console.log(info.name);
console.log(info.name2);
console.log(color.color);
console.log(color.rgb);
console.log(":::::;::::")
console.log(add(5, 3));  
console.log(subtract(10, 4));


// color file with map method
color.color.map((c, index) => {
    console.log(`Color: ${c}, RGB: ${color.rgb.slice(index * 3, index * 3 + 3)}`);
});