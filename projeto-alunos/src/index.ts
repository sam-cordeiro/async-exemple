import { AlunoManager } from './managers/AlunoManager'
import { promptMenuPrincipal, promptParaDetalhesDoAluno } from './utils/prompts';

async function main() {
    const alunoManager = new AlunoManager();

    let sair = false;

    while (!sair) {
        const opcao = await promptMenuPrincipal();

        switch (opcao) {
            case 'Adicionar Aluno':
                const novoAluno = await promptParaDetalhesDoAluno();
                alunoManager.adicionarAluno(novoAluno);
                break;

            case 'Listar Alunos':
                alunoManager.listarAlunos();
                break;

            case 'Sair':
                sair = true;
                console.log('Encerrando o programa. Até mais!');
                break;

            default:
                console.log('Opção inválida, tente novamente.');
        }
    }
}

main()