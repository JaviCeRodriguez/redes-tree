import { StyledEmbed } from './index.styled'

const Embed = ({ title, href, image }) => {
    return(
        <StyledEmbed className="embed">
            <a href={href}><h3>{title}</h3></a>
            <img src={image} alt={title} />
        </StyledEmbed>
    )
}

export default Embed;