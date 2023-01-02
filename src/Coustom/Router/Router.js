import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Root from '../Root/Root';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
            {
                path:'/',
                element:<Main></Main>
            }
        ]
    }
])
