import user from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

export const signin = async (request, response) => {
    const {email, password} = request.body;

    try {
        const existingUser = await user.findOne({email});
        if(!existingUser){
            return response.status(404).json({message: "Email not found"});
        }
        const isCorrectPassword = await bcrypt.compare(password, existingUser.password);
        if(!isCorrectPassword){
            return response.status(400).json({message: "Wrong Password"});
        }
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, "test", {expiresIn: "1h"});
        response.status(200).json({result: existingUser, token})
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}
export const signup = async (request, response) => {
    const {firstName, lastName, email, password, confirmPassword} = request.body;

    try {
        const existingUser = await user.findOne({email});
        if(existingUser){
            return response.status(400).json({message: "User already exists"});
        }
        if(password !== confirmPassword){
            return response.status(400).json({message: "Passwords don't match"})
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await user.create({fname: firstName, lname: lastName, email: email, password: hashedPassword})
        const token = jwt.sign({email: result.email, id: result._id}, "test", {expiresIn: "1h"});
        response.status(200).json({result: result, token})
        
    } catch (error) {
        response.status(404).json({message: error.message})
    }
}