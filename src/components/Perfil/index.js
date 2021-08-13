import { StyledPerfil } from './index.styled'

const Perfil = ({ name, title, email, image }) => {
    return(
        <StyledPerfil>
            <img src={image} alt={name} />
            <div className="info-user">
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>Contact: {email}</p>
            </div>
        </StyledPerfil>
    )
}

export default Perfil