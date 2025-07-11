

const User = require("../Models/sampleModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP 

exports.signup = async (req, res) => {
  const { email, password } = req.body;

  try {
   
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

   
    const hashed = await bcrypt.hash(password, 10);

    
    const user = await User.create({ email, password: hashed });

    
    res.status(201).json({
      message: "Signup successful",
      userId: user._id,
    });

  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({
      message: "Signup error",
      error: err.message, 
    });
  }
};

// LOGIN 

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

   
    res.json({ token });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({
      message: "Login error",
      error: err.message,
    });
  }
};
