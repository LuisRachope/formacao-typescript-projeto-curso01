
// Tipos Primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
let qualq: unknown = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

// Tipos Personalizados (Type Alias)
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor: 0
}