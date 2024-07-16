import Conta from "../types/Conta.js"
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes")

renderizarExtrato();
function renderizarExtrato(): void {
    const grupoTransacoes: GrupoTransacao[] = Conta.getGrupoTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let gruposTransacao of grupoTransacoes) {
        let htmlTransacaoItem: string = "";
        for (let transacao of gruposTransacao.transacoes) {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `;
        }

        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${gruposTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `;
    }

    if (htmlRegistroTransacoes === "" ) {
        htmlRegistroTransacoes = "<div> Não há transações registradas.</div>"
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}