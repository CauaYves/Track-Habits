export function today() {
    const currentDate = new Date();

    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

    const currentDateS = currentDate.toLocaleDateString();
    const currentDateString = currentDateS.slice(0, 5)

    return { currentDateString, currentDayOfWeek }
}