import { products } from "./productlist"
import { Link } from "react-router-dom";
export default function Products() {
    return (
        <div>
            <h1>Products</h1>

            <div className="list-group m-5">
                {products.map((product,index) => 
                    <Link key={product.id} 
            to ={"/products/details/" + product.id + (index %2 == 0 ? "/10" : "")}
            className="list-group-item text-start">
                {product.Name}
                        </Link>)
                }
            </div>
        </div>
    )
}