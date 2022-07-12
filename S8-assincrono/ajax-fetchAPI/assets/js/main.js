/* const request =obj => {
    const xhr = new XMLHttpRequest(); //xml http request (representa ajax)
    xhr.open(obj.method,obj.url,true);//true -> asincrono
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status>=200 && xhr.status < 300) { //sucesso
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    })
}; */



const request =obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); //xml http request (representa ajax)
        xhr.open(obj.method,obj.url,true);//true -> asincrono
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if (xhr.status>=200 && xhr.status < 300) { //sucesso
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        })
    })
};

document.addEventListener('click', e=> {
    const el=e.target;
    const tag= el.tagName.toLowerCase();
    if (tag==='a') {
        e.preventDefault(); //previse o padrao que é ir para a página
        carregaPagina(el);
    }
});

/* function carregaPagina(el) {
    const href=el.getAttribute('href');
    console.log(href);

    request({
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText)
        }
    })
} */

/* function carregaPagina(el) {
    const href=el.getAttribute('href');
    console.log(href);

    request({
        method: 'GET',
        url: href,
    }).then(response => {
        carregaResultado(response);
    }).catch(error => console.log(error));
} */

/* async function carregaPagina(el) {
    const href=el.getAttribute('href');
    console.log(href);
    try {
        const response = await request({
            method: 'GET',
            url: href,
        });
        carregaResultado(response);
    }catch(e) {
        console.log(e);
    }
} */

async function carregaPagina(el) {
    const href=el.getAttribute('href');
    try {
        const response = await fetch(href);
        if (response.status!== 200) throw new Error('ERRO');
        const html=await response.text();
        carregaResultado(html);        
    }catch (e) {
        console.log(e);
    }
}

function carregaResultado (response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}

/* fetch('pagina1.html')
.then(resposta => {
    if (resposta.status !== 200) throw new Error('ERRO....')
    return resposta.text();
})
.then(html => console.log(html))
.catch(e => console.error(e)) */