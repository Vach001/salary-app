import { useEffect } from "react";
import { Checkbox, Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setITCheckType, selectITCheckButton } from "../../features/iTCheckType/iTCheckTypeSlice";
import { useTaxCalculations } from "../../hooks/useTaxCalculations";
import styles from "./CheckIT.module.css";

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
  const isChecked = selectITCheck === "CERTIFIED";

  return (
    <div className={styles.checkItContainer}>
      <Checkbox
        className={styles.checkItCheckbox}
        size="lg"
        color="primary"
        checked={isChecked}
        onChange={handleCheckIT}
      >
        <Text className={`${styles.checkItText} ${isChecked ? styles.checkedText : ""}`}>
          Աշխատում եմ <b>ՏՏ</b> ոլորտի հարկային արտոնություններից օգտվող ընկերությունում
        </Text>
      </Checkbox>
    </div>
  );
}