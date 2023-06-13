import { styled } from "styled-components"
import HeaderBar from "../../components/HeaderBar"
import { useEffect, useState } from "react"
import { getUserDataFromLocals } from "../../functions/saveonLocals"
import { useNavigate } from "react-router-dom"
import { FaPlus } from 'react-icons/fa';
import FONTS from "../../constants/fonts"
import COLORS from "../../constants/colors"
import axios from "axios"
import urlApi from "../../constants/fetchApi"
import TrackBar from "../../components/TrackBar"
import HabitInput from "../../components/habitInput"
import Habit from "../../components/Habit"

export default function Home() {
    const navigate = useNavigate()
    const [habits, setHabits] = useState([])
    const [createHabit, setCreateHabit] = useState(false)
    const [habitName, setHabitName] = useState("")

    useEffect(() => {
        const { token } = getUserDataFromLocals()
        if (!token) navigate("/")
        console.log(1)
        axios
            .get(`${urlApi}/habits`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setHabits(res.data))
    }, [createHabit, navigate])

    return (
        <Main>
            <HeaderBar />
            <HomeContainer>
                <Flex>
                    <h1>Meus hábitos</h1>
                    <IconContainer onClick={() => setCreateHabit(true)}>
                        <FaPlus size={35} color="white" />
                    </IconContainer>
                </Flex>
                <HabitsContainer>
                    {createHabit ? <HabitInput isOpen={setCreateHabit} value={habitName} setValue={(value) => setHabitName(value)} close={setCreateHabit} /> : null}
                    {
                        habits.length === 0 ? <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1> :
                            habits.map((data) => {
                                return <Habit id={data.id} name={data.name} days={data.days} key={data.id} refreshPage={setCreateHabit}></Habit>
                            })
                    }
                </HabitsContainer>
            </HomeContainer>
            <TrackBar />
        </Main>
    )
}
const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.BACKGROUND};
`
const HomeContainer = styled.main`
    width: 91vw;
    margin: auto;
`
const Flex = styled.div`
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 22px;
        font-family: ${FONTS.PRIMARY};
        font-weight: 400;
        color: ${COLORS.TERCIARY};
    }

`
const IconContainer = styled.div`
    svg{
        background-color: ${COLORS.SECONDARY};
        border-radius: 5px;
        padding: 10px;
    }
`
const HabitsContainer = styled.section`
    width: 100%;
    h1{
        color: ${COLORS.TEXT};
        margin: 30px 0px;
    }
`