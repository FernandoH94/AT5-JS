/* Houve um vestibular para ingresso de alunos na instituição baseado em 5 matérias: Natureza,
Humanas, Linguagens, Matemática e Redação com notas de 0 a 1000. Precisa-se de um sistema que cadastre o
nome completo, número de inscrição, ano de nascimento e as matérias com as notas dos 
vestibulandos de 5 até 20 pessoas.

A mensagem "Aprovado", nas matérias acima de 550;
A mensagem "Reprovado", nas matérias abaixo de 400;
A mensagem "Recuperação", nas matérias entre 401 e 549.

Exiba todos os dados cadastrados e os seus resultados na página HTML.

Todos os campos devem ser válidos e cumprir os requisitos mínimos de validação.
Os anos de nascimento ficam entre 1901 e 2007.
Número de Inscrição tem 10 digitos sendo que deve começar com 2024XXXXX.
*/

function cadastroAlunos() {

    let continuar = true;
    let contador = 0;
    let alunos = [];

    do {
        let aluno = prompt("Informe o nome do aluno:");
        aluno = aluno.trim();
        while (isNaN(aluno) === false || aluno.indexOf(" ") < 2) {
            aluno = prompt("Informe o nome novamente!");
        }

        let inscricao = prompt("Informe o número de inscrição:");
        while (isNaN(inscricao) === true || !inscricao.startsWith("2024") || !/^\d{11}$/.test(inscricao)) {
            inscricao = prompt("Informe um número de inscrição válido, iniciado com 2024!");
        }
        
        let nascimento = prompt("Informe a data de nascimento:");
        while (nascimento.length !== 4 || isNaN(nascimento) === true || (parseInt(nascimento) < 1901 || parseInt(nascimento) > 2007)) {
            nascimento = prompt("Informe uma data válida (quatro dígitos).");
        }
        
        let n1, n2, n3, n4, n5;
        n1 = prompt("Digite a nota da matéria de Natureza:");
        while (isNaN(n1) === true) { 
            n1 = prompt("Informe uma nota válida.");
        }

        n2 = prompt("Digite a nota da matéria de Humanas:");
        while (isNaN(n2) === true) { 
            n2 = prompt("Informe uma nota válida.");
        }

        n3 = prompt("Digite a nota da matéria de Matemática:");
        while (isNaN(n3) === true) { 
            n3 = prompt("Informe uma nota válida.");
        }

        n4 = prompt("Digite a nota da matéria de Linguagens:");
        while (isNaN(n4) === true) { 
            n4 = prompt("Informe uma nota válida.");
        }

        n5 = prompt("Digite a nota da matéria de Redação:");
        while (isNaN(n5) === true) { 
            n5 = prompt("Informe uma nota válida.");
        }

        
        let vestibulando = {}; 
        vestibulando["nome"] = aluno; 
        vestibulando["nascimento"] = parseInt(nascimento); 
        vestibulando["n1"] = parseFloat(n1); 
        vestibulando["n2"] = parseFloat(n2);
        vestibulando["n3"] = parseFloat(n3);
        vestibulando["n4"] = parseFloat(n4);
        vestibulando["n5"] = parseFloat(n5);

        alunos.push(vestibulando);

        contador++;

        if (contador < 5)
            continuar = true;
        else if (contador >= 5 && contador < 100)
            continuar = confirm("Deseja continuar o cadastro?");
        else
            continuar = false;

    } while (continuar === true);

    return alunos;

}

cadastroAlunos();


