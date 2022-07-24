import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import QuranLogo from '../../assets/img/quran.png';
import './Login.css';
import { useAuth } from '../../context/AuthContext';
import bgHero from '../../assets/img/bg-hero.jpg';

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

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();

    useEffect(() => {
        document.body.style.background = `linear-gradient(rgb(65, 81, 119, 8.9),rgb(29, 93, 110, 0.7)), url(${bgHero}) no-repeat fixed center center`;
        document.body.style.height = '85vh';
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const confirmPassword = data.get('password_confirmation');

        if(password !== confirmPassword ) {
            return setError(`Password doesn't match!`);
        }

        try {
            setError('');
            setLoading(true);
            await register(email, password);
            navigate('/');
        } catch (error) {
            setError(`Register error : ${error}`);
        }

    }
    
    return (
        <StyledForm onSubmit={handleSubmit} className='form-signin text-center'>
            <img className='mb-4' src={QuranLogo} alt='' width='72' height='57'/>
            <h1 className='h3 mb-3 fw-normal text-light'>Register new Account</h1>
            
            {error && <Alert variant="danger">{error}</Alert>}
            
            <div className='form-floating'>
                <Form.Control name='email' type='email' id='floatingInput' placeholder='email' />
                <StyledLabel htmlFor='floatingInput'>Email address</StyledLabel>
            </div>

            <div className='form-floating'>
                <Form.Control name='password' type='password' className='form-control' id='floatingPassword' placeholder='Password' />
                <StyledLabel htmlFor='floatingPassword'>Password</StyledLabel>
            </div>

            <div className='form-floating'>
                <Form.Control name='password_confirmation' type='password' className='form-control' id='floatingConfirmPassword' placeholder='Retype Password' />
                <StyledLabel htmlFor='floatingConfirmPassword'>Confirm Password</StyledLabel>
            </div>

            <div className='checkbox mb-3'>
                <label className='text-light'>
                    Already have account? Login <Link to='/login'>Here</Link>
                </label>
            </div>
            <button disabled={loading} className='w-100 btn btn-lg btn-primary' type='submit'>Register</button>
            <p className='mt-5 mb-3 text-light'>&copy; {new Date().getFullYear()}</p>
        </StyledForm>
    );
}

export default Register;