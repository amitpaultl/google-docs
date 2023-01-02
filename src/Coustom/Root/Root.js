import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shere/Header';
import RootSub from './RootSub';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <RootSub></RootSub>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;