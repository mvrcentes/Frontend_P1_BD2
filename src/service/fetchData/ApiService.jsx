/* eslint-disable no-unused-vars */
import axios from "axios"

// const server = "http://127.0.0.1:4000"
const server = "http://192.168.0.2:3000"

let ApiService = {}

const students = await axios.get(`${server}/api/estudiantes`)

export default ApiService