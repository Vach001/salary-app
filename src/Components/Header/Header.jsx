import React from "react";
import {Box, Typography} from "@mui/material";
import styles from './header.module.css';

export default function Header() {
  return (
    <Box className={styles.container}>
      <Typography variant={"h5"} className={styles.text}>
        ԱՇԽԱՏԱՎԱՐՁԻ ՀԱՇՎԻՉ ԲՈԼՈՐԻ ՀԱՄԱՐ
      </Typography>
    </Box>
  );
}
