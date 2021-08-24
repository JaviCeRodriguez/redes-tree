import { StyledPerfil } from './index.styled'
import {useUser} from "../../session/hooks"
import LoginBtn from '../LoginBtn';

const Perfil = ({ name, title, email, image }) => {
    const user = useUser();

    return(
        <StyledPerfil>
            <img src={image} alt={name} />
            <div className="info-user">
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>Contact: <a href={`mailto:${email}`} alt="Enviar mensaje...">{email}</a></p>
                {user ? <p>Bienvenido {user.displayName}!</p> : null}
                {!user ? <LoginBtn text="Login" /> : <LoginBtn text="Logout" />}
            </div>
        </StyledPerfil>
    )
}

export default Perfil