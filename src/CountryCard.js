import './CountryCard.css';

const CountryCard = ({cardData}) => {
    return ( 
    <div className="card">
        <img src={cardData.flags.png} alt={cardData.flags.alt} />
        <h4>{cardData.name.common}</h4>
    </div> );
}
 
export default CountryCard;