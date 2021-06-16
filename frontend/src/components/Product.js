import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className="product">
      <Link to={`/product/${productId}`} params={productId} className="product__link">
        
        <img 
        src={imageUrl}
        alt={name} 
        />

        <div className="product__info">
          <p className="info__name">{name}</p>

          <p className="info__name">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
