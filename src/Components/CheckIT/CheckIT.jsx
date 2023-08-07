import React from "react";
import { Checkbox, Text } from "@nextui-org/react";
import selectedTypes from "../../helpers/selectedTypes";
import { useDispatch, useSelector } from "react-redux";
import { certified, selectITCheckButton, uncertified } from "../../features/iTCheckType/iTCheckTypeSlice";

// let iTCheckType = selectedTypes.iTCheckType;


export default function CheckIT() {
  const selectITCheck = useSelector(selectITCheckButton)
  
  const dispatch = useDispatch()
  const handleCheckIT = (iTCheckType) => iTCheckType ? dispatch(certified()) : dispatch(uncertified());

  return (
    <Checkbox
      color="gradient"
      defaultSelected={false}
      onClick={() => handleCheckIT}
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
