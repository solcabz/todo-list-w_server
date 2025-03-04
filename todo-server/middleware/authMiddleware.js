import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.userId = decoded.id;
    req.user = decoded; // Assuming the decoded token contains user information
    next();
  });
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // User is admin, proceed to the next middleware/route handler
  } else {
    res.status(403).json({ message: "Access denied. Admins only." });
  }
};