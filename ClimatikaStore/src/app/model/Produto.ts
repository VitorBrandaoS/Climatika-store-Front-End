import { StatusVenda } from "./StatusVenda"

export class Produto{
    public codigo: number
    public nomeProduto: string
    public marca: string
    public preco: number
    public quant: number
    public categoriaMae: string
    public categoriaFilha: string
    public foto: string
    public descricao: string
    public listaStatusVenda: StatusVenda[]
}