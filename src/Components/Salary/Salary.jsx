import Header from "../Header/Header";
import SalaryButtons from "../SalaryButtons/SalaryButtons";
import PensionButtons from "../PensionButtons/PensionButtons";
import { Card } from "@nextui-org/react";
import styles from "./Salary.module.css";
import CheckIT from "../CheckIT/CheckIT";
import HealthInsuranceCheckbox from "../HealthInsurance/HealthInsuranceCheckbox";
import SalaryInput from "../SalaryInput/SalaryInput";
import IncomeTax from "../IncomeTax/IncomeTax";
import PensionTax from "../PensionTax/PensionTax";
import StampFee from "../StampFee/StampFee";
import HealthInsuranceAmount from "../HealthInsurance/HealthInsuranceAmount";
import SumFee from "../SumFee/SumFee";
import FinalSalary from "../FinalSalary/FinalSalary";
import YearSelector from "../YearSelector/YearSelector";
import Explanation from "../Explanation/Explanation";
import Footer from "../Footer/Footer";

export default function Salary() {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Card className={styles.calcCard}>
          <div className={styles.calculatorSection}>
            <SalaryButtons />
            <PensionButtons />
            <CheckIT />
            <HealthInsuranceCheckbox />
            <SalaryInput />

            <div className={styles.taxesCard}>
              <IncomeTax />
              <PensionTax />
              <StampFee />
              <HealthInsuranceAmount />
              <SumFee />
              <FinalSalary />
            </div>

            <YearSelector />
          </div>

          <div className={styles.explanationSection}>
            <Explanation />
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
}
