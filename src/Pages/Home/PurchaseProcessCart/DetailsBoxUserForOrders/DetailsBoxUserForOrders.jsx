import React, { useEffect, useState } from "react";
import InputField from "../../../../assets/Components/PurchaseProcessCart/CustomElem/InputFiled/InputField";
import TextAreaField from "../../../../assets/Components/PurchaseProcessCart/CustomElem/TextAreaField/TextAreaField";
import SelectFiled from "../../../../assets/Components/PurchaseProcessCart/CustomElem/SelectFiled/SelectFiled";
import provincesData from "./../../../../provincesData.json"

export default function DetailsBoxUserForOrders({
  setDetailsBoxUserForOrders,
  isDetailsBoxUserForOrders

}) {

  const [selectedProvince, setsSelectedProvince] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [allCitiesProvinces, setAllCitiesProvinces] = useState([]);


  const formFields = [
    { type: "input", label: "نام تحویل گیرنده", required: true, placeholder: "احسان..." },
    { type: "input", label: "نام خانوادگی تحویل گیرنده", required: true, placeholder: "رمضانی..." },
    { type: "input", label: "شماره موبایل", required: true, placeholder: "09*********" },
    { type: "input", label: "شماره ملی", placeholder: "*********" },
    { type: "select", label: "استان", name: "provinces", required: true },
    { type: "select", label: "شهر",name:"city", required: true },
    { type: "textarea", label: "آدرس پستی", required: true },
    { type: "input", label: "کد پستی", required: true },
    { type: "input", label: "شماره تلفن ثابت" },
  ];


  const handleChangeProvinces = (e) => {
    const provinceName = e.target.value
    console.log(e.target.value);
    
    setsSelectedProvince(provinceName)
    setSelectedCity("")




    const foundCitis = provincesData.find(item => item.name == provinceName)
    if (foundCitis) {
      const arrayCitis = foundCitis.cities.map(item => item) 
      setAllCitiesProvinces(arrayCitis)
      console.log(arrayCitis);
      
    }
    else {
      setAllCitiesProvinces([])
    }
  }

  const cityHandlerChange = (vlu) => {
    setSelectedCity(vlu)
  }
  useEffect(() => {
    console.log(allCitiesProvinces);

  }, [allCitiesProvinces])

  return (
    <div className={`fixed ${isDetailsBoxUserForOrders ? "opacity-100 visible transition-Custom" : "opacity-0 invisible"} transition-all overflow-y-scroll pb-5 bg-white w-full h-full top-0 z-20 `}>
      <div className="flex items-center justify-between p-5 text-xs border-b-slate-300 border-solid border-b-1">
        <span className="text-sm">افزودن آدرس جدید</span>
        <div onClick={() => setDetailsBoxUserForOrders(false)} className="">
          <svg className="w-6 h-6">
            <use href="#x-marks"></use>
          </svg>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-5">

        {formFields.map((item ,index) => {
          if (item.type === "input") {
            return (
              <InputField
              key={index + 1}
                lable={item.label}
              />
            )
          }
          else if (item.type === "select") {
            if (item.name === "provinces") {

              return (

                <select className="border-1 border-slate-300 border-solid rounded-sm" onChange={handleChangeProvinces} value={selectedProvince}  name="" id="">
                  <option  value="">انتخاب استان</option>
                  {provincesData.map((item , index ) => (
                    <option key={item.value} value={item.name}>{item.name}</option>
                  ))}
                </select>
              )
            }
            else if (item.name === "city") {
              return (
                <>
                  <label htmlFor="#">{item.label}</label>
                  <select className="border-1 border-slate-300 border-solid rounded-sm" name="" onChange={(e) => cityHandlerChange(e.target.value)} id=""  value={selectedCity}>
                    <option value="">انتخاب شهر</option>
                    {allCitiesProvinces.map(item => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </>
              )
            }
          }
          else {
            return (
              <TextAreaField
                lable={item.label}
              />
            )
          }
        })}
      </div>
      <div className=" text-white font-Dana flex justify-end pl-5 ">
        <span className="bg-[#ef3f56] pt-1 pb-1 rounded-sm pr-3 pl-3">
          ثبت آدرس
        </span>
      </div>
    </div>
  );
}
