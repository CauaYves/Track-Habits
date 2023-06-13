/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import { AiOutlineCheck } from 'react-icons/ai';
import COLORS from "../constants/colors";
import axios from "axios";
import urlApi from "../constants/fetchApi";
import configApi from "../constants/configApi";

export default function Todaytask({ id, name, done, cSequence, hSequence, setRefresh, refresh }) {

    function endTask(taskId) {
        let booleanTask = "check"
        if (done) booleanTask = "uncheck"
        axios
            .post(`${urlApi}/habits/${taskId}/${booleanTask}`, null, configApi)
            .then(() => setRefresh(refresh + 1))

    }

    return (
        <Main>
            <Data>
                <h1>{name}</h1>
                <p>Sequência atual: {cSequence} dias</p>
                <p>Seu recorde: {hSequence} dias</p>
            </Data>
            <Check
                color={done ? `${COLORS.SUCESS}` : `${COLORS.DISABLED}`}
                onClick={() => endTask(id)}

            >
                <AiOutlineCheck color="white" size={60} />
            </Check>
        </Main>
    )
}
const Main = styled.div`
    background-color: white;
    border-radius: 5px;
    width: 100% ;
    padding: 15px;
    margin: 10px 0px;

    display: flex;
    justify-content: space-between;
`
const Data = styled.div`
    p{
        color: black;
        font: 12px;
    }
    h1{
        color: black;
        font-size: 20px;
    }
`
const Check = styled.button`
    background-color: ${props => props.color};

    border-radius: 5px;

    padding: 10px;
`