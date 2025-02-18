const pool = require('./db/connect');


const search = async (req,res)=>{
    const{city,slanguage} = req.body;
    try {
        const job = await pool.query('SELECT * FROM card WHERE city=? AND slanguage=?',[city,slanguage])
        res.status(200).json({job,count:job.length});
    } catch (error) {
        //res.status(500).json(error);
        return res.status(400).json({msg:`there is no Job with id ${id}`});
    }
}


module.exports = {
    search
}