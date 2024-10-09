
import { getCSS } from "./common.js";
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        //inicio aula 07
        const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) * 100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)
        // fim aula 07

        //console.log(dados);

        //inicio aula 05
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas <br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.` // template string

        const container = document.getElementById('graficos-container')
        container.appendChild(paragrafo)
        // fim aula 05 exibindo os dados iniciais
    }

    visualizarInformacoesGlobais()

    /*Aula 04 */
    async function quantidadeUsuarios() {
        const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero-usuarios.json'
        const res = await fetch(url)
        const dados = await res.json()
        const nomeDasRedes = Object.keys(dados)
        const quantidadeUsuarios = Object.values(dados)

      const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data)
    
const data = [
  {
    x: 'nomeDasRedes',
    y: quantidadeDeUsuarios,
    type: 'bar',
    marker: {
      color: getCSS('--primary-color')
    }
  }
]

