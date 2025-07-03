import inquirer from 'inquirer';
import { IAluno } from '../interface/IAluno';

export async function promptParaDetalhesDoAluno(): Promise<IAluno> {
    const respostas = await inquirer.prompt([
        {
            type: 'input',
            name: 'matricula',
            message: 'Digite a matrícula do aluno:',
            validate: (input: string) =>
                input?.trim() !== '' ? true : 'A matrícula não pode ser vazia.',
        },
        {
            type: 'input',
            name: 'nome',
            message: 'Digite o nome do aluno:',
            validate: (input: string) =>
                input?.trim() !== '' ? true : 'O nome não pode ser vazio.',
        },
        {
            type: 'input',
            name: 'idade',
            message: 'Digite a idade do aluno:',
            validate: (input: string) => {
                const numero = Number(input);
                if (isNaN(numero) || numero <= 0) {
                    return 'A idade deve ser um número positivo.';
                }
                return true;
            },
            filter: (input: string) => Number(input),
        }
    ]);

    return {
        matricula: respostas.matricula.trim(),
        nome: respostas.nome.trim(),
        idade: respostas.idade,
    };
}

export async function promptMenuPrincipal(): Promise<string> {
    const resposta = await inquirer.prompt([
        {
            type: 'list',
            name: 'opcao',
            message: 'Escolha uma opção:',
            choices: ['Adicionar Aluno', 'Listar Alunos', 'Sair'],
        }
    ]);

    return resposta.opcao;
}