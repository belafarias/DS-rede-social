const url= 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function visualizarInformacoesGlobais(){ 
    const dados= await resizeBy.json()

    const pessoasConectadas= (dados.total_pessoas_conectadas/1e9)
    const pessoasNoMundo=(dados.total_pessoas_mundo/1e9)
    const horas=parselnt(dados.tempo_medio)
    const minutos= Math.round((dados.tempo_medio-horas)*100)
    const porcentagemConectada=((pessoasConectadas/ pesssoasNoMundo)*100).toFixed(2)
}

const paragrafo=document.createElement('p')
paragrafo.classList.add('graficos-container_texto')
paragrafo.innerHTML='Você sabia que o mundo tem <span>${pessoasNoMundo}
bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas}bilhões</span>e
<span>${minutos}minutos

