import './styles.css'
import carImg from '../../assets/car.png'


export default function Card() {
    return (
        <div className='ct-card'>
            <img src={carImg} alt="Carro" />
            <h3>Audi Supra TT</h3>          
        </div>
    )
}
