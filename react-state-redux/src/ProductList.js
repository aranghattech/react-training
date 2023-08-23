import { useSelector,useDispatch } from "react-redux";
import { addToCart,clearCart } from "./data/cart";

export default function ProductList() {

    let p        = useSelector(state => state.productsState);
    let dispatch = useDispatch();

    return (
        <ul className="list-group">
            {p?.products.map(product => (
                <li className="list-group-item">
                   <div className="row">
                    <div className="col">
                    {product.name} - {product.price}
                    </div>
                    <div className="col-auto">
                        <button type="button" 
                        onClick={() => dispatch(addToCart(product))}
                                className="btn btn-primary">Add to Cart</button>
                    </div>
                   </div>
                </li>
            ))}
            <li className="list-group-item">
                        <button type="button" onClick={() => dispatch(clearCart())}>
                            Clear Cart
                        </button>
            </li>
        </ul>
    )
}