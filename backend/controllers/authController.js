import User from '../models/User.js'; // Correct import statement assuming the User model is exported correctly
import bcrypt from 'bcrypt.js';
import jwt from 'jsonwebtoken';

// user registration
export const register = async (req, res) => {
    try {
        const { username, email, password, photo } = req.body;

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            photo,
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Return success response
        res.status(201).json({savedUser, success: true, message: "Successfully created"});
    } catch (err) {
        // Handle any errors
        res.status(500).json({ success: false, message:'Failed to create. Try again' });
    }
};

// user Login
export const login = async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // If user not found or password doesn't match, return error
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const { password, role, ...rest } = user._doc;

        // If user is found and password matches, generate JWT token
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '15d' });

        // Return token to the client
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires:token.expiresIn
        }).status(200).json({success:true, message:'successfully login',token,data:{...rest},role,
    });
    } catch (err) {
        // Handle any errors
        res.status(500).json({ success: false, message: 'Failed to login' });
    }
};