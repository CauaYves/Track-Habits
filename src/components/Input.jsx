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
        padding-left: 10px;
        width: 100%;
        height: 45px;

        border: 1px solid ${COLORS.PRIMARY};
        border-radius: 5px;
        color: ${COLORS.TEXT};
        
        &:disabled{
            background-color: ${COLORS.DISABLEDINPUT};
            pointer-events: none;
        }
        &::placeholder{
            color: ${COLORS.INPUTTEXT};
        }
    }
`