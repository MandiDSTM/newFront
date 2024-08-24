import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AutContext/AutContex';
import personPic from '../../../src/Pic/person-img.jpg'

function Humberger() {
  const navigate = useNavigate();
  const { signOut, admin } = useContext(AuthContext)


  const handleSignOut = (address) => {
    signOut()
    navigate(address, { replace: true });
  }

  return (
    <div className="min-w-[293px] h-full flex flex-col items-center  bg-white ">
      <div className="mt-12 text-black  w-full text-center font-light leading-7 text-2xl mt">Silicon Energy</div>
      <div className='w-[100px] h-[100px] border rounded-full mt-14 overflow-hidden'>
        <img srcSet={personPic} alt="" className='w-full h-full scale-110' />
      </div>
      <div className='mt-5 font-medium'>Name & family</div>
      <div className='font-light text-xs  mt-1'>User</div>
      <div className='w-[80px] h-[35px] border rounded-full flex justify-center items-center mt-3 bg-dashboardDeepBlue text-white text-base font-bold cursor-pointer'>Edit</div>

      <div className={`w-full ${admin ? 'hidden' : 'block'}`}>
        <div className="flex flex-col">
          <div className='px-4  mt-[70px]'>
            <div onClick={() => navigate('/dashboard')} className="flex items-center gap-4 cursor-pointer h-[65px] hover:bg-dashboardBlue hover:text-white rounded-[24.5px] pl-[47px] font-bold">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                </svg>
              </div>
              <div>Dashboard</div>
            </div>
          </div>
          <div className='px-4'>
            <div onClick={() => navigate('/dashboard')} className="flex items-center gap-4 cursor-pointer h-[65px] hover:bg-dashboardBlue hover:text-white rounded-[24.5px] pl-[47px] font-bold">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                </svg>
              </div>
              <div>PDU</div>
            </div>
          </div>
          <div className='px-4'>
            <div onClick={() => navigate('/dashboard')} className="flex items-center gap-4 cursor-pointer h-[65px] hover:bg-dashboardBlue hover:text-white rounded-[24.5px] pl-[47px] font-bold">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                </svg>
              </div>
              <div>Settings</div>
            </div>
          </div>
          {/* <div onClick={() => navigate('/dashboard/miner1')} className="rounded h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 1</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner2')} className="rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 2</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner3')} className="rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 3</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner4')} className="rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 4</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner5')} className="rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 5</div>
          </div>
          <div onClick={() => navigate('/dashboard/miner6')} className="rounded hover:bg-slate-600 hover:text-white h-12 flex items-center gap-4 cursor-pointer pl-2">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
              </svg>
            </div>
            <div>Miner 6</div>
          </div> */}


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
      <div className='w-[192px] h-1 border-[#E2DAD654] border-t-4 rounded-full mb-[32px]'></div>
      <div className='flex  items-center mb-[54px]  w-full pl-[70px] cursor-pointer' onClick={() => handleSignOut('/')}>
        <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 13.75C0 14.1147 0.144866 14.4644 0.402728 14.7223C0.660591 14.9801 1.01033 15.125 1.375 15.125H11.8113L8.64875 18.2738C8.51987 18.4016 8.41758 18.5536 8.34777 18.7212C8.27797 18.8888 8.24203 19.0685 8.24203 19.25C8.24203 19.4315 8.27797 19.6112 8.34777 19.7788C8.41758 19.9464 8.51987 20.0984 8.64875 20.2262C8.77657 20.3551 8.92865 20.4574 9.09621 20.5272C9.26376 20.597 9.44348 20.633 9.625 20.633C9.80652 20.633 9.98624 20.597 10.1538 20.5272C10.3213 20.4574 10.4734 20.3551 10.6012 20.2262L16.1012 14.7262C16.2264 14.5955 16.3246 14.4413 16.39 14.2725C16.5275 13.9377 16.5275 13.5623 16.39 13.2275C16.3246 13.0587 16.2264 12.9045 16.1012 12.7738L10.6012 7.27375C10.473 7.14555 10.3208 7.04385 10.1533 6.97447C9.98584 6.90509 9.80631 6.86937 9.625 6.86937C9.44369 6.86937 9.26416 6.90509 9.09666 6.97447C8.92915 7.04385 8.77695 7.14555 8.64875 7.27375C8.52055 7.40195 8.41885 7.55415 8.34947 7.72166C8.28008 7.88916 8.24437 8.06869 8.24437 8.25C8.24437 8.43131 8.28008 8.61084 8.34947 8.77834C8.41885 8.94585 8.52055 9.09805 8.64875 9.22625L11.8113 12.375H1.375C1.01033 12.375 0.660591 12.5199 0.402728 12.7777C0.144866 13.0356 0 13.3853 0 13.75ZM17.875 0H4.125C3.03098 0 1.98177 0.434597 1.20818 1.20818C0.434597 1.98177 0 3.03098 0 4.125V8.25C0 8.61467 0.144866 8.96441 0.402728 9.22227C0.660591 9.48013 1.01033 9.625 1.375 9.625C1.73967 9.625 2.08941 9.48013 2.34727 9.22227C2.60513 8.96441 2.75 8.61467 2.75 8.25V4.125C2.75 3.76033 2.89487 3.41059 3.15273 3.15273C3.41059 2.89487 3.76033 2.75 4.125 2.75H17.875C18.2397 2.75 18.5894 2.89487 18.8473 3.15273C19.1051 3.41059 19.25 3.76033 19.25 4.125V23.375C19.25 23.7397 19.1051 24.0894 18.8473 24.3473C18.5894 24.6051 18.2397 24.75 17.875 24.75H4.125C3.76033 24.75 3.41059 24.6051 3.15273 24.3473C2.89487 24.0894 2.75 23.7397 2.75 23.375V19.25C2.75 18.8853 2.60513 18.5356 2.34727 18.2777C2.08941 18.0199 1.73967 17.875 1.375 17.875C1.01033 17.875 0.660591 18.0199 0.402728 18.2777C0.144866 18.5356 0 18.8853 0 19.25V23.375C0 24.469 0.434597 25.5182 1.20818 26.2918C1.98177 27.0654 3.03098 27.5 4.125 27.5H17.875C18.969 27.5 20.0182 27.0654 20.7918 26.2918C21.5654 25.5182 22 24.469 22 23.375V4.125C22 3.03098 21.5654 1.98177 20.7918 1.20818C20.0182 0.434597 18.969 0 17.875 0Z" fill="#7FA1C3" />
        </svg>

        <div className=" flex justify-center items-center ml-[16px] font-medium ">logout</div>
      </div>
    </div>

  )
}

export default Humberger;
