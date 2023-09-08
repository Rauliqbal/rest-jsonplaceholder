const Team = require("../models/team")

const getTeam = async(req,res) => {
    try {
        const teams = await Team.find()
        res.status(200).json({
            status_code:200,
            message: "Yess Nyambung!",
            data: teams
        })
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports ={getTeam}