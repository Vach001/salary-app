import React from "react";
import Header from "../Header/Header";
import InputButtons from "../InputButtons/InputButtons";
import PensionButtons from "../PensionButtons/PensionButtons";
import CheckIT from "../CheckIT/CheckIT";
import SalaryInput from "../SalaryInput/SalaryInput";
import IncomeTax from "../IncomeTax/IncomeTax";
import { Box } from "@mui/material";
import styles from "./Salary.module.css";

export default function Salary() {
  return (
    <Box>
      <Header />
      <Box className={styles.bodyContainer}>
          <Box className={styles.calcForm}>
              <InputButtons />
              <PensionButtons />
              <CheckIT />
              <SalaryInput />
              <Box
                sx={{
                  marginTop: "5%",
                  marginLeft: "2%",
                  marginRight: "2%",
                }}
              >
                <IncomeTax />
              </Box>
          </Box>
      </Box>
    </Box>
  );
}
