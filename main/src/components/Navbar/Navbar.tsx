"use client"
import Link from 'next/link'
import React from 'react'
import './Navbar.css'
import { BiUserCircle, BiSearch } from 'react-icons/bi'
import { RiArrowDropDownFill } from 'react-icons/ri'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import LocationPopup from '@/popups/location/LocationPopup'



const Navbar = () => {
    const [showLocationPopup, setShowLocationPopup] = React.useState<boolean>(false)
    const [user, setUser] = React.useState<any>(null)

    const loggedIn = localStorage.getItem("token")
    const getuser = async () => {

        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                console.log(response)
                setUser(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
            
    }

    const handleLogout = async () => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
                console.log(response)
                if (response.ok) {
                    localStorage.removeItem("token")
                    window.location.href = "/auth/signin"
                }

            })
            .catch((error) => {
                console.log(error)
                window.location.href = "/auth/signin"

            })
            
    }

   

    React.useEffect(() => {
      
        getuser()
    }, )
    return (
        <nav>
            <div className='left'>
                <Image src={logo} alt="logo" width={70} 
                    onClick={() => window.location.href = "/"}
                />
                <div className='searchbox bg-black'>
                    <BiSearch className='searchbtn' />
                    <input type="text" placeholder="Search For a Movie" />
                </div>
            </div>
            <div className='right'>
                <p className='dropdown'
                    onClick={() => setShowLocationPopup(true)}
                >
                    {user ? user.city : "Select City"}
                     <RiArrowDropDownFill className="dropicon" /></p>
               {
                     loggedIn ?
                     <button className='theme_btn1 linkstylenone' onClick={handleLogout}>Logout</button>
                     :
                        <Link href="/auth/signin" className='theme_btn1 linkstylenone'>
                            Login
                        </Link>

               }
            
                

                 {
                    loggedIn?
                    <Link href="/profile" className='linkstylenone'>
                    <BiUserCircle className='theme_icon1' />
                </Link>
                :
                <h1>o</h1>
                 }
                
                
            </div>
            {
                showLocationPopup &&
                <LocationPopup
                    setShowLocationPopup={setShowLocationPopup}
                />
            }
        </nav>
    )
}

export default Navbar