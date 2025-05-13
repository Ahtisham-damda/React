function ProductInfo(){
    const Product = {
        name: "Xiaomi Mi A Series 108 cm (43 inch) Full HD LED Smart Google TV",
        Rating: "4.3",
        Price: "₹ 29,999",
        PriceDiscount: "₹ 24,999",
        Features:"Mi by Xiaomi A Series 108 cm (43 inch) Full HD LED Smart Google TV with 200+ Free Channels | Dolby Audio | DTS : HD | DTS Virtual : X | Vivid Picture Engine| Dual Band Wi-Fi| Bluetooth 5.0",
        image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/television/7/l/f/-original-imaha7fgfuanw9ga.jpeg?q=20&crop=false",
    }
    return(
<div className="card  " style={{width: "18rem"}}>
  <img src={Product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Product.name}</h5>
     <p className="card-text">{Product.Rating}</p>
          <p className="card-text">{Product.Price}</p>
     <p className="card-text">{Product.PriceDiscount}</p>

    <p className="card-text">{Product.Features}</p>
    <a href="https://ahtisham-damda.github.io/fla/" className="btn btn-primary">Vist My Showcase</a>
  </div>
</div>    )
}

export default ProductInfo;

