import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
export default function WorkTogether() {
  return (
    <div className='my-20'>
      <div className='bg-[#F9FBFD] w-8/12 mx-auto py-10 rounded border-2 grid grid-cols-1 lg:grid-cols-3 justify-between'>
            <div className='flex flex-col items-center space-y-4'>
                <div className='border-2 p-3 rounded-full bg-[#E3F2FA]'>
                    <FiPhone className='w-8 h-8 text-[#1d9cd7]'></FiPhone>
                </div>
                <h2 className="text-xl font-bold">Phone </h2>
                <p>+880 1958253962</p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
                <div className='border-2 p-3 rounded-full bg-[#E3F2FA]'>
                    <MdOutlineMail className='w-8 h-8 text-[#1d9cd7]'></MdOutlineMail>
                    
                </div>
                <h2 className="text-xl font-bold">Email</h2>
                <p>info@dpmsign.com</p>
            </div>
            <div className='flex flex-col items-center space-y-4'>
                <div className='border-2 p-3 rounded-full bg-[#E3F2FA]'>
                    <IoLocationOutline className='w-8 h-8 text-[#1d9cd7]'></IoLocationOutline>
                    
                </div>
                <h2 className="text-xl font-bold">Visit Us</h2>
                <p className="text-center text-xs w-9/12 mx-auto">Head Office: Shop-94, Dhaka University Market, Katabon Road, <br />Dhaka-1000</p>
            </div>
      </div>
    </div>
  )
}
