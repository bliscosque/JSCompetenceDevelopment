module.exports = (req, res, next) => {
    console.log('passei no middleware global')
    next(); //sempre encadear os elementos do middleware
} 