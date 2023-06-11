/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import Input from "./Input";
import COLORS from "../constants/colors";
import { useState } from "react";
import axios from "axios";
import urlApi from "../constants/fetchApi";
import { getUserDataFromLocals } from "../functions/saveonLocals";
import WEEKDAYS from "../constants/weekdays";

export default function HabitInput({ isOpen, value, setValue }) {

    const [selectDay, setSelectDay] = useState([])

    function createHabit() {
        const { token } = getUserDataFromLocals()
        axios.post(`${urlApi}/habits`, { name: value, days: selectDay }, { headers: { Authorization: `Bearer ${token}` } })
    }

    return (
        <>
            <Main>
                <Input
                    type="text"
                    placeholder="nome do hábito"
                    value={value}
                    setValue={setValue}
                />

                {
                    WEEKDAYS.map((day, i) =>
                        <WeekBtn
                            key={i}
                            onClick={() => setSelectDay([...selectDay, i])}
                            disabled={selectDay.includes(i) ? true : false}

                        >{day}</WeekBtn>)
                }

                <ButtonsContainer>
                    <h2 onClick={() => isOpen(false)}> Cancelar</h2>
                    <button onClick={() => createHabit()}>Salvar</button>
                </ButtonsContainer>
            </Main>
        </>
    )
}
const Main = styled.div`
    background-color: white;
    padding: 15px;
    border-radius: 5px;

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
const ButtonsContainer = styled.div`
    width: 100%;
    height: 35px;
    margin-top: 30px;

    display: flex;
    align-items: center;
    justify-content: end;

    button{
        background-color: ${COLORS.SECONDARY};
        padding: 6px 10px;
        border-radius: 5px;
        margin-left: 20px;
    }
    h2{
        color: ${COLORS.SECONDARY};
    }

`
