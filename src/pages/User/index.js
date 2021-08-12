import { useParams } from "react-router-dom";

const User = () => {
    const { user } = useParams();
    // TODO: Agregar verificación de usuario, si existe que muestre la página, sino que rediriga a NotFound
    return(
        <div>
            <h1>User: {user}</h1>
        </div>
    );
}

export default User;