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
        <span>Valor do produto: ${v01}  Quantidade: ${v02}  Total: R$ ${v01*v02}</span>
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
        <span>Valor do produto: ${v01}  Desconto aplicado: ${v02}  Total: R$ ${v01 - ((v01*v02)/100)}</span>

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
        <span>Valor do produto: ${v01}  Juros aplicado: ${v02}  Total: R$ ${v01 + ((v01*v02)/100)}</span>
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
        <span>Valor da venda: ${v01}  Comissão(%): ${v02}  Comissão correspondente a: R$ ${(v01*v02)/100}</span>
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
        <span>Preço da venda: ${v01}  Custo: ${v02}  Lucro: R$ ${v01 - v02}</span>
        `;
    }
};

function limpar(){
    resultado.style.display = 'none';
    i01.value = '';
    i02.value = '';
};
