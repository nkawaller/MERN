import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts'
import Posts from '../Posts/Posts';

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts);
    }, [dispatch]);

    return (
        <div>
            <Posts />
        </div>
    )
}

export default Home
