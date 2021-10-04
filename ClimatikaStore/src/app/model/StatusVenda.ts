import { Produto } from "./Produto"
import { Usuario } from "./Usuario"

export class StatusVenda{
    public id: number
    public status: string
    public idUsuario: Usuario
    public listaProduto: Produto[]
}