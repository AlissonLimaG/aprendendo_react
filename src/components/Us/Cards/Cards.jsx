import './Cards.css';

export default function Cards({incrementador, contador}){

    return(
        <div className='card' onClick={incrementador}>
            <p>{contador}</p>
        </div>
    );
}