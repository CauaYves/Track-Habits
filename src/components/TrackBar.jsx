import { styled } from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import COLORS from "../constants/colors";
import { useContext } from "react";
import Contextapi from "../context/contextapi";


// eslint-disable-next-line react/prop-types
export default function TrackBar() {

    const {progressbar} = useContext(Contextapi)

    const styles = buildStyles({
        pathColor: `white`,
        textColor: 'white',
        trailColor: `${COLORS.SECONDARY}`,
    });
    return (
        <>
            <Main>
                <Link to="/habitos">Hábitos</Link>
                <ProgressContainer href="/hoje">
                    <CircularProgressbar value={progressbar} text={`Hoje`} styles={styles} />
                </ProgressContainer>
                <Link to="/historico">Histórico</Link>
            </Main>
        </>
    )
}
const Main = styled.div`
    width: 100%;
    height: 70px;

    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background-color: white;
    a{
        color: ${COLORS.SECONDARY};
        text-decoration: none;
    }
`
const ProgressContainer = styled.a`
    width: 90px;
    position: absolute;
    top: -40px;

    border-radius: 50%;
    background-color: ${COLORS.SECONDARY};
    padding: 6px;
`