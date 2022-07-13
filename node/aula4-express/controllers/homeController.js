exports.paginaInicial = (req,res) => {
    res.send(`
    <form action="/" method="POST">
    Nome Cliente: <input type="text" name="nome">
    <button>Postar</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    console.log(req.body)
    res.send('recebi o form');
}