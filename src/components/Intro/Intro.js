import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import bgHero from '../../assets/img/bg-hero.jpg';

const StyledDiv = styled.div`
    background: linear-gradient(rgb(65, 81, 119, 8.9),rgb(29, 93, 110, 0.7)), url(${bgHero}) fixed center center;
    color: #fff;
    text-align: center;
`;

const ArabicSurahName = styled.h3`
    font-family: 'Amiri', serif;
	font-weight: bold;
	font-size:3rem;
    padding:2rem 3rem 1rem 3rem;
`;

const LatinSurahName = styled.h5`
    font-size: 1.4rem;
    font-weight: 600;
`;

const TextIntro = styled.p`
    margin-top:10px;
    font-size: 1.2rem;
    font-weight: 400;
`;

const Intro = ({ surah }) => {
    return (
        <>
            <StyledDiv className='px-4 py-5 mt-0 mb-5'>
                <ArabicSurahName>{surah?.asma?.ar?.long}</ArabicSurahName>
                <LatinSurahName>({surah?.asma?.id?.long})</LatinSurahName>
                <Container>
                    <TextIntro>
                        {surah?.tafsir?.id}
                    </TextIntro>
                </Container>
            </StyledDiv>
        </>
    );
}

export default Intro;