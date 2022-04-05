const novidades = require("./json/novidades.json");
const bairros = require("./json/bairros.json");
const imoveis = require("./json/imoveis.json");
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
    };
    imoveis(req,res){
        return res.status(200).json({
            imoveis
        })
    };
}

module.exports=new controllers()