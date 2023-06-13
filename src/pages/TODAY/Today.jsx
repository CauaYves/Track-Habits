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
    const [refresh, setRefresh] = useState(0)
    useEffect(() => {
        const { token } = getUserDataFromLocals()

        axios
            .get(`${urlApi}/habits/today`, { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setHabits(res.data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])


    function calculatePercentage(task) {
        const done = task.map((task) => task.done)   
        
        const taskValue = 100/done.length

        const tasksDone = done.filter(el => el === true)
        return tasksDone.length * taskValue
    }


    return (
        <Main>
            <HeaderBar />
            <Content>
                <DateBox />
                <HabitContainer>
                    {
                        habits.length === 0 ? <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1> :
                            habits.map((data) => {
                                return <Todaytask
                                    id={data.id}
                                    name={data.name}
                                    done={data.done}
                                    key={data.id}
                                    cSequence={data.currentSequence}
                                    hSequence={data.highestSequence}
                                    setRefresh={setRefresh}
                                    refresh={refresh}
                                />
                            })
                    }
                </HabitContainer>
            </Content>
            <TrackBar percentage={calculatePercentage(habits)} />
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
    >h1{
        color: ${COLORS.TEXT};
        margin: 30px 0px;
    }
`