import React, { useEffect, useState } from "react";
import { Checkbox, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { certified, selectITCheckButton, uncertified } from "../../features/iTCheckType/iTCheckTypeSlice";
import selectedTypes from "../../helpers/selectedTypes";
import { calculateGrossSalary } from "../../helpers/calculateGrossSalary";
import { calculateNetSalaryDisIT } from "../../helpers/calculateNetSalaryDisIT";
import { calculateNetSalaryWithIT } from "../../helpers/calculateNetSalaryWithIT";

export default function CheckIT() {

  const selectITCheck = useSelector(selectITCheckButton)
  const dispatch = useDispatch()

  const [selected, setSelected] = useState(false);
  
  const handleCheckIT = () => {
    selected ? dispatch(uncertified()) : dispatch(certified());
    setSelected(!selected)
  } 
  selectedTypes.iTCheckType = selectITCheck

  useEffect(()=>{
    calculateGrossSalary()
    calculateNetSalaryDisIT()
    calculateNetSalaryWithIT()
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
