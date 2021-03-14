import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
function Listing({data}) {
  
    return (
<div className="item-list">
  {data.map((item)=> 
  
   <div className="item" key={item.listing_id}>
    <div className="item-image">
      <a href={item.url}>
        <img src={!item.MainImage ? logo : item.MainImage.url_570xN } alt='etsystatic' />
      
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{
      !item.title  ? 'Неопознанный текст' : 
      item.title.length > 50  ?  `${item.title.slice(0, 50)}${'...'}`:
      
      item.title}
       </p>
       
      <p className="item-price">{
       item.currency_code === 'USD' ? `$${item.price}` :
       item.currency_code === 'EUR' ? `€${item.price}`:
       item.currency_code === 'GBP' ? `${item.price} GBP`:
       'изучайте лучше React' }</p>
      <p className={
        item.quantity  < 10 ? 'level-low item-quantity' :
        item.quantity > 10 && item.quantity < 20 ? 'level-medium item-quantity' :
          'level-high item-quantity'
      }>{item.quantity || "---"}</p>

      {console.log(item.quantity)}
</div>
  </div>
  )}      
</div>
    )}
export default Listing
Listing.defaultProps= {
   title: 'Неопознанный текст',
   img: "https://i.etsystatic.com/9914588/r/il/3ef12d/1433446966/il_570xN.1433446966_8n58.jpg",
};
Listing.propTypes = {
   title: PropTypes.string,
   img: PropTypes.string,
}




