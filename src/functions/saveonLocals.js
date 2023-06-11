function saveOnlocals({ data }) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('image', data.image)
    localStorage.setItem('name', data.name)
}

function getUserDataFromLocals() {
    const img = localStorage.getItem('image')
    const name = localStorage.getItem('name')
    const token = localStorage.getItem('token')

    return { img, name, token }
}
export { saveOnlocals, getUserDataFromLocals }