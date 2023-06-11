import { styled } from "styled-components"
import COLORS from "../constants/colors"
import FONTS from "../constants/fonts"
import { getUserDataFromLocals } from "../functions/saveonLocals"

export default function HeaderBar() {
    const { img } = getUserDataFromLocals()

    return (
        <>
            <HeaderContainer>
                <Logo>
                    <h1>TrackHabits</h1>
                </Logo>
                <UserImg>
                    <img src={img} alt="userImage"></img>
                </UserImg>
            </HeaderContainer>
        </>
    )
}
const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;

    background-color: ${COLORS.TERCIARY};

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
const UserImg = styled.div`
    margin-right: 15px;
    img{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    margin-left: 15px;
    h1{
        font-size: xx-large;
        font-family: ${FONTS.SECONDARY};
        font-weight: 400;
        color: white;
    }
`