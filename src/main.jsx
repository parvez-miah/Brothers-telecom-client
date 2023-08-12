import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider,} from "react-router-dom";
import { router } from './Routes/Routes/Routes';
import AuthProvider from './Provider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  
       
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <div className='font max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
      </QueryClientProvider>
    </AuthProvider>
 
)
