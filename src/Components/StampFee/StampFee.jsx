import { Card, Input } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectSalaryStampFee } from "../../features/stampFee/stampFeeSlice";

export default function StampFee() {
  const stampFee = useSelector(selectSalaryStampFee);
  const salary = useSelector((state) => state.salaryInput?.salary || 0);

  const displayValue = salary > 0 ? stampFee : 0;

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input 
        rounded 
        label="Դրոշմանիշային վճար" 
        value={displayValue} 
        color="primary"
        readOnly
      />
    </Card>
  );
}