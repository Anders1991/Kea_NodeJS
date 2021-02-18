const express = require("express");
const app = express();

    app.use('/api', express.static('api') , function(req, res){
        res.status(404);
        res.json({error:{code:404}})
    });

/* app.get("/api/classic_pokemon", (req,res) => {
        res.status(404);
        res.json({error:{code:404}})
    });
*/
app.listen(8080);
