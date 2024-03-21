function removeElement(array, item) {
    return array.filter(element => element !== item);
}

const array = [1, 2, 3, 4, 5];
const itemToRemove = 3;
const newArray = removeElement(array, itemToRemove);
console.log(newArray);