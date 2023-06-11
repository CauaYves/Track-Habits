import { styled } from "styled-components"
import { PulseLoader } from "react-spinners"
import COLORS from "../constants/colors"

// eslint-disable-next-line react/prop-types
export default function FormButton({ text, loading }) {
    return (
        <>
            <ButtonContainer>
                {loading ? <PulseLoader color="white" /> : text}
            </ButtonContainer>
        </>
    )
}

const ButtonContainer = styled.button`
    background-color: ${COLORS.SECONDARY};

    width: 100%;
    height: 45px;

    border: none;
    border-radius: 5px;
    color: white;
`