import { styled } from "styled-components";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import FormButton from "../../components/FormButton";
import Linkto from "../../components/Linkto";
import { useState } from "react";
import axios from "axios";
import urlApi from "../../constants/fetchApi"
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [forms, setForms] = useState({
        email: "",
        password: "",
        name: "",
        image: ""
    })

    function signupUser(e) {
        e.preventDefault()
        axios
            .post(`${urlApi}/auth/sign-up`, forms)
            .then(navigate("/login"))

    }

    const { email, password, name, img } = forms
    return (
        <Container>
            <Logo />
            <form onSubmit={signupUser}>
                <Input placeholder="email" type="email" value={email} setValue={(value) => setForms({ ...forms, email: value })} on={loading} />
                <Input placeholder="senha" type="password" value={password} setValue={(value) => setForms({ ...forms, password: value })} on={loading} />
                <Input placeholder="nome" type="text" value={name} setValue={(value) => setForms({ ...forms, name: value })} on={loading} />
                <Input placeholder="foto" type="url" value={img} setValue={(value) => setForms({ ...forms, image: value })} on={loading} />
                <div onClick={() => setLoading(true)} type="submit" >
                    <FormButton text="Cadastrar" loading={loading} />
                </div>
                <Linkto text="Já tem uma conta? Faça login" to="/login" />
            </form>
        </Container>
    )
}

const Container = styled.main`
    width: calc(100vw - 40px);
    margin: auto;
`