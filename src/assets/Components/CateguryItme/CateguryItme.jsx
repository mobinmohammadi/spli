import React from 'react'

export default function CateguryItme({img , name}) {
  return (
    <div className='flex w-[130px] justify-center items-center text-center flex-col itmes-center gap-2'>
        <img className='w-[80px] xs:w-[120px] ' src={img} alt={name} />
        <span className='text-[10px] '>{name}</span>
    </div>
  )
}
