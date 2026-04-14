import { Grid, Input } from "@nextui-org/react";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSalary, selectSalaryInput } from "../../../src/features/salaryInput/salaryInputSlice";
import { useTaxCalculations } from "../../../src/hooks/useTaxCalculations";

export default function SalaryInput() {
    const salary = useSelector(selectSalaryInput);
    const dispatch = useDispatch();
    const { recalculateAll } = useTaxCalculations();
    const year = useSelector((state) => state.year?.year || new Date().getFullYear());
    const timeoutRef = useRef(null);

    // Երբ salary-ն փոխվում է, վերահաշվարկել debounce-ով
    useEffect(() => {
        if (salary > 0) {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                recalculateAll();
            }, 500);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [salary, recalculateAll]);

    const handleSalaryChange = useCallback((value) => {
        const numericValue = parseFloat(value) || 0;
        dispatch(inputSalary(numericValue));
        dispatch({ type: "SET_SALARY", payload: { salary: numericValue, year } });
    }, [dispatch, year]);

    const handleBlur = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (salary > 0) {
            recalculateAll();
        }
    }, [salary, recalculateAll]);

    return (
        <Grid>
            <Input
                value={salary || ""}
                onChange={(evt) => handleSalaryChange(evt.target.value)}
                onBlur={handleBlur}
                type="number"
                bordered
                labelPlaceholder="Մուտքագրե՛ք Ձեր աշխատավարձի չափը"
                color="primary"
                css={{ paddingLeft: "10px", paddingRight: "10px", width: "100%" }}
            />
        </Grid>
    );
}