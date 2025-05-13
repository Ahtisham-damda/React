import { useState } from "react";

function ProductList() {
    const Products =[
        {
            id : 1,
            name : "Iphone 14 Pro Max",
            price : 69000,
            image : "https://m.media-amazon.com/images/I/31qeR3U2bdL._SS520_.jpg",
            description : "The iPhone 14 Pro Max is a smartphone that was tested with the iOS 16.0 operating system. This model weighs 8.47 ounces, has a 6.7 inch display, 48-megapixel main camera, 12-megapixel selfie camera, and the Apple A16 Bionic chip.",
        },

        {
            id : 2,
            name : "Mercedes Benz",
            price : 12000000,
            image : "https://media.assettype.com/evoindia/2024-09-10/1aed7agk/075A7825%20copy.jpg",
            description : "Mercedes-Benz is a German luxury automotive brand and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks.",
        },

        {
            id : 3,
            name : "Lenovo ThinkPad",
            price : 45000,
            image : "https://p3-ofp.static.pub//fes/cms/2024/03/20/wqicx6bgm6chugxvfzcq30qtidxcwu809332.png",
            description : "The Lenovo ThinkPad is a line of business-oriented laptop computers and tablets designed, developed, marketed, and sold by Lenovo.",
        },

        {
            id : 4,
            name : "Samsung Galaxy S22",
            price : 80000,
            image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcSkKu30mFSSf6OrLFHnBy1gruJC2Um7bbQ&s",
            description : "The Samsung Galaxy S22 is a smartphone that was tested with the Android 12 operating system. This model weighs 6.06 ounces, has a 6.1 inch display, 50-megapixel main camera, 10-megapixel selfie camera, and the Qualcomm Snapdragon 8 Gen 1 chip.",
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(-1);

    return (
        <>
        <h2 className="small text-primary">Product List </h2>
<ul className="list-group">
    {
        Products.map((product,index) => (
              <li className={selectedProduct == index ? "list-group-item active" : "list-group-item"} 
              key={product.id} onClick={() => setSelectedProduct(index)}>
                {product.name} - {product.price}
                <br />
                <img src={product.image} alt={product.name} style={{width: "100px", height: "100px"}}/>
                <br />
                <span className="small text-danger">{product.description}</span>
                <br />
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-danger">Remove</button>
              </li>

        ))
    }
</ul>        </>
    )
}

export default ProductList;