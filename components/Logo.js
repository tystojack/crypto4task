"use client"
import React from 'react'
import Image from 'next/image'
import {useRouter} from "next/navigation"

function Logo() {
    const router = useRouter();
  return (
    <div>
    <Image className='rounded-full' width='70' height="60" src="/images/logo.png"/>
    </div>
  )
}

export default Logo