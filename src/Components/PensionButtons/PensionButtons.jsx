import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { compulsory, selectPensionButton, unpaid, voluntary } from '../../features/pensionType/pensionButtonsSlice';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { pensionAction } from '../../constants/pensionAction.constants';
import { Text } from '@nextui-org/react';
import selectedTypes from '../../helpers/selectedTypes';
import { calculateGrossSalary } from '../../helpers/calculateGrossSalary';
import { calculateNetSalaryDisIT } from '../../helpers/calculateNetSalaryDisIT';
import { calculateNetSalaryWithIT } from '../../helpers/calculateNetSalaryWithIT';
import { incomeTax } from '../../features/incomeTax/incomeTaxSlice';
import { pensionTax } from '../../features/pensionTax/pensionTaxSlice';
import { stampFee } from '../../features/stampFee/stampFeeSlice';
import { sumFee } from '../../features/sumFee/sumFeeSlice';
import { finalSalary } from '../../features/finalSalary/finalSalarySlice';

export default function PensionButtons() {

  const selectPension = useSelector(selectPensionButton)
  
  const dispatch = useDispatch()
  selectedTypes.pensionType = selectPension

  useEffect(()=>{
    calculateGrossSalary()
    calculateNetSalaryDisIT()
    calculateNetSalaryWithIT()
    dispatch(incomeTax())
    dispatch(pensionTax())
    dispatch(stampFee())
    dispatch(sumFee())
    dispatch(finalSalary())
  }, [selectPension])

  return (
    <>
      <Text h4 align="center" css={{padding:"3px"}}>
          Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով:
      </Text>
      <ToggleButtonGroup
        color="primary"
        value = {selectPension}
        exclusive
        aria-label="Platform"
        onChange={(e)=>e.preventDefault()}
      >
        <ToggleButton
          value={pensionAction.VOLUNTARY}
          onClick={()=>dispatch(voluntary())}
        >
        <b>ԱՅՈ</b> կամավոր միացած 07/2018-ից հետո

        </ToggleButton>
        <ToggleButton
          value={pensionAction.COMPULSORY}
          onClick={()=>dispatch(compulsory())}
        >
        <b>ԱՅՈ</b> պարտադիր կամ մինչ 07/2018-ը միացած կամավոր
        </ToggleButton>
        <ToggleButton
          value={pensionAction.UNPAID}
          onClick={()=>dispatch(unpaid())}
        >
        <b>ՈՉ</b> մասնակից չեմ
        </ToggleButton>
      </ToggleButtonGroup >
    </>
  )
}