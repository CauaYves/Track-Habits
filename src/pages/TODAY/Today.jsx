import { styled } from "styled-components"
import HeaderBar from "../../components/HeaderBar"
import TrackBar from "../../components/TrackBar"
import Todaytask from "../../components/Todaytask"
import { useEffect, useState } from "react"
import { getUserDataFromLocals } from "../../functions/saveonLocals"
import axios from "axios"
import urlApi from "../../constants/fetchApi"
import COLORS from "../../constants/colors"
import DateBox from "../../components/DateBox"

export default function Today() {
    const [habits, setHabits] = useState([])
    console.log(habits)
    useEffect(() => {
        const { token } = getUserDataFromLocals()

        axios
            .get(`${urlApi}/habits/today`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setHabits(res.data))
    }, [])

    return (
        <Main>
            <HeaderBar />
            <Content>
                <DateBox />
                <HabitContainer>
                    {
                        habits.length === 0 ? <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1> :
                            habits.map((data) => {
                                return <Todaytask id={data.id} name={data.name} done={data.done} key={data.id} cSequence={data.currentSequence} hSequence={data.highestSequence}></Todaytask>
                            })
                    }
                </HabitContainer>
            </Content>
            <TrackBar />
        </Main>
    )
}

const Main = styled.main`
    background-color: ${COLORS.BACKGROUND};
    height: 100vh;
    >h1{
        color: ${COLORS.TEXT};
        margin: 30px 0px;
    }
`
const Content = styled.div`
    padding: 0px 15px;
`
const HabitContainer = styled.div`
`