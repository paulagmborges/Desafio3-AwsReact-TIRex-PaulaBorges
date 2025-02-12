import {SignIn} from '@clerk/clerk-react'
import LoginComponent from './loginTela'
export default function Login(){
  return(
    <div className='flex justify-center mt-[150px] w-100 h-100'>
      <LoginComponent />
      <SignIn />
    </div>
  )
}




