// Uso da constante pois o valor não irá mudar.
// Capturando todas as informações no global antes de iniciar as funções.
const i01 = document.getElementById('valor01');
const i02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <p>Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!</p>
        `
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <ul>
            <li>Valor do produto: R$ ${v01.toFixed(2)}</li>
            <li>Quantidade: ${v02}</li>
            <li>Total: R$ ${(v01*v02).toFixed(2)}</li>
        </ul>
        `;
    }
};

function desconto(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <p>Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!</p>
        `
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <ul>
            <li>Valor do produto: R$ ${v01.toFixed(2)}</li>
            <li>Desconto aplicado: ${v02}%</li>
            <li>Total: R$ ${(v01 - ((v01*v02)/100)).toFixed(2)}</li>
        </ul>
        `;
    }
};

function juros(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <p>Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!</p>
        `
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <ul>
            <li>Valor do produto: R$ ${v01.toFixed(2)}</li>
            <li>Juros aplicado: ${v02}%</li>
            <li>Total: R$ ${(v01 + ((v01*v02)/100)).toFixed(2)}</li>
        </ul>
        `;
    }
};

function comissao(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <p>Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!</p>
        `
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <ul>
            <li>Valor da venda: R$ ${v01.toFixed(2)}</li>
            <li>Comissão(%): ${v02}%</li>
            <li>Comissão correspondente a: R$ ${((v01*v02)/100).toFixed(2)}</li>
        </ul>

        `;
    } 
};

function lucro(){    
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <p>Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!</p>
        `
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <ul>
            <li>Preço da venda: R$ ${v01.toFixed(2)}</li>
            <li>Custo: R$ ${v02.toFixed(2)}</li>
            <li>Lucro: R$ ${(v01 - v02).toFixed(2)}</li>
        </ul>

        `;
    }
};

function limpar(){
    resultado.style.display = 'none';
    i01.value = '';
    i02.value = '';
    i01.focus()
};
