import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import React, { ReactNode } from 'react'

const Homelayout = ({ children }: { children: ReactNode}) => {
  return (
    <main>
        <NavBar />
        <div className='flex'>
            <SideBar />
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full '>
                {children}
                </div>

            </section>
        </div>


    </main>
  )
}

export default Homelayout
