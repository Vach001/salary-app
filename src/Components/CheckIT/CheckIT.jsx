import React, { useEffect, useState } from "react";
import { Checkbox, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { certified, selectITCheckButton, uncertified } from "../../features/iTCheckType/iTCheckTypeSlice";
import selectedTypes from "../../helpers/selectedTypes";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT";
import { incomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { pensionTax } from "../../features/pensionTax/pensionTaxSlice";
import { stampFee } from "../../features/stampFee/stampFeeSlice";
import { sumFee } from "../../features/sumFee/sumFeeSlice";
import { finalSalary } from "../../features/finalSalary/finalSalarySlice";
import { iTAction } from "../../constants/iTAction.constants";

export default function CheckIT() {

  const [selected, setSelected] = useState(false);

  const selectITCheck = useSelector(selectITCheckButton)
  const dispatch = useDispatch()
  
  const handleCheckIT = () => {
    selected ? dispatch(uncertified()) : dispatch(certified());
    setSelected(!selected)
  } 
  selectedTypes.iTCheckType = selectITCheck

  useEffect(()=>{
    if(selectITCheck === iTAction.CERTIFIED) {
      dispatch(certified())
    } else {
      dispatch(uncertified())
    }
    calculateGrossSalary()
    calculateNetSalaryDisIT()
    calculateNetSalaryWithIT()
    dispatch(incomeTax())
    dispatch(pensionTax())
    dispatch(stampFee())
    dispatch(sumFee())
    dispatch(finalSalary())
  }, [selectITCheck])

  return (
    <Checkbox
      css={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
      color="gradient"
      value={selectITCheck}
      onChange={handleCheckIT}
    >
      <Text h5>
        Արդյո՞ք աշխատում եք <b>ՏՏ</b> ոլորտի հարկային
        <br />
        արտոնություններից օգտվող ընկերությունում:
      </Text>
    </Checkbox>
  );
}
