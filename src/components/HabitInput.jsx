/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import Input from "./Input";
import COLORS from "../constants/colors";
import { useState } from "react";
import axios from "axios";
import { getUserDataFromLocals } from "../functions/saveonLocals";
import WEEKDAYS from "../constants/weekdays";
import { PulseLoader } from "react-spinners";

export default function HabitInput({ isOpen, value, setValue, close, setHabitName }) {

    const [loading, setLoading] = useState(false)
    const [selectDay, setSelectDay] = useState([])

    function createHabit() {
        const { token } = getUserDataFromLocals()
        axios
            .post(`${import.meta.env.VITE_API_URL}/habits`, { name: value, days: selectDay }, { headers: { Authorization: `Bearer ${token}` } })
            .then(() => close(false))
            .finally(() => { setLoading(false); isOpen("") })
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
                    <h2 onClick={() => { isOpen(false); setHabitName("") }}> Cancelar</h2>
                    {
                        loading ? <div><PulseLoader color="WHITE" /></div> : <button onClick={() => { createHabit(); setLoading(true); setHabitName("")}}>Salvar</button>
                    }
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
    }
    h2{
        margin-right: 20px;
        color: ${COLORS.SECONDARY};
    }
    >div{
        background-color: ${COLORS.SECONDARY};
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 8px;
    }

`
