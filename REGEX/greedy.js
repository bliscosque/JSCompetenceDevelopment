const html = '<p>Olá mundo</p> <p>novamente</p>';
const regExp1 = /<.+>.+<\/.+>/g;

console.log(html.match(regExp1));

const regExp2 = /<.+?>.+?<\/.+?>/g;
console.log(html.match(regExp2));

