import { API } from './api'

export async function  getUsers() {
    try{
        const response = await API.get(`/users`)
        return response;
    } catch(err){
        throw new Error(err as string)
    }
}

export async function getUserByName(userName:string) {
    try{
        const response = await API.get(`/users/${userName}`)
        return response;
    }catch(err){
        throw new Error(err as string)
    }
}

export async function getReposByUrl(userName:string) {
    try{
        const reponse = await API.get(`/users/${userName}/repos`)
        return reponse;
    }catch(err){
        throw new Error(err as string)
    }
}
