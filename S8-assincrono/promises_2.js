function rand(min, max) {
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return; 
            }
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
    console.log(resposta);
    return esperaAi('Frase 3', rand(1,3));
}).then(resposta => {
    console.log(resposta);
})
.catch(e=> {
    console.log('ERRO', e);
})

async function executa() { //só posso usar await se funcao for async
    try {
        const fase1 = await esperaAi('Fase1', rand(1,3)); //espera promise finalizar
        console.log(fase1)
        const fase2 = await esperaAi('Fase2', rand(1,3));
        console.log(fase1)
        const fase3 = await esperaAi('Fase3', rand(1,3));
        console.log(fase1)

        console.log('terminou na fase: ', fase3)
    }catch(e) {
        console.log(e);
    }
}