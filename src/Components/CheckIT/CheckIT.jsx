import React, { useState } from "react";
import { Checkbox, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { certified, selectITCheckButton, uncertified } from "../../features/iTCheckType/iTCheckTypeSlice";

export default function CheckIT() {

  const selectITCheck = useSelector(selectITCheckButton)
  const dispatch = useDispatch()

  const [selected, setSelected] = useState(false);
  
  const handleCheckIT = () => {
    selected ? dispatch(uncertified()) : dispatch(certified());
    setSelected(!selected)
  } 

  return (
    <Checkbox
      css={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
      color="gradient"
      value={selectITCheck}
      onChange={handleCheckIT}
    >
      <Text h5>
        Արդյո՞ք աշխատում եք <b>ՏՏ</b> ոլորտի հարկային
        <br />
        արտոնություններից օգտվող ընկերությունում:
      </Text>
    </Checkbox>
  );
}
