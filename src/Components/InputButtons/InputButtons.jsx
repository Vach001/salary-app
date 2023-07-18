import React, { useState } from 'react'
import { v4 } from "uuid";
import { Box, Button } from "@mui/material";
import styles from "./InputButtons.module.css"


const inputTypes = [
    { title: 'Իմացեք մաքուր աշխատավարձը', id: v4() },
    { title: 'Իմացեք գրանցված աշխատավարձը', id: v4() },
]

export default function InputButtons() {

    const [ backgroundColor, setBackgroundColor ] = useState({});

  return (
    <Box className={styles.container}>
        {
            inputTypes.map(e => (
                <Button
                    variant={"outlined"}
                    className={styles.button}
                    id={e.id}
                    onClick={() => setBackgroundColor(e)}
                    sx={{
                        backgroundColor: backgroundColor?.id === e.id ? 'rgb(58, 93, 253)' : '',
                        color: backgroundColor?.id === e.id ? '#FFF' : ''
                }}
                >
                    { e.title }
                </Button>
            ))
        }
    </Box>
  )
}
