import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = new User({ email, password });

    const savedUser = await newUser.save();

    res.status(201).json({ message: "New User Saved.", savedUser });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email: email });

    if (!userFound) {
      return res.status(404).json({ message: "User not found" });
    }

    if (userFound.password === password) {
      res.status(200).json({ message: "User Found.", userFound });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registerUser, signInUser };
