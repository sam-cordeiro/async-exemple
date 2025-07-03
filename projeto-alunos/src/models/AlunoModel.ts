import { IAluno } from "../interface/IAluno";

export class Aluno implements IAluno{
    matricula: string;
    nome: string;
    idade: number;

    constructor(matricula: string, nome: string, idade: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.idade = idade;
    }

    exibirDetalhes(){
        console.log('------Dados do Aluno------')
        console.log(` - Matrícula: ${this.matricula}\n - Nome: ${this.nome}\n - Idade: ${this.idade}`)
    }   
}