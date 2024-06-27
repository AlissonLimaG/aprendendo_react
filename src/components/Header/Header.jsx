import './Header.css'

export default function Header({mudarPagina}){

    const mudar = (evt)=>{
        mudarPagina(evt)
    }

    return(
        <header className='header'>
            <img src="vite.svg" alt="" />
            <h1 className='title'>Iniciando React</h1>
            <select name="pages" id="paginas" onChange={mudar}>
                <option value="1" className='options'>UseState</option>
                <option value="2" className='options'>Condition</option>
                <option value="3" className='options'>Teste 2</option>
            </select>
        </header>
    )
}