

export default function RequireAuth(props) {
    let token = localStorage.getItem("token");

    if (!token) {
       window.location.href = "/login";
        return null;
    }
      
    return props.children;
    
}