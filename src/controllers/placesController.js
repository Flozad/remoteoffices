import {Request, Response} from 'express'
import { placesDB } from '../services/dataBase';

class PlacesController{
    // VER LA LISTA DE PRODUCTOS O UN ID PARTICULAR
    async getPlaces(req, res){
        //se obtiene el id por prams
        const {id} = req.params

        if(!id){
            let resultado = await placesDB.get();
            let docs = resultado.docs;
        
            const output = docs.map(aDoc => ({
                id: aDoc.id,
                data: aDoc.data()
            }))
        
            res.json({
                data: output
            })
        }else{
            let result = await placesDB.doc(id).get();

            return ({
                id: result.id,
                data: result.data(),
            });
        }
       
    }
    async addPlace(req, res){

        const {nombre, ranking, city, img, type, lenguaje, food} = req.body
        if(!nombre || !ranking){
            res.status(400).json({msg: 'lee la docu pibe'})
        }
        const newItem = {
            name: nombre,
            ranking: ranking,
            city: city,
            img: img,
            type: type,
            lenguaje: lenguaje,
            food: food
        };
        try{      
            const doc = placesDB.doc();     //vamos a crear un documento cuya key sea (algo generico)
            await doc.create(newItem)                     //a ese documento le metemos data en formato json
            
            return res.json({
                data: doc
            })     
        }
        catch(err){
            return res.json({
                msg: (`No pudimos agregar este lugar porque  ${err}`),
                data: data
            })
        }
    }

    async updatePlace(req, res){
        const {id} = req.params
        const {nombre, ranking, city, img, type, lenguaje, food} = req.body
        if(!nombre || !ranking){
            res.status(400).json({msg: 'lee la docu pibe'})
        }
        const newItem = {
            name: nombre,
            ranking: ranking,
            city: city,
            img: img,
            type: type,
            lenguaje: lenguaje,
            food: food
        };
        await placesDB.doc(id).update(newItem);
       
        const read = readSpecificUser(id);
        console.log(`salio bien ${read}`);
        return res.json({
            msg: read
        })
    }
    async deletePlace(req, res){

        const {id} = req.query
        const deletedProduct = await placesDB.doc(id).delete()
        
        return res.json({
            data: `${id} eliminado`
        })
    }
    
}

export const placesController = new PlacesController()