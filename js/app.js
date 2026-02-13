// Uso da constante pois o valor não irá mudar.
// Capturando todas as informações no global antes de iniciar as funções.
const i01 = document.getElementById('valor01');
const i02 = document.getElementById('valor02');
const resultado = document.getElementById('resultado');

function calcularTotal(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        alert('Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!')
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <span>Valor do produto: ${v01}</span>
        <span>Quantidade: ${v02}</span>
        <span>Total: R$ ${v01*v02}</span>
        `;
    }
};

function desconto(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        alert('Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!')
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <span>Valor do produto: ${v01} </span>
        <span>Desconto aplicado: ${v02}</span>
        <span>Valor do produto: Total: R$ ${v01 - ((v01*v02)/100)}</span>

        `;
    }
};

function juros(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        alert('Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!')
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <span>Valor do produto: ${v01}</span>
        <span>Juros aplicado: ${v02}</span>
        <span>Total: R$ ${v01 + ((v01*v02)/100)}</span>
        `;
    }
};

function comissao(){
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        alert('Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!')
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <span>Valor da venda: ${v01}</span>
        <span>Comissão(%): ${v02}</span>
        <span>Comissão correspondente a: R$ ${(v01*v02)/100}</span>
        `;
    } 
};

function lucro(){    
    const v01 = parseFloat(i01.value);
    const v02 = parseFloat(i02.value);

    if(isNaN(v01) || isNaN(v02)){
        alert('Inválido. Confira se o valor 01 ou valor 02 estão aplicados corretamente!')
    } else{
        resultado.style.display='flex';
        resultado.innerHTML=
        `
        <span>Preço da venda: ${v01}</span>
        <span>Custo: ${v02}</span>
        <span>Lucro: R$ ${v01 - v02}</span>
        `;
    }
};

function limpar(){
    resultado.style.display = 'none';
    i01.value = '';
    i02.value = '';
};
