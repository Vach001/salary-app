import React from "react";
import { Checkbox, Text } from "@nextui-org/react";

export default function CheckIT() {
  return (
    <Checkbox
      color="gradient"
      defaultSelected={false}
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
