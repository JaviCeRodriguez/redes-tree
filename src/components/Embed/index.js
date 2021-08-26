import { StyledEmbed } from './index.styled'

const Embed = ({ title, href, image }) => {
    return(
        <a href={href} target="_blank" rel="noreferrer">
            <StyledEmbed>
                <h3>{title}</h3>
                <img src={image} alt={title} />
            </StyledEmbed>
        </a>
    )
}

export default Embed;