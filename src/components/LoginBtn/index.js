import { StyledLoginBtn } from './index.styled'
import auth from '../../session/api'

const LoginBtn = ({ text }) => {
    if (text === 'Login'){
        return(<StyledLoginBtn onClick={auth.signIn}>{text}</StyledLoginBtn>)
    } else {
        return(<StyledLoginBtn onClick={auth.signOut}>{text}</StyledLoginBtn>)
    }
}

export default LoginBtn