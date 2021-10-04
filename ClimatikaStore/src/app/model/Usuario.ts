import { StatusVenda } from "./StatusVenda"

export class Usuario{
    public id: number
    public cpf: string
    public nomeCompleto: string
    public email: string
    public senha: string
    public celular: string
    public endereco: string
    public cidade: string
    public estado: string
    public userStatusVenda: StatusVenda[]
}