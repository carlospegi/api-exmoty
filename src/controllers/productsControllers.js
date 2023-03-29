import PRODUCT from "../models/productsModel.js"


const productController = {

    getAll : async(req, res)=>{

        const allProducts = await PRODUCT.find({}, "-category -description")
      
        return res.status(200).json({
            status:200,
            total: allProducts.length,
            data: allProducts
        })
    },
    getOne : (req, res)=>{
        return res.send('get one')
    },
    add : (req, res)=>{
        return res.send('add')
    },
    delete : (req, res)=>{
        return res.send('delete')
    },
    update : (req, res)=>{
        return res.send('update')
    }
   

}

export default productController