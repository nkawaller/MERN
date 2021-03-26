import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';

const Home = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts);
    }, [dispatch]);

    return (
        <div>

            <Posts />
            <Form></Form>
        </div>

    )
}

export default Home
