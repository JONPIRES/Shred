const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  checkToken,
  getUser,
  updateUser,
  deleteUser,
};

async function checkToken(req, res) {
  console.log("req.user ->", req.user);
  res.json(req.exp);
}

async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    // Add the user to the db
    const user = await User.findOne({ email: req.body.email });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!user) throw new Error("No User Found");
    else if (match) {
      const token = createJWT(user);
      res.json(token);
    } else {
      throw new Error("Wrong Password");
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getUser(req, res) {
  try {
    const exUser = await User.findById(req.params.id);
    res.send(exUser);
  } catch (error) {
    throw new Error("get user error");
  }
}

// Refference StackUp on how to bcrypt the password and compare hash with signup
async function updateUser(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
  } catch (error) {
    console.log(error);
    throw new Error("Update User Error");
  }
}

async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.log(error);
    throw new Error("Delete Exercise Error");
  }
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
