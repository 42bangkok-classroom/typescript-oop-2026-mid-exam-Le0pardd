
export function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
    
    const combined = [...arr1, ...arr2];

    
    return combined.filter((num) => {
        return combined.indexOf(num) === combined.lastIndexOf(num);
    });
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const result = getUniqueNumbers(array1, array2);
console.log(result);