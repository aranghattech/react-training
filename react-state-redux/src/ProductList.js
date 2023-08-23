import { useSelector } from "react-redux";

export default function ProductList() {

    let p = useSelector(state => state.productsState);

    return (
        <ul className="list-group">
            {p?.products.map(product => (
                <li className="list-group-item">
                   <div className="row">
                    <div className="col">
                    {product.name} - {product.price}
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary">Add to Cart</button>
                    </div>
                   </div>
                </li>
            ))}
        </ul>
    )
}