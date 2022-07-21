import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}


const newCreateAnec = async (content) => {
    const object = {
        content: content,
        id: (100000 * Math.random()).toFixed(0),
        vote: 0
    }

    const response = await axios.post(baseUrl, object)
    return response.data
}


const update = async objectToUpdate => {
    const response = await axios.put(`${baseUrl}/${objectToUpdate.id}`, objectToUpdate)
    return response.data
}

/* const obj = {
    id: 1, 
    name: "ade",
    phone: 993838
}

const updateObj = (objc) => {
    const objToupdate = {...objc, name: "wale"}
    update(objToupdate)
}

updateObj(obj) */

export { getAll, newCreateAnec, update };