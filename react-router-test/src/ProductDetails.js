import { useParams } from "react-router-dom"
import { products } from "./productlist"

export default function ProductDetails() {
 
    let {id,discount} = useParams();
    let product = products
                .find((product) => product.id
             === parseInt(id));

    return (
        <div>
            <h1>Product Details</h1>
            <h1>{product.Name}</h1>
            <h5>{product.Price}</h5>
            <h5>{product.Brand}</h5>
            { discount 
            && 
            <h5 className="alert alert-warning">{discount} % off</h5> }

        </div>
    )
}