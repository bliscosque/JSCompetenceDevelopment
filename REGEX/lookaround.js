const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

// console.log(lookahead.match(/.+[^in]active$/gim));

// Positive lookahead (frases que tem active) -> ?=
//console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim))




// Negative lookahead (frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

// Negative lookahead (frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+inactive).+$/gim))

// Positive lookbehind (Frases que começam com ONLINE)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

// Negative lookbehind (Frases que NÃO começam com ONLINE)
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))