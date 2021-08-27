import { useParams } from "react-router-dom";
import Perfil from "../../components/Perfil";
import Embed from "../../components/Embed";
import { StyledUser } from "./index.styled";
import users from "../../fakeDB.json";

const User = () => {
  const { user } = useParams();
  let userData = users.filter((u) => u.user === user);
  if (!userData[0]) {
    return <div>User not found</div>;
  } else {
    const { name, title, email, image, links } = userData[0];
    return (
      <StyledUser>
        <Perfil name={name} title={title} email={email} image={image} />
        <div className="container-embed">
          {links.map((link, key) => {
            return (
              <Embed
                key={key}
                title={link.title}
                href={link.href}
                image={link.image}
              />
            );
          })}
        </div>
      </StyledUser>
    );
  }
};

export default User;
