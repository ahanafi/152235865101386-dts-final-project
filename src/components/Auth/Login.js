import { Form } from "react-bootstrap";
import styled from 'styled-components';
import QuranLogo from '../../assets/img/quran.png';
import './Login.css';

const StyledForm = styled.form`
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 7% auto;
`;

const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    padding: 1rem 0.75rem;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity .1s ease-in-out,transform .1s ease-in-out;
`;

const Login = () => {
    return (
        <StyledForm className="form-signin text-center">
            <img className="mb-4" src={QuranLogo} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <Form.Control type="email" id="floatingInput" placeholder="email" />
                <StyledLabel htmlFor="floatingInput">Email address</StyledLabel>
            </div>
            <div className="form-floating">
                <Form.Control type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <StyledLabel htmlFor="floatingPassword">Password</StyledLabel>
            </div>

            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; {new Date().getFullYear()}</p>
        </StyledForm>
    );
}

export default Login;