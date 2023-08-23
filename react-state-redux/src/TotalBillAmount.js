import { useSelector } from "react-redux"

export default function TotalBillAmount() {

    let c = useSelector(state => state.cartState);

    return (
        <div className="card m-5">
            <h1>Total Bill Amount : { c.totalCartValue}</h1>
        </div>
    )
}