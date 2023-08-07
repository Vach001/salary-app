import React from "react";
import { Card, Input } from "@nextui-org/react";
// import { initialState } from "../../constants/initialState.constants";
import { selectSalaryStampFee } from "../../features/stampFee/stampFeeSlice";
import { useDispatch, useSelector } from "react-redux";

// const { droshmanishayin } = initialState;

export default function StampFee() {
  const stampFee = useSelector(selectSalaryStampFee)
  const dispatch = useDispatch()

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="Դրոշմանիշային վճար" value={stampFee} color="primary" />
    </Card>
  );
}
