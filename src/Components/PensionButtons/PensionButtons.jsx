import React from 'react'
import { Button, Text } from '@nextui-org/react'
import styles from "./PensionButtons.module.css"
import { pensionAction } from '../../constants/pensionAction.constants';
import selectedTypes from '../../helpers/selectedTypes';

let pensionType = selectedTypes.pensionType;
const { VOLUNTARY, COMPULSORY, UNPAID } = pensionAction;

export default function PensionButtons() {
 
    const handleVoluntary = () => {
        pensionType = VOLUNTARY;
      };
    const handleCompulsory = () => {
        pensionType = COMPULSORY;
    };
    const handleUnpaid = () => {
        pensionType = UNPAID;
    };

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
            onPress={handleVoluntary}
            ghost
            >
            <b>ԱՅՈ</b>, կամավոր միացած 07/2018-ից հետո
            </Button>
            <Button
            onPress={handleCompulsory}
            ghost
            >
            <b>ԱՅՈ</b> , պարտադիր կամ մինչ 07/2018-ը միացած կամավոր
            </Button>
            <Button
            onPress={handleUnpaid}
            ghost
            >
            <b>ՈՉ</b>, մասնակից չեմ
            </Button>
        </Button.Group >
    </>
  )
}
