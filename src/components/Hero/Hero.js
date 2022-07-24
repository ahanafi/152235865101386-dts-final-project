import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import styled from 'styled-components';
import bgHero from '../../assets/img/bg-hero.jpg';

const StyledDiv = styled.div`
    background-image: url(${bgHero});
    background-size: cover;
    background-position: center;
    color: #fff;
`;

const Hero = () => {
    return (
        <>
            <StyledDiv className='px-4 py-5 mt-0 mb-5 text-center'>
                <Logo width='220px' fill='white' />
                <div className='col-lg-6 mx-auto my-5'>
                    <SearchBar />
                </div>
            </StyledDiv>
        </>
    );
}

export default Hero;