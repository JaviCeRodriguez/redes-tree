import { useUser } from "../../session/hooks"
import { StyledHome } from "./index.styled"
import LoginBtn from "../../components/LoginBtn";
import { Link } from "react-router-dom";

const Home = () => {
	const user = useUser();
	// TODO: Usar Link de react-router-dom
	return(
		<StyledHome>
			<nav>
				<div className="nav-links">
					<Link to="/" className="logo">
						🔗
					</Link>
					<ul>
						<li><Link to="/">Random</Link></li>
						<li><Link to="/">Search</Link></li>
						<li><Link to="/">About</Link></li>
					</ul>
				</div>
				<div className="nav-login">
					<ul><li><Link to="/user/naruto">Mi Perfil</Link></li></ul>
					{!user ? <LoginBtn text="Login" /> : <LoginBtn text="Logout" />}
				</div>
			</nav>
			<main>
				<div className='slogan'>
					<h2>Todas tus redes, en un solo lugar</h2>
					<h3>No pierdas tus conexiones!</h3>
				</div>
			</main>
		</StyledHome>
	);
}

export default Home;