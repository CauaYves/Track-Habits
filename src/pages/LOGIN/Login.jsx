import { styled } from "styled-components";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import FormButton from "../../components/FormButton";
import Linkto from "../../components/Linkto";
import { useState } from "react";
import axios from "axios";
import urlApi from "../../constants/fetchApi"
import { useNavigate } from "react-router-dom";
import { saveOnlocals } from "../../functions/saveonLocals";

export default function Login() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [forms, setForms] = useState({
        email: "",
        password: "",
    })

    function signinUser(e) {
        e.preventDefault()
        axios
            .post(`${urlApi}/auth/login`, forms)
            .then(res => {
                saveOnlocals(res)
                navigate("/")
            })

    }

    const { email, password } = forms
    return (
        <Container>
            <Logo />
            <form onSubmit={signinUser}>
                <Input placeholder="email" type="email" value={email} setValue={(value) => setForms({ ...forms, email: value })} on={loading} />
                <Input placeholder="senha" type="password" value={password} setValue={(value) => setForms({ ...forms, password: value })} on={loading} />
                <div onClick={() => setLoading(true)} type="submit" >
                    <FormButton text="Entrar" loading={loading} />
                </div>
                <Linkto text="Não tem uma conta? Cadastre-se!" to="/cadastro" />
            </form>
        </Container>
    )
}

const Container = styled.main`
    width: calc(100vw - 40px);
    margin: auto;
`