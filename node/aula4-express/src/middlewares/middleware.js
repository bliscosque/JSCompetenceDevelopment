module.exports = (req, res, next) => {
    console.log('passei no middleware global')
    res.locals.umaVariavelLocal = 'Este é o valor da var local'; //injeta tráfico em todas as requests
    next(); //sempre encadear os elementos do middleware
} 