import React from 'react';
import Humberger from "../humberger/Humberger";
import { useContext } from 'react';
import { AuthContext } from '../AutContext/AutContex';


const Container = ({ component: Component }) => {
    const { admin } = useContext(AuthContext)
    return (
        <div className='h-screen flex items-center'>
            <Humberger />
            <div className='w-full h-full bg-dashboardPink'>
                <div className='p-4'>
                    {Component ? <Component /> : null}
                </div>
                <div className={`‍w-full h-[80vh] justify-center flex-col items-center gap-10  ${admin ? 'hidden' : 'flex'}`}>
                    user pannel
                </div>
            </div>
        </div>
    );
}

export default Container;
