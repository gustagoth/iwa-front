import "./ProductScreen.css";
import { usestate, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({match, history}) => {

//const [qty, setQty] = useState(1);
const dispatch = useDispatch();

const productDetails = useSelector(state => state.getProductDetails);

  return (
    <div className="productscreen">
      Product Screen
      <div className="productscreen__left">
        <div className="left__image">
          <img src="https://i.imgur.com/ty8PMv1.png" alt="product name" />
        </div>

        <div className="left__info">
          <p className="left__name">IWA DOLL BLACK T-SHIRT</p>
          <p>Price: $2000</p>
          <p>
            Description: Remera negra sin genero. Cálidad premium. Confeccionada
            en algodón con diseño exclusivo imaginado y realizado por IWA.
          </p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>
            Price: <span>$2000</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Quantity:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
