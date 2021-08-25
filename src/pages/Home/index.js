import { useUser } from "../../session/hooks"
import { StyledHome } from "./index.styled"
import LoginBtn from "../../components/LoginBtn";

const Home = () => {
	const user = useUser();
	// TODO: Usar Link de react-router-dom
	return(
		<StyledHome>
			<nav>
				<div className="nav-links">
					<a href="http://localhost:3000/" alt="" className="logo">
						🔗
					</a>
					<ul>
						<li><a href="http://localhost:3000/" alt="">Random</a></li>
						<li><a href="http://localhost:3000/" alt="">Search</a></li>
						<li><a href="http://localhost:3000/" alt="">About</a></li>
					</ul>
				</div>
				<div className="nav-login">
					<ul><li><a href="http://localhost:3000/user/naruto" alt="">Mi Perfil</a></li></ul>
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