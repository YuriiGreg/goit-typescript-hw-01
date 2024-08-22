function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}


showMessage('Hello, this is a message!'); 


const sum = calc(5, 7);
console.log('Sum:', sum); 


try {
  customError(); 
} catch (error) {
  console.error('Caught an error:', error); 
}