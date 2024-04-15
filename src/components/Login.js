import React from 'react';
import Header from './Header'

const Login = () => {
            return(
               <>
                <div>
                    <Header />
                </div>
                <div className='absolute'>
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
                </div>
               <form className='p-12 bg-black relative w-3/12'>
                 <input type="text" placeholder='Email Address' className='p-2 m-2' />
                 <input type="text" placeholder='Password' className='p-2 m-2' />
                 <button className='p-4 m-4'>Sign In</button>

               </form>
               </>
            )
}

export default Login
