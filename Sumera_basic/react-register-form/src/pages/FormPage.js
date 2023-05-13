import React from 'react'
import logo from '../assets/download.jpg'
import Register from '../Components/Register'
import Sum from '../Components/Sum'


const FormPage = () => {
  return (
    
      <div className='bg-amber-500 h-screen flex justify-center items-center  px-[30px]  md:px-[110px]'>
        <div className='flex flex-row   h-[700px] w-full '>   
            <div className=' bg-[#f5f3f2] w-full md:w-1/2'>
              <div className='p-[10px]'>
                <img src={logo} alt='sorry' className='w-[30px] '/>
                </div> 
               <Register/>
              </div> 
            <div className='bg-slate-500 w-1/2 md:block hidden'><Sum/></div>
        </div>
      </div>
  )
}

export default FormPage
