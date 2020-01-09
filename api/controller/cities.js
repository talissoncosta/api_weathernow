/*

Lista de cidades
Lista de cidades que possuem um clima disponível com a informação do clima
Visualizar uma cidade X com o seu clima
Visualizar uma cidade X com o seu clima e filtrar o clima em um range de tempo Ex. (2017-03-12 até 2017-03-21)
*/

const Cities = require("../city_list.json");

var get_all = async (req, res) => {
    try {
        return res.status(200).json(Cities);
    } catch (error) {
        return res.status(500).json(error)
    }

}

// var buscar_id = async (req, res) => {
//     try {
 
//         const { id } = req.params;
//         if(!id) 
//             return res.status(400).json({
//                 error: "Invalid data"
//             });  
//         const data = await Cliente.findById(id);
//         if(data.length > 0)
//             data = data[0];
            
//         return res.json(data);      
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error)
//     }

// }

// var salvar = async (req, res) => {
//     try {
//         if(Object.entries(req.body).length === 0) 
//             return res.status(400).json({
//                 error: "Invalid data"
//             });   

//         const data = await Cliente.create(req.body);

//         enviarEmailConfirmacao(req.body.nome);
        
//         return res.status(200).json(data);    
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error)
//     }

// }

// var atualizar = async (req, res) => {

//     try {
//         const { id } = req.params;

//         if(Object.entries(req.body).length === 0 || !id) 
//             return res.status(400).json({
//                 error: "Invalid data"
//             });  
        
//         const { nome,email,cpf,telefone,enderecos} = req.body;
//         const update = {
//             $set: {
//                 nome: nome,
//                 email: email,
//                 cpf: cpf,
//                 telefone: telefone
//             }
            
//         }
//         const data = await Cliente.findByIdAndUpdate(id,update);
            
    
//         return res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error)
//     }


// }

// var remover = async (req, res) => {
//     try {
//         const { id } = req.params;
//         if(!id) 
//             return res.status(400).json({
//                 error: "Invalid data"
//             });  
//         const data = await Cliente.findByIdAndRemove(id);

//         return res.status(200).json(data);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json(error)
//     }
// }

// module.exports = {
//     login_usuario,
//     buscar_todos,
//     buscar_id,
//     salvar,
//     atualizar,
//     remover
// }