function add(numbers: string, returnErrorMessage: boolean = false): string | number {
    let delimiter: string = ',';
    if(numbers.startsWith('//')) {
        const delimiterIndex: number = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterIndex);
        numbers = numbers.substring(delimiterIndex + 1);
    }

    let sum = 0;
    const negativeNumbers: number[] = [];
    const arr: string[] = numbers.split(delimiter).join('\n').split('\n');
    for(let i = 0; i < arr.length; i++) {
        const val: number = parseInt(arr[i]); // can use parseFloat if we want to support for float values
        if(val < 0) {
            negativeNumbers.push(val);
        } else if(val > 0) {
            sum += val;
        }
    }

    if(negativeNumbers.length) {
        const errMessage = `negative numbers not allowed ${negativeNumbers.join(',')}`;
        if(returnErrorMessage) {
            return errMessage;
        }
        throw new Error(errMessage);
    }

    return sum;
}

export default add;
