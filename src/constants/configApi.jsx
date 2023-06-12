import { getUserDataFromLocals } from "../functions/saveonLocals"

const { token } = getUserDataFromLocals()

const configApi =  { headers: { Authorization: `Bearer ${token}` } }
export default configApi