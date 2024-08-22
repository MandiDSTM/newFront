import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AutContext/AutContex';


function Humberger() {
  const navigate = useNavigate();
  const { signOut, admin } = useContext(AuthContext)


  const handleSignOut = (address) => {
    signOut()
    navigate(address, { replace: true });
  }

  return (
    <div className="min-w-[220px] h-[98vh] pb-1 pr-5 rounded flex flex-col items-center justify-between bg-[#232323]">
      <div className="h-20 flex w-full items-center bg-[#232323] text-white gap-1">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
          </svg>
        </div>
        <div className="text-xl">Silicon Energy</div>
      </div>
      <div className={`h-4/6 w-full ${admin ? 'hidden' : 'block'}`}>
        <div className="flex flex-col gap-3">
          <div onClick={() => navigate('/dashboard/miner1')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 1</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner2')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 2</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner3')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 3</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner4')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 4</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner5')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 5</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner6')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 6</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner7')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 7</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner8')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 8</div>
          </div>
        </div>
      </div>
      <div className={`h-4/6 w-full ${admin ? 'block' : 'hidden'}`}>

        <div onClick={() => navigate('/dashboard/signupuser')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
          </div>
          <div>user sign up</div>
        </div>
        <div onClick={() => navigate('/dashboard/addpdu')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
          </div>
          <div>Adding Pdu</div>
        </div>
        <div onClick={() => navigate('/dashboard/signupminer')} className="text-white rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
            </svg>
          </div>
          <div>Adding Miner</div>
        </div>
      </div>
      <div className="w-full h-11">
        <div onClick={() => handleSignOut('/')} className="bg-red-500 h-full flex justify-center items-center rounded text-white cursor-pointer">Sign out</div>
      </div>
    </div>
  )
}

export default Humberger;
