import React, {Component} from 'react';

function HidePriceDeatil(props){
    const classes = props.classes;
    const price = props.price;
    return 
    <div className={classes.cardDetails}>
        <div className={classes.priceTitle}>
            {price.title}
        </div>
        <div className={classes.price}>
            {this.state.priceZoom.state && price.title==this.state.priceZoom.title? price.price: null}
        </div>
  </div>;
}

export default HidePriceDeatil;