import { Checkbox, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { useTaxCalculations } from "../../hooks/useTaxCalculations";
import { netToGross } from "../../features/netToGrossSlice";
import styles from "./HealthInsuranceCheckbox.module.css";

export default function HealthInsuranceCheckbox() {
    const dispatch = useDispatch();
    const isMember = useSelector((state) => state.healthInsurance?.isMember || false);
    const year = useSelector((state) => state.year?.year || new Date().getFullYear());
    const salaryType = useSelector((state) => state.salaryType?.salaryType || "GROSS");
    const salary = useSelector((state) => state.salaryInput?.salary || 0);
    const { recalculateAll } = useTaxCalculations();

    const handleCheckboxChange = (checked) => {
        // Թարմացնել state-ը
        dispatch({ type: "SET_HEALTH_INSURANCE_MEMBER", payload: { isMember: checked, year } });
        
        // Վերահաշվարկել
        setTimeout(() => {
            if (salaryType === "NET" && salary > 0) {
                dispatch(netToGross());
            } else {
                recalculateAll();
            }
        }, 10);
    };

    if (year < 2026) return null;

return (
        <div className={styles.healthContainer}>
            <Checkbox
                className={styles.healthCheckbox}
                size="lg"
                color="primary"
                checked={isMember}
                onChange={handleCheckboxChange}
            >
                <Text className={`${styles.healthText} ${isMember ? styles.checkedText : ""}`}>
                    Առողջապահության պարտադիր ապահովագրության մասնակից եմ և 18-ից 65 տարեկան
                </Text>
            </Checkbox>
        </div>
    );
}