import './miniCards.css'

export default function MiniCards({nome,src,desc}){
    return(
        <div className='miniCard'>
            <div className='miniImage' style={{backgroundImage:`url(${src})`}}>
            </div>
            <p className='cardTxt'>{desc}</p>
        </div>
    )
}
