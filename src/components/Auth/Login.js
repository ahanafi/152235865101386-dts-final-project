import { useEffect, useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import QuranLogo from '../../assets/img/quran.png';
import { changeBodyBackground } from '../../utils/bodyChanger';
import './Login.css';
import { useAuth } from '../../context/AuthContext';

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

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    useEffect(() => {
      changeBodyBackground();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
            console.log(error.message);
            setLoading(false);
        }   
    }

    return (
        <StyledForm onSubmit={handleSubmit} className='form-signin text-center'>
            <img className='mb-4' src={QuranLogo} alt='' width='72' height='57'/>
            <h1 className='h3 mb-3 fw-normal text-light'>Please sign in</h1>

            {error && <Alert variant="danger">{error}</Alert>}

            <div className='form-floating'>
                <Form.Control type='email' name='email' id='floatingInput' placeholder='email' />
                <StyledLabel htmlFor='floatingInput'>Email address</StyledLabel>
            </div>
            <div className='form-floating'>
                <Form.Control style={{ borderTopLeftRadius:"0", borderTopRightRadius:"0", }} type='password' name='password' className='form-control' id='floatingPassword' placeholder='Password' />
                <StyledLabel htmlFor='floatingPassword'>Password</StyledLabel>
            </div>

            <div className='mb-3 text-left mt-2'>
                <label className='text-light'>
                    Don't have account? Register <Link to='/register'>Here</Link>
                </label>
            </div>
            <button disabled={loading}  className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
            <p className='mt-5 mb-3 text-light'>&copy; {new Date().getFullYear()}</p>
        </StyledForm>
    );
}

export default Login;