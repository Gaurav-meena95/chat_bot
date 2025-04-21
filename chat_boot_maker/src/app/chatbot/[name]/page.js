"use client";
import { useParams } from 'next/navigation';
import React from 'react'

async function Page(){
  const params = useParams();
  return (
    <div>
      <h1>{params.name}</h1>
    </div>
  )
} 

export default Page;