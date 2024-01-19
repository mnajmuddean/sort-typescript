import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const linkedList = new LinkedList();
// linkedList.add(50);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(1213);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();

// const numbersCollection = new NumbersCollection([10,3,-5,0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const sorter = new Sorter(numbersCollection);
// sorter.sort();

const charactersCollection = new CharactersCollection('Xassakdkas');
charactersCollection.sort();
console.log(charactersCollection.data);

