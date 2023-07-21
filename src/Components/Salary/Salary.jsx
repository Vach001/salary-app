import React from "react";
import Header from "../Header/Header";
import InputButtons from "../InputButtons/InputButtons";
import PensionButtons from "../PensionButtons/PensionButtons";
import { Card } from "@nextui-org/react";
import styles from "./Salary.module.css";
import CheckIT from "../CheckIT/CheckIT";
import SalaryInput from "../SalaryInput/SalaryInput";
import IncomeTax from "../IncomeTax/IncomeTax";

export default function Salary() {
  return (
    <>
      <Header />
      <Card className={styles.calcForm}>
        <InputButtons />
        <PensionButtons />
        <CheckIT />
        <SalaryInput />
        <Card
          css={{
            marginTop: "5%",
            marginLeft: "2%",
            marginRight: "5%",
            marginBottom: "2%",
            paddingRight: "5%"
          }}
        >
          <IncomeTax />
        </Card>
      </Card>
    </>
  );
}
