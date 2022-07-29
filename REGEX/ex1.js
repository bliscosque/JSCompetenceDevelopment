const text='Dr#Joseph';
const re=/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[A-Za-z]+$/;    
console.log(text.match(re)[0]);