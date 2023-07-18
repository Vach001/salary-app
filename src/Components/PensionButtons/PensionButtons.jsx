import React, {useState} from 'react'
import styles from "./PensionButtons.module.css"
import {Box, Button, Typography} from "@mui/material";
import {v4} from "uuid";

const buttons = [
    { title: 'ԱՅՈ, կամավոր միացած մինչ 07/2018-ը', id: v4() },
    { title: 'ԱՅՈ , պարտադիր կամ 07/2018-ից հետո միացած կամավոր', id: v4() },
    { title: 'ՈՉ, մասնակից չեմ', id: v4() },
]

export default function PensionButtons() {
    const [ checkBtn, setCheckBtn ] = useState({});
  return (
    <Box>
        <Typography sx={{textAlign: 'center'}}>
            Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին:
            Եթե այո, ապա ի՞նչ հիմունքներով:
        </Typography>
        <Box className={styles.container}>
            {
                buttons.map(el => (
                    <Button
                        id={el.id}
                        variant={"outlined"}
                        sx={{
                            backgroundColor: checkBtn?.id === el.id ? 'orange' : '',
                            color: checkBtn?.id === el.id ? '#FFF' : ''
                        }}
                        className={styles.button}
                        onClick={ () => setCheckBtn( el ) }
                    >{el.title}</Button>
                ))
            }
        </Box>
    </Box>
  )
}
