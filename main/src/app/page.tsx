"use client"
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import HomeSlider from '@/components/HomeSlider/HomeSlider'
import MovieCarousel from '@/components/moviecarousel/MovieCarousel'
import { useRouter } from 'next/navigation'
import Footer from '@/components/Footer/Footer'
import Review from '@/Reviews/Reviews'

export default function Home() {

const token  =   localStorage.getItem("token")
const router = useRouter()

if(!token){
router.push("/auth/signin")
} else{
  router.push("/")
}

  return (
    <main className={styles.main}>
      <HomeSlider />
      <h1 className='line'>Avaliable Movies</h1>
      <MovieCarousel />
      {/* <Review/> */}
    </main>
  )
}
