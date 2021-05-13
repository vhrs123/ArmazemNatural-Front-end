import { Categoria } from "./Categoria"

export class Produto {
    public id: number
    public nome: string
    public descricao: string
    public preco: number
    public marca: string
    public qtdEstoque: number
    public imagem: string
    public peso: number
    public ativo: boolean
    public categoria: Categoria
}