const registerUser = async (req, res) => {
    try{
        const {username, email, password, role} = req.body;
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success: true,
            message: 'Some error occured, Please try again'
        })
    }
}
const loginUser = async (req, res) => {
    try{

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Some error occured, Please try again'
        })
    }
}

module.exports = {registerUser, loginUser};