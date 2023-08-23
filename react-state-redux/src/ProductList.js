import { useSelector } from "react-redux";

export default function ProductList() {

    let p = useSelector(state => state.productsState);

    return (
        <ul className="list-group">
            {p?.products.map(product => (
                <li className="list-group-item">
                    {product.name} - {product.price}
                </li>
            ))}
        </ul>
    )
}