const express = require('express');
const Router = express.Router();

const {
    WhatsappApi
} = require('../controller/Whatsapp')






Router.post('/WhatsappApi',WhatsappApi)




module.exports = Router;





// const AdminRegister= async(req,res) => {                                                       
//     try {
//         const {FirstName, LastName, Email, Password} = req.body;                              
//         const _GetAdminUserLength = await _AdminManagementModel.find();                              
//         if (_GetAdminUserLength.length >= 2) {
//             res.json({
//                 message:`Admin Regesteration is Constraint`,
//                 Status:null,
//                 Data:false
//             })
//         } else {
//             const _RegisterAdmin = new _AdminManagementModel({
//                 FirstName,
//                 LastName ,
//                 Email,
//                 Password
                            
//             });
//             await _RegisterAdmin.save();
//             res.json({
//                 message:`User Register Successfully`,
//                 data:true,
//                 result:_RegisterAdmin
//             })
//         }
//     } catch (error) {
//         res.json({ 
//             message: error.message, 
//             result: false, 
//             data:false 
//         });
//     }
// }