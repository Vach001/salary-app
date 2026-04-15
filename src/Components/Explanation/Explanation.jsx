import { Card, Text } from "@nextui-org/react";
import { useSelector } from "react-redux";

export default function Explanation() {
    const salaryType = useSelector((state) => state.salaryType?.salaryType || "GROSS");
    const incomeTax = useSelector((state) => state.incomeTax?.incomeTax || 0);
    const pensionTax = useSelector((state) => state.pensionTax?.pensionTax || 0);
    const stampFee = useSelector((state) => state.stampFee?.stampFee || 0);
    const healthInsurance = useSelector((state) => state.healthInsurance?.healthInsurance || 0);
    const sumFee = useSelector((state) => state.sumFee?.sumFee || 0);
    const finalSalary = useSelector((state) => state.finalSalary?.finalSalary || 0);
    const salary = useSelector((state) => state.salaryInput?.salary || 0);

    if (salaryType === "GROSS") {
        return (
            <Card css={{ 
                padding: "20px", 
                background: "transparent", 
                boxShadow: "none",
                borderRadius: "16px"
            }}>
                <Text h4 css={{ marginBottom: "16px", color: "#1e293b" }}>
                    📋 Հաշվարկի բացատրություն
                </Text>
                <Text css={{ marginBottom: "12px", color: "#475569" }}>
                    Դուք մուտքագրել եք <b>{salary.toLocaleString()} դրամ</b> հաշվարկային (գրանցված) աշխատավարձ:
                </Text>
                <div style={{ margin: "12px 0", paddingLeft: "20px" }}>
                    <Text css={{ marginBottom: "8px" }}>📌 Եկամտային հարկ՝ <b>{incomeTax.toLocaleString()} դրամ</b></Text>
                    <Text css={{ marginBottom: "8px" }}>📌 Սոցիալական վճար՝ <b>{pensionTax.toLocaleString()} դրամ</b></Text>
                    <Text css={{ marginBottom: "8px" }}>📌 Դրոշմանիշային վճար՝ <b>{stampFee.toLocaleString()} դրամ</b></Text>
                    {healthInsurance >= 0 && (
                        <Text css={{ marginBottom: "8px" }}>📌 Պարտադիր առողջապահության վճար՝ <b>{healthInsurance.toLocaleString()} դրամ</b></Text>
                    )}
                </div>
                <Text css={{ marginTop: "12px", padding: "12px", background: "#e6f7e6", borderRadius: "12px" }}>
                    ✅ Ձեր ընդհանուր պահումները կազմում են <b>{sumFee.toLocaleString()} դրամ</b>
                </Text>
                <Text css={{ marginTop: "12px", fontWeight: "bold", color: "#16a34a", fontSize: "18px" }}>
                    🎯 Դուք կստանաք <b>{finalSalary.toLocaleString()} դրամ</b> մաքուր աշխատավարձ։
                </Text>
            </Card>
        );
    }

    return (
        <Card css={{ 
            padding: "20px", 
            background: "transparent", 
            boxShadow: "none",
            borderRadius: "16px"
        }}>
            <Text h4 css={{ marginBottom: "16px", color: "#1e293b" }}>
                📋 Հաշվարկի բացատրություն
            </Text>
            <Text css={{ marginBottom: "12px", color: "#475569" }}>
                Դուք ցանկանում եք ստանալ <b>{salary.toLocaleString()} դրամ</b> մաքուր աշխատավարձ:
            </Text>
            <div style={{ margin: "12px 0", paddingLeft: "20px" }}>
                <Text css={{ marginBottom: "8px" }}>📌 Եկամտային հարկ՝ <b>{incomeTax.toLocaleString()} դրամ</b></Text>
                <Text css={{ marginBottom: "8px" }}>📌 Սոցիալական վճար՝ <b>{pensionTax.toLocaleString()} դրամ</b></Text>
                <Text css={{ marginBottom: "8px" }}>📌 Դրոշմանիշային վճար՝ <b>{stampFee.toLocaleString()} դրամ</b></Text>
                {healthInsurance >= 0 && (
                    <Text css={{ marginBottom: "8px" }}>📌 Պարտադիր առողջապահության վճար՝ <b>{healthInsurance.toLocaleString()} դրամ</b></Text>
                )}
            </div>
            <Text css={{ marginTop: "12px", padding: "12px", background: "#e6f7e6", borderRadius: "12px" }}>
                ✅ Ձեր ընդհանուր պահումները կազմում են <b>{sumFee.toLocaleString()} դրամ</b>
            </Text>
            <Text css={{ marginTop: "12px", fontWeight: "bold", color: "#16a34a", fontSize: "18px" }}>
                🎯 Դուք պետք է գրանցեք <b>{finalSalary.toLocaleString()} դրամ</b> հաշվարկային (գրանցված) աշխատավարձ։
            </Text>
        </Card>
    );
}