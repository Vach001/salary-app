import React from 'react'
import {v4} from "uuid";
import {Box, Button} from "@mui/material";
import styles from "./InputButtons.module.css"


const inputTypes = [
    {title: 'Իմացեք մաքուր աշխատավարձը', id: v4()},
    {title: 'Իմացեք գրանցված աշխատավարձը', id: v4()},
]

export default function InputButtons() {
  return (
    <Box>
        {
            inputTypes.map(e => (
                <Button
                    variant={"contained"}
                    className={styles.button}
                    id={e.id}
                >
                    {e.title}
                </Button>
            ))
        }
    </Box>
  )
}
