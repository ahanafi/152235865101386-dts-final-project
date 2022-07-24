import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import NavigationBar from "../Navbar/NavigationBar";
import Intro from "../Intro/Intro";
import { Container } from "react-bootstrap";
import Verse from "../Verse/Verse";

const baseUrl = process.env.REACT_APP_QURAN_API_BASE_URL;

const SurahDetail = (props) => {
    const [surah, setSurah] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getDetailSurah = async () => {
            const response = await axios.get(`${baseUrl}/quran/${id}`);
            if (response.status === 200) {
                setSurah(response.data.data);
            }
        }

        getDetailSurah();
    }, [id]);

    return (
        <>
            <NavigationBar/>
            <Intro surah={surah} />
            <Container>
                <Verse verses={surah?.ayahs} />
            </Container>
        </>
    );
}

export default SurahDetail;