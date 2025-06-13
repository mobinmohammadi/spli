import React from "react";
import SectionsTitle from "../SectionsTitle/SectionsTitle";
import { DataFrequentlyAskedQuestions } from "../../../Data";
import BoxFrequentlyAskedQuestions from "./BoxFrequentlyAskedQuestions/BoxFrequentlyAskedQuestions";
export default function FrequentlyAskedQuestions() {
  return (
    <div className="container-custom">
      <SectionsTitle title="سوالات متداول" />
      <div className="mt-5 pr-10 pl-10">
        {DataFrequentlyAskedQuestions.map(item => (
          <BoxFrequentlyAskedQuestions {...item}/>
        ))}
        
      </div>
    </div>
  );
}
