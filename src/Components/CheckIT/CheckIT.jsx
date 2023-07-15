import React from 'react'
import { Checkbox, Text } from '@nextui-org/react'

export default function CheckIT() {
  return (
    <Checkbox color="gradient" defaultSelected={false} css={{padding:"3px"}}>
        <Text h5>
            Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային
            համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով:
        </Text>       
    </Checkbox>
  )
}
