const novidades = require("./json/novidades.json");

class controllers{
    novidades(req,res){
        return res.status(200).json({
         novidades
        })
    }
}

module.exports=new controllers()