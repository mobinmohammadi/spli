import { input } from 'framer-motion/client'
import React from 'react'

export default function InputField({ lable }) {
    return (
        <div className="flex gap-2 flex-col">
            <div className="flex gap-1">
                <label htmlFor="#">{lable}</label>
                <span className="text-red-700">*</span>
            </div>
            <div className="pt-1 text-xs pb-2 pr-1 bg-slate-100 rounded-sm">
                <input
                    type="text"
                    className="w-full pr-2 outline-0  h-full"
                    placeholder={lable}
                />
            </div>
        </div>
    )
}
