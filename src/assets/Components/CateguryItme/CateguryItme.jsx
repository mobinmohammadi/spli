import React from 'react'
import { Link } from 'react-router-dom'

export default function CateguryItme({img , name , link}) {
  return (
    <Link to={link} className='flex w-[130px] justify-center items-center text-center flex-col itmes-center gap-2'>
        <img className='w-[80px] xs:w-[120px] ' src={img} alt={name} />
        <span className='text-[10px] '>{name}</span>
    </Link>
  )
}
