/* module.exports = (req, res, next) => {
    console.log('passei no middleware global')
    res.locals.umaVariavelLocal = 'Este é o valor da var local'; //injeta tráfico em todas as requests
    next(); //sempre encadear os elementos do middleware
}  */

exports.checkCsrfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSSRFTOKN') {
        return res.render('404');
    }
    next();
}
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken=req.csrfToken();
    next();
}