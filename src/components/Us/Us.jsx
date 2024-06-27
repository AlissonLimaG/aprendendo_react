import { useState } from 'react';
import './Us.css'
import Cards from './Cards/Cards';
import Cards2 from './Cards/Cards2';

export default function Us(){
    let arr = [1,2,3,4];

    let [page,setPage] = useState(1)
    const mudarPag = ()=>{
        if(page == 1){
            setPage(2)
        }else{
            setPage(1)
        }
    }

    let [count,setCount] = useState(0)
    const incrementar = ()=>{
        setCount(count+1)
    }

    return (
        <>
            <section className='secao'>

            {arr.map((key)=>{//Mapeia o array no começo da função e renderiza 4 componentes Cards dependendo da página!
                if(page === 1){
                    return <Cards key={key} incrementador={incrementar} contador={count}/>
                }
                else if(page === 2){
                    return <Cards2 key={key}/>
                }
            })};

            </section>
            <div className='containerInfo'>
            <div className='info'>
                    {page === 1 && //condição atendida se a pagina for 1, a tag <p> já é true por padrão!
                        <p>
                            Essa página trata da utilização do useState() para manipular
                            o estado de todos os componentes Cards, ao modificar
                            e armazenar o estado no componente pai(seção que engloba os cartões)
                            e passá-lo para os filhos(cada cartão),
                            todos renderizam o novo estado igualmente ao clicar, se o estado fosse manipulado
                            e armazenado no componente filho, cada um deles teriam estados individuais como na próxima
                            página!
                        </p>
                    }

                    {page === 2 && //condição atendida se a pagina for 2, <p> já retorna True por padrão!
                        <p>
                            Aqui o estado é armazenado no próprio componente Card, sendo assim,
                            cada um componente tem estados individuais
                        </p>
                    }

            </div>
            <button className='botao' onClick={mudarPag}>&#8680;</button>
            </div>
        </>
    );
}