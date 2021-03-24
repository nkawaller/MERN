import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPostMessage = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
        
    }
}

export default router;