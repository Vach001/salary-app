import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { compulsory, selectPensionButton, unpaid, voluntary } from '../../features/pensionType/pensionButtonsSlice';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { pensionAction } from '../../constants/pensionAction.constants';
import { Text } from '@nextui-org/react';

export default function PensionButtons() {

  const selectPension = useSelector(selectPensionButton)
  const dispatch = useDispatch()

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
