/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import WEEKDAYS from "../constants/weekdays";
import COLORS from "../constants/colors";
import trash from "../assets/trash.png"
import { getUserDataFromLocals } from "../functions/saveonLocals";
import axios from "axios";

export default function Habit({ id, name, days, refreshPage }) { //days = array
    function deleteHabit(habitId) {
        const { token } = getUserDataFromLocals()
        axios
            .delete(`${import.meta.env.VITE_API_URL}/habits/${habitId}`, { headers: { Authorization: `Bearer ${token}` } })
            .then(() => refreshPage(false))
    }
    return (
        <Main>
            <div>
                <img src={trash} alt="trash" onClick={() => deleteHabit(id)} />
                <h1>{name}</h1>
            </div>
            <div>
                {
                    WEEKDAYS.map((day, i) =>
                        <WeekBtn
                            key={i}
                            disabled={days.includes(i) ? true : false}
                        >{day}</WeekBtn>
                    )
                }
            </div>
        </Main>
    )
}

const Main = styled.div`
    width: 100%;
    border-radius: 5px;
    margin: 5px 0px;
    padding: 15px;

    background-color: white;

    display: flex;
    flex-direction: column;

    >div{
        img{
            cursor: pointer;
            position: absolute;
            right: 40px;
        }
        h1{
            margin: 0;
        }
    }
`
const WeekBtn = styled.button`
    margin: 2px;
    width: 30px;
    height: 30px;
    border-radius: 5px;

    background-color: white;
    color: ${COLORS.INPUTTEXT};
    border: 1px solid ${COLORS.INPUTTEXT};

    &:disabled{
        background-color: ${COLORS.DISABLED};
        color: white;
    }

`