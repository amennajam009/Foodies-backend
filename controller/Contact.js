const OrderTable  = require('../model/ContactModel');


const OrderTableApi = async(req,res) =>{
    try {
        const GetUserBookingTable = await OrderTable.create(req.body);
        res.json({
            message:'Api works',
            Data:true,
            Result:GetUserBookingTable
        })

    } catch (error) {
        res.json({
            message:error.message,
            Data:false,
            Result:null
        })
    }
}



module.exports={
OrderTableApi
}