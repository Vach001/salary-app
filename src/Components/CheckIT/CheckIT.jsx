import React from "react";
import { Checkbox, Text } from "@nextui-org/react";
import selectedTypes from "../../helpers/selectedTypes";

let iTCheckType = selectedTypes.iTCheckType;

const handleCheckIT = (iTCheckType) => !iTCheckType;
 
export default function CheckIT() {
  return (
    <Checkbox
      color="gradient"
      defaultSelected={false}
      onChange={handleCheckIT}
      css={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Text h5>
        Արդյո՞ք աշխատում եք <b>ՏՏ</b> ոլորտի հարկային
        <br />
        արտոնություններից օգտվող ընկերությունում:
      </Text>
    </Checkbox>
  );
}
