
let db = require("../../database/models");




const userApiController= {
    list: (req,res)=>{
    db.User.findAll()
    .then(lista=> {
        return res.json (
            {total:lista.length,
            data:lista,
           id: lista.id_user,  
        
    })
        
    })
    },detail: (req, res) => {

        db.User.findByPk(req.params.id)
        .then((lista) => {
            res.json({ 
                data : lista,
                
            });
        });
    },
}

module.exports=userApiController