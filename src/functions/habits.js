import axios from "axios"
import urlApi from "../constants/fetchApi"
import { getUserDataFromLocals } from "./saveonLocals"

export function deleteHabit(habitId) {
    const { token } = getUserDataFromLocals()
    axios.delete(`${urlApi}/habits/${habitId}`, { headers: { Authorization: `Bearer ${token}` } })
}
export function today() {
    const currentDate = new Date();

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

    const currentDateS = currentDate.toLocaleDateString();
    const currentDateString = currentDateS.slice(0, 5)

    return { currentDateString, currentDayOfWeek }
}