import React from 'react'
import { Grid, Button, Text } from '@nextui-org/react'
import styles from "./PensionButtons.module.css"

export default function PensionButtons() {
  return (
    <>
        <Text h4 align="center" css={{padding:"3px"}}>
            Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին: Եթե այո, ապա ի՞նչ հիմունքներով:
        </Text>
        <Grid.Container className={styles.pension}>
            <Grid>
                <Button color="warning" auto ghost>
                    <b>ԱՅՈ</b>, կամավոր միացած մինչ 07/2018-ը
                </Button>
            </Grid>
            <Grid>
                <Button color="warning" auto ghost>
                    <b>ԱՅՈ</b> , պարտադիր կամ 07/2018-ից հետո միացած կամավոր
                </Button>
            </Grid>
            <Grid>
                <Button color="warning" auto ghost>
                    <b>ՈՉ</b>, մասնակից չեմ   
                </Button>
            </Grid>    
        </Grid.Container>
    </>
  )
}
