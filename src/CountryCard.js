import './CountryCard.css';

const CountryCard = ({cardData}) => {
    return ( 
    <div className="countryCard">
        <img src={cardData.flags.png} alt={cardData.flags.alt} />
        <p>{cardData.name.common}</p>
    </div> );
}
 
export default CountryCard;