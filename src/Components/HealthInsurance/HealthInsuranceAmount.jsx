import { Card, Input } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function HealthInsuranceAmount() {
    const healthValue = useSelector((state) => state.healthInsurance?.healthInsurance || 0);
    const year = useSelector((state) => state.year?.year || new Date().getFullYear());
    
    if (year < 2026) return null;
    
    return (
        <Card css={{ bgColor: "rgb(226, 246, 180, 0.5)" }}>
            <Input rounded label="Առողջության պարտադիր ապահովագրություն" value={healthValue} color="primary" readOnly />
        </Card>
    );
}