import { Link } from "react-router-dom"
import { styled } from "styled-components"
import COLORS from "../constants/colors"
import FONTS from "../constants/fonts"

// eslint-disable-next-line react/prop-types
export default function Linkto({ text, to }) {
    return (
        <LinkAnchor>
            <Link to={to}>{text}</Link>
        </LinkAnchor>
    )
}
const LinkAnchor = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    a{
        color: ${COLORS.SECONDARY};
        font-family: ${FONTS.PRIMARY};
    }
`