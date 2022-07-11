function rand(min, max) {
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })
}

//.then -> quando a promise for resolvida
//.catch -> quando a promise for rejeitada
esperaAi('Frase 1', rand(1,3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1,3));
})
.then(resposta => {
    return resposta+' indo para outroo then'
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    return esperaAi(222,rand(1,3))
})
.catch(e=> {
    console.log('ERRO', e);
})
