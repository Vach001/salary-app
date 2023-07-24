import React from "react";
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";

export default function CheckIT() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <FormControlLabel
            // required
            control={<Checkbox/>}
            label={`Արդյո՞ք աշխատում եք ՏՏ ոլորտի հարկային 
            արտոնություններից օգտվող ընկերությունում:`}
        />
    </Box>
  );
}
