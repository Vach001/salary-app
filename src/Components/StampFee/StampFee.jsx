import React from "react";
import { Card, Input } from "@nextui-org/react";
import { selectSalaryStampFee } from "../../features/stampFee/stampFeeSlice";
import { useSelector } from "react-redux";

export default function StampFee() {
  const selectStampFee = useSelector(selectSalaryStampFee)

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input 
      rounded 
      label="Դրոշմանիշային վճար" 
      value={selectStampFee} 
      color="primary"
      />
    </Card>
  );
}
