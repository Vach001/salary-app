import React from 'react'
import { Button, Text } from '@nextui-org/react'
// import { pensionAction } from '../../constants/pensionAction.constants';
// import selectedTypes from '../../helpers/selectedTypes';
import { useDispatch, useSelector } from 'react-redux';
import { compulsory, selectPensionButton, unpaid, voluntary } from '../../features/pensionType/pensionButtonsSlice';

// let pensionType = selectedTypes.pensionType;
// const { VOLUNTARY, COMPULSORY, UNPAID } = pensionAction;

export default function PensionButtons() {

  const selectSalary = useSelector(selectPensionButton)
  const dispatch = useDispatch()
 
    // const handleVoluntary = () => {
    //     pensionType = VOLUNTARY;
    //   };
    // const handleCompulsory = () => {
    //     pensionType = COMPULSORY;
    // };
    // const handleUnpaid = () => {
    //     pensionType = UNPAID;
    // };

  return (
    <>
        <Text h4 align="center" css={{padding:"3px"}}>
            Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով:
        </Text>
        <Button.Group 
        size="md" 
        vertical 
        bordered
        ghost
        autoFocus
        >
            <Button
            onPress={() => dispatch(voluntary())}
            ghost
            >
            <b>ԱՅՈ</b>, կամավոր միացած 07/2018-ից հետո
            </Button>
            <Button
            onPress={() => dispatch(compulsory())}
            ghost
            >
            <b>ԱՅՈ</b> , պարտադիր կամ մինչ 07/2018-ը միացած կամավոր
            </Button>
            <Button
            onPress={() => dispatch(unpaid())}
            ghost
            >
            <b>ՈՉ</b>, մասնակից չեմ
            </Button>
        </Button.Group >
    </>
  )
}
