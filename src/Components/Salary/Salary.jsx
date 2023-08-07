import React from "react";
import Header from "../Header/Header";
import SalaryButtons from "../SalaryButtons/SalaryButtons";
import PensionButtons from "../PensionButtons/PensionButtons";
import { Card } from "@nextui-org/react";
import styles from "./Salary.module.css";
import CheckIT from "../CheckIT/CheckIT";
import SalaryInput from "../SalaryInput/SalaryInput";
import IncomeTax from "../IncomeTax/IncomeTax";
import PensionTax from "../PensionTax/PensionTax";
import StampFee from "../StampFee/StampFee";
import SumFee from "../SumFee/SumFee";
import FinalSalary from "../FinalSalary/FinalSalary";

export default function Salary() {
  return (
    <>
      <Header />
      <Card className={styles.calcForm}>
        <SalaryButtons />
        <PensionButtons />
        <CheckIT />
        <SalaryInput />

        {/* Output block */}

        <Card
          css={{
            marginRight: "3%",
            marginTop: "2%",
            padding: "1%",
          }}
        >
          <IncomeTax />
          <PensionTax />
          <StampFee />
          <SumFee />
          <FinalSalary />
        </Card>
        
      </Card>
    </>
  );
}
