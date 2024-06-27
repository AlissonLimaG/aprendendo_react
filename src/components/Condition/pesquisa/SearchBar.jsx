import './SearchBar.css'

export default function SearchBar({searchFunc, typeFunc}) {

    return (
        <div className='searchContainer'>
            <input type="text" className='searchInput' placeholder='Pesquisar' onChange={searchFunc}/>
            <div className='divCheckbox'>
                <input type="checkbox" name="L" id='L' value = 'linguagem' className='checkFilter' onChange={typeFunc}/>
                <label htmlFor="L">Linguagens </label>
                <input type="checkbox" name="DB" id='DB' value = 'BD' className='checkFilter' onChange={typeFunc}/>
                <label htmlFor="DB">Bancos de dados</label>
            </div>
        </div>
    );
}