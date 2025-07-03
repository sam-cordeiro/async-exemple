import { IAluno } from "../interface/IAluno";
import { Aluno } from "../models/AlunoModel";
import fs, { readFileSync } from "fs";

export class AlunoManager{
    private alunos:IAluno[] = []

    public adicionarAluno(novoAluno: IAluno): void {
        const dbFile: string = `src/database/database.json`;
    
        const dadosJson = JSON.parse(readFileSync(dbFile, "utf-8"));
        const alunos: IAluno[] = dadosJson.alunos || [];
    
        const alunoMatricula = alunos.find(
            (aluno) => aluno.matricula === novoAluno.matricula
        );
    
        if (alunoMatricula) {
            console.log(`Erro! O aluno com a matrícula '${novoAluno.matricula}' já está cadastrado!`);
            return;
        }
    
        alunos.push(novoAluno);
        console.log(`Aluno ${novoAluno.nome} adicionado com sucesso.`);
    
        const novoConteudo = {
            ...dadosJson,
            alunos: alunos,
        };
    
        fs.writeFileSync(dbFile, JSON.stringify(novoConteudo, null, 4), "utf-8");
    }

    public listarAlunos():void{
        const dbFile: string = `src/database/database.json`;
        const fileContent = fs.readFileSync(dbFile, 'utf-8');
        const alunosDoArquivo: IAluno[] = JSON.parse(fileContent);

        if (alunosDoArquivo.length === 0) {
            console.log('Nenhum aluno cadastrado no arquivo!');
            return;
        }
        alunosDoArquivo.forEach((dadosAluno) => {
            const aluno = new Aluno(dadosAluno.matricula, dadosAluno.nome, dadosAluno.idade);
            aluno.exibirDetalhes();
        });
    }
}