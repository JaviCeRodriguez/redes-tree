import {useUser} from "../../session/hooks"
import LoginBtn from "../../components/LoginBtn";

const Home = () => {
    const user = useUser();

    return(
        <div>
            <h1>Home</h1>
            {user ? <p>Bienvenido: {user.displayName} - {user.email}</p> : null}
            {!user ? <LoginBtn text="Login" /> : <LoginBtn text="Logout" />}
        </div>
    );
}

export default Home;