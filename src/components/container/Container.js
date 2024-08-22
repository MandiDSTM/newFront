import React from 'react';
import Humberger from "../humberger/Humberger";
import Welcome from "../welcome/Welcome";
import { useContext } from 'react';
import { AuthContext } from '../AutContext/AutContex';


const Container = ({ component: Component }) => {
    const { admin } = useContext(AuthContext)
    return (
        <div className='h-screen flex items-center px-2 bg-[#232323]'>
            <Humberger />
            <div className='w-full h-[98vh] rounded-xl bg-white'>
                <div className='hidden'>
                    <Welcome />
                </div>
                <div className='p-4'>
                    {Component ? <Component /> : null}
                </div>
                <div className={`‍w-full bg-white h-[80vh] justify-center flex-col items-center gap-10  ${admin ? 'hidden' : 'flex'}`}>
                    user pannel
                </div>
            </div>
        </div>
    );
}

export default Container;
