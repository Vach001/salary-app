import React from "react";
import { Card, Input } from "@nextui-org/react";
// import { initialState } from "../../constants/initialState.constants";
import { selectSalarySumFee } from "../../features/sumFee/sumFeeSlice";
import { useDispatch, useSelector } from "react-redux";

// const { sumFee } = initialState;

export default function SumFee() {
  const sumFee = useSelector(selectSalarySumFee)
  const dispatch = useDispatch()

  return (
    <Card
      css={{
        bgColor: "rgb(226, 246, 180, 0.5)",
      }}
    >
      <Input rounded label="Ընդամենը հարկեր" value={sumFee} color="primary" />
    </Card>
  );
}