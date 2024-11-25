const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const checkExistUser = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (checkExistUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists either with username or email",
      });
    } 

      // password hashing
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //creating a user
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        role: role || "user",
      });

      if(newUser){
        res.status(201).json({
            success: true,
            message: 'User created succesfully'
        })
      }
      else{
        res.status(400).json({
            success: false,
            message: "Unable to create the user"
        })
      }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: true,
      message: "Some error occured, Please try again",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured, Please try again",
    });
  }
};

module.exports = { registerUser, loginUser };
