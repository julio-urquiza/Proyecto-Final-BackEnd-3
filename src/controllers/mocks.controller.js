import { generateUsers,generatePets } from '../mocks/mocks.js'
import {usersService,petsService} from '../services/index.js'

const getRandomUsers = async(req,res)=> {
    const result = await generateUsers(50)
    res.status(200).send({usuarios: result})
}

const getRandomPets = async(req,res)=> {
    const result = await generatePets(50)
    res.status(200).send({mascotas: result})
}

const generateData = async(req,res)=> {
    const {cantPets, cantUsers} = req.query
    const pets = await generatePets(cantPets)
    const users = await generateUsers(cantUsers)
    console.log(cantPets,cantUsers)
    console.log(pets,users)
    for(const pet of pets){
        await petsService.create(pet);
    }
    for(const user of users){
        await usersService.create(user);
    }
    res.status(200).send({status: 'ok'})
}

export default {
    getRandomUsers,
    getRandomPets,
    generateData
}
