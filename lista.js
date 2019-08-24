const url = 'https://dados.ifpb.edu.br/dataset/e99b5cfd-f2f3-4b54-bb4f-6ddd9e480af7/resource/f81de6aa-afde-4cdb-bee0-a9ed2f87c4c3/download/projetos-pesquisa.json'
const axios=require('axios')
const foco_tecnologico = f => f.foco_tecnologico === '8. Desenvolvimento Regional'
const area = a => a.area_conhecimento === 'AGRONOMIA'


axios.get(url).then(
    resposta => {
        const projeto= resposta.data
        module.exports.resultado_pesquisa = projeto.filter(foco_tecnologico).filter(area)
    }
    )
