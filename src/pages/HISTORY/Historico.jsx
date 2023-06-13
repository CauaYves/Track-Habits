import { styled } from "styled-components"
import HeaderBar from "../../components/HeaderBar"
import TrackBar from "../../components/TrackBar"
import COLORS from "../../constants/colors"
export default function History() {
    return (
        <Main>
            <HeaderBar />
            <Content>
                <h1>Em breve você poderá ver o histórico de hábitos aqui.</h1>
            </Content>
            <TrackBar />
        </Main>
    )
}
const Main = styled.main`
    height: 100vh;
    background-color: ${COLORS.BACKGROUND};
`
const Content = styled.div`
    padding: 0px 15px;

    h1{
        color: black;
        margin: 30px 0px;
    }
`