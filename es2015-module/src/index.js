import { choice, remove } from "./helpers";
import fruitArr from "./foods";


    let randFruit = choice(fruitArr);
  

    console.log(`I'd like one ${randFruit}, please`);
    console.log(`Here you go: ${randFruit} `);
    console.log(`Delicious! May I have another? `);
    
    remove(fruitArr, randFruit);

    console.log(`I'm sorry, we're all out. We have ${ fruitArr.length } left.`);


