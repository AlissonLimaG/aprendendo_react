import './Condition.css'
import { useState } from 'react';
import SearchBar from './pesquisa/SearchBar';
import { info } from './miniCards/info';
import MiniCards from './miniCards/MiniCards';

export default function Condition() {
    let [name,setName] = useState('')
    let [type,setType] = useState([])


    //função para pegar o valor do input cada vez que ele mudar e alterar o estado do 'name'.(enviada por props para o componente <SearchBar/>)
    const search = (evt)=>{
        let pesquisa = evt.target.value
        setName(pesquisa)
    }


    //função para pegar o valor do input checkbox cada vez que ele mudar e alterar o estado do 'type'.(enviada por props para o componente <SearchBar/>)
    const typeFilter = (evt) =>{
        const nType = evt.target.value

        if(!type.includes(nType)){//se no estado não estiver incluido o valor do input, ele atualiza o estado com o novo valor preservando o valor anterior
            setType([...type,nType])
        }else{
            setType(type.filter(item => item != nType))//se contiver o valor armazenado em nType, ele retorna uma lista com todos o valores que não são iguais a 'nType'
        }
        console.log(type)
    }


    //filtrando os componentes, primeiro baseado no nome da tecnologia, a partir do estado 'name' no topo do documento
    let listFilter = info.filter(tecsFilter =>
        tecsFilter.nome.toLowerCase().includes(name.toLowerCase())
    )
    //filtrando os componentes baseado no tipo da tecnologia(se houver), a partir do estado 'type'
    if(type.length > 0){
        listFilter = listFilter.filter(elems => type.includes(elems.tipo))
    }


    //mapeando e armazenando lista de objetos filtrada para depois renderizá-la
    const listTec = listFilter.map(tecs => (
        <MiniCards key={tecs.id} nome={tecs.nome} src={tecs.caminho} desc={tecs.descricao} />
    ))


    //renderizando a lista final
    return (
        <div className='containerCdt'>
            <SearchBar searchFunc={search} typeFunc={typeFilter}/>
            <div className='containerList'>{listTec}</div>
        </div>
    )
}