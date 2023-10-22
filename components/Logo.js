"use client"
import React from 'react'
import Image from 'next/image'
import {useRouter} from "next/navigation"

function Logo() {
    const router = useRouter();
  return (
    <div>
    <Image width='60' height="50" src="/images/logo.png"/>
    </div>
  )
}

export default Logo