const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;

const callback = (a: number): number => { 
    return 100 + a; 
};

console.log('Age:', age);            
console.log('Username:', username); 
console.log('Toggle:', toggle);      
console.log('Empty:', empty);        
console.log('Callback Result:', callback(10));