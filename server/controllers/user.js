import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from '../models/user.js'

dotenv.config();

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "I'm sorry, we couldn't find that user"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "I'm sorry, that password is invalid"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, process.env.JWT_STRING, { expiresIn: "1hr"})

        res.status(200).json({ result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Sorry, something went wrong"})
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists, please sign in"});

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match"});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({ email: result.email, id: result._id}, process.env.JWT_STRING, { expiresIn: "1hr"})

        res.status(200).json({ result, token });
        
    } catch (error) {
        res.status(500).json({message: "Sorry, something went wrong"})
        
    }
}