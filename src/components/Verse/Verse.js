import styled from "styled-components";

const VerseContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:30px 30px 10px;
    box-shadow: 3px 2px 3px 1px #ebebeb;
    margin-bottom: 10px;
    border:1px solid #ddd;
    border-radius: 5px;
`;

const SingleVerse = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: top;
`;

const VerseNumber = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    border-radius: 50%;
    height: 50px;
    min-width: 50px;
    padding:5px;
    font-weight: 600;
    color: #224d6a87;
    border:3px solid #224d6a87;
`;

const ArabicVerse = styled.p`
    direction: rtl;
    margin-left: 20px;
    font-family: 'Amiri', serif;
    font-size: 1.8rem;
    line-height: 3.7rem;
    text-align: justify;
`;

const Translation = styled.p`
    direction: ltr;
    font-size: 1rem;
`;

const Verse = ({ verses }) => {
    return (
        <>
            {verses?.map((verse, index) => (
                <VerseContainer key={index}>
                    <VerseNumber>{index+1}</VerseNumber>
                    <SingleVerse>
                        <ArabicVerse>{verse?.text?.ar}</ArabicVerse>
                        <Translation>{verse?.translation?.id}</Translation>
                    </SingleVerse>
                </VerseContainer>
            ))}
        </>
    );
}

export default Verse;