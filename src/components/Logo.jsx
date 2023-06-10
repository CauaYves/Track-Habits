import { styled } from "styled-components"
import logo from "../assets/logo.png"
export default function Logo() {
    return (
        <>
            <LogoContainer>
                <img src={logo} alt="logo"></img>
            </LogoContainer>

        </>
    )
}

const LogoContainer = styled.div`
    width: 100%;
    height: 300px;

    display: flex;
    align-items: end;
    justify-content: center;
`