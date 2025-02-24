const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require('../models/User.js');

exports.register = async (req, res) => {
  const { username, password, email, number, profileImage } = req.body;
  const hash = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ username, password: hash, email, number, profileImage });
    res.json({ message: 'User created', user });
  } catch (err) {
    res.status(400).json({ error: 'Username or email already exists' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

exports.logout = (req, res) => {
  // Invalidate the token on the client side
  res.json({ message: 'Logged out successfully' });
};