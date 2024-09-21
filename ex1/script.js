/* Crie um algoritmo de pagamento em que se cadastre os prestadores de serviço, 
pegando os seguintes dados: nome completo, um número do PIS/PASEP, o valor da sua hora trabalhada e a quantidade
de horas trabalhadas de 5 a 50 pessoas. No fim dos cadastros deve-se mostrar os dados, o valor bruto do serviço e
o líquido descontando na página html dos cadastrados.
Todos os campos devem ser válidos e cumprir os requisitos mínimos de validação.
O valor da hora: mínimo de 20 reais e máximo de 500 reais.
A quantidade de horas sempre estará entre 20 e 200 horas trabalhadas no mês.
O valor líquido do prestador de serviço tem descontos de impostos a recolher sendo 
o INSS (tabela), ISS (5%) E IR (tabela).
*/


function cadastroPrestadores() {
    let contador = 0;
    let prestadores = [];
    let continuar;

    do {
        let prestador = {};
        contador++;
        
        
        let nome = prompt("Informe o Nome:").trim();
        while (nome === "" || nome.split(" ").length < 2) {
            nome = prompt("Informe o Nome novamente (deve ter pelo menos 2 palavras):").trim();
        }

        
        let pispasep = prompt("Informe o número do PIS/PASEP:");
        while (!/^\d{11}$/.test(pispasep)) {
            pispasep = prompt("Digite um PIS/PASEP válido (11 dígitos):");
        }

        
        let valorHora = prompt("Informe o valor da hora trabalhada:");
        while (isNaN(valorHora) || parseFloat(valorHora) < 20 || parseFloat(valorHora) > 500) {
            valorHora = prompt("Informe um valor válido entre R$ 20 e R$ 500:");
        }

        
        let trabHora = prompt("Informe a quantidade de horas trabalhadas:");
        while (isNaN(trabHora) || parseFloat(trabHora) < 20 || parseFloat(trabHora) > 200) {
            trabHora = prompt("Informe um número válido de horas entre 20 e 200:");
        }

        
        prestador["nome"] = nome;
        prestador["PIS/PASEP"] = pispasep;
        prestador["Ganhos"] = parseFloat(valorHora);
        prestador["Horas"] = parseInt(trabHora);

        prestadores.push(prestador);

        
        if (contador < 1) {
            continuar = true;
        } else if (contador < 50) {
            continuar = confirm("Deseja continuar o cadastro?");
        } else {
            continuar = false;
        }

    } while (continuar);

    return prestadores;
}

function exibirPrestadores(listaPrestadores) {
    let mensagem = "";
    for (let i = 0; i < listaPrestadores.length; i++) {
        let emp = listaPrestadores[i];
        mensagem += `
            Nome: ${emp["nome"]} <br/>
            PIS/PASEP: ${emp["PIS/PASEP"]} <br/>
            Ganhos por hora: R$ ${emp["Ganhos"].toFixed(2)} <br/>
            Horas trabalhadas: ${emp["Horas"]} <br/>
            <br/><br/>
        `;
    }
    document.write(mensagem);
}

let lista = cadastroPrestadores();
exibirPrestadores(lista);

console.log(lista);