import { Grid, Button } from '@nextui-org/react'
import React from 'react'
import styles from "./InputButtons.module.css"


export default function InputButtons() {
  return (
    <>
        <Grid.Container className={styles.input}>
            <Grid>
                <Button color="primary" auto ghost>
                    Իմացեք մաքուր աշխատավարձը
                </Button>
            </Grid>
            <Grid>
                <Button color="primary" auto ghost>
                    Իմացեք գրանցված աշխատավարձը
                </Button>
            </Grid>    
        </Grid.Container>
    </>
  )
}
