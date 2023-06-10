/* eslint-disable react/prop-types */
import { styled } from "styled-components"
import COLORS from "../constants/colors"

export default function Input({ placeholder, type, value, setValue, on }) {

    return (
        <>
            <InputContainer>
                <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} disabled={on}></input>
            </InputContainer>
        </>
    )
}

const InputContainer = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    input{
        width: 100%;
        height: 45px;

        border: 1px solid ${COLORS.BORDERINPUT};
        border-radius: 5px;
        &:disabled{
            background-color: ${COLORS.DISABLEDINPUT};
            pointer-events: none;
        }
    }
`