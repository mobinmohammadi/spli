import React from 'react'

export default function TextAreaField({lable}) {
  return (
   <div className="flex gap-4 flex-col">
          <div className="flex gap-1">
            <label htmlFor="#">{lable}</label>
            <span className="text-red-700">*</span>
          </div>
          <div className="pt-2 pb-2 pr-1 bg-slate-100 rounded-sm">
            <textarea
              type="text"
              className="w-full outline-0  h-12 pr-1"
              placeholder={lable}
            />
          </div>
        </div>
  )
}
