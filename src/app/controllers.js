const novidades = require("./json/novidades.json");
const bairros = require("./json/bairros.json");
class controllers{
    novidades(req,res){
        return res.status(200).json({
         novidades
        })
    };
    bairros(req,res){
        return res.status(200).json({
            bairros
        })
    }
}

module.exports=new controllers()