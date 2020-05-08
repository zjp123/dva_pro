import axios from 'axios'

export default function propmissTest(){
    return axios.get('http://127.0.0.1:8000/src/mock/res.json')
}