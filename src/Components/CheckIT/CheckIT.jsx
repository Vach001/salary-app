import { useEffect } from "react";
import { Checkbox, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setITCheckType, selectITCheckButton } from "../../features/iTCheckType/iTCheckTypeSlice";
import { useTaxCalculations } from "../../hooks/useTaxCalculations";

export default function CheckIT() {
  const selectITCheck = useSelector(selectITCheckButton);
  const dispatch = useDispatch();
  const { recalculateAll } = useTaxCalculations();

  // Երբ iTCheckType-ը փոխվում է, վերահաշվարկել
  useEffect(() => {
    recalculateAll();
  }, [selectITCheck, recalculateAll]);

  const handleCheckIT = () => {
    const newValue = selectITCheck === "CERTIFIED" ? "UNCERTIFIED" : "CERTIFIED";
    dispatch(setITCheckType(newValue));
  };

  return (
    <Checkbox
      css={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      color="gradient"
      checked={selectITCheck === "CERTIFIED"}
      onChange={handleCheckIT}
    >
      <Text h5>
        Աշխատում եմ <b>ՏՏ</b> ոլորտի հարկային արտոնություններից օգտվող ընկերությունում
      </Text>
    </Checkbox>
  );
}