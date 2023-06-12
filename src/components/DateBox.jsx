import { styled } from "styled-components"
import { today } from "../functions/habits"
import COLORS from "../constants/colors"

export default function DateBox() {
    const { currentDateString, currentDayOfWeek } = today()
    return (
        <Main>
            <h1>{currentDateString}, {currentDayOfWeek}</h1>
            <p>Porcentagem dos hábitos</p>
        </Main>
    )
}

const Main = styled.div`
    height: 110px;
    width: 100%;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    
    h1{
        font-size: 22px;
        color: ${COLORS.TERCIARY};
    }
    p{
        color: ${COLORS.TEXT};
    }
`