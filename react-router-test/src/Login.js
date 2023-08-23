import { useNavigate } from "react-router-dom";

export default function Login(){

    let navigation = useNavigate();

    return (
        <div>
            <button type="button" onClick={() => {
                
  localStorage.setItem("token","abcd");
  navigation("/");
            }}>Login</button>
        </div>
        )
}