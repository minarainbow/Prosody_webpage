function ShowPriceDeatil(props){
    return 
    <div className={classes.cardDetails}>
        <div className={classes.priceTitle}>
            {price.title}
        </div>
        <div className={classes.price}>
            {this.state.priceZoom.state && price.title==this.state.priceZoom.title? price.price: null}
        </div>
        <div className={classes.desktopDescription}>
            {price.description}
        </div>
  </div>;
}

export default ShowPriceDeatil;