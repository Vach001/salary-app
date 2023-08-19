import React from "react";
import { Card, Input } from "@nextui-org/react";
import { selectSalarySumFee } from "../../features/sumFee/sumFeeSlice";
import { useSelector } from "react-redux";

export default function SumFee() {
  const sumFee = useSelector(selectSalarySumFee)

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input
      rounded 
      label="Ընդամենը հարկեր" 
      value={sumFee} 
      color="primary" 
      />
    </Card>
  );
}