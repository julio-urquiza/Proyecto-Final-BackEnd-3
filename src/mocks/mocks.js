import {fakerES as fa} from "@faker-js/faker"
import { createHash } from '../utils/index.js'

export const generateUser= async ()=>{
    let first_name = fa.person.firstName()
    let last_name = fa.person.lastName()
    let email = fa.internet.email({firstName: first_name, lastName: last_name})
    let password = await createHash('coder123')
    let role = Math.floor(Math.random() * 2) ? "ADMIN" : "USER"
    let pets = []
    return {
        first_name,
        last_name, 
        email, 
        password,
        role,
        pets
    }
}

export const generatePet= async ()=>{
    let name = fa.person.firstName()
    let specie = fa.animal.dog()
    let birthDate = fa.date.birthdate()
    let adopted = false
    let owner = undefined
    let image = ' '
    return {
        name,
        specie, 
        birthDate, 
        adopted,
        owner,
        image
    }
}

export const generateUsers = async (cant) => {
    const result = []
    for(let i = 0; i<cant; i++){
        result.push(await generateUser())
    }
    return result
}

export const generatePets= async (cant) => {
    const result = []
    for(let i = 0; i<cant; i++){
        result.push(await generatePet())
    }
    return result
}
