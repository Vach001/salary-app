import { useEffect } from "react";
import { Text } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { setITCheckType, selectITCheckButton } from "../../features/iTCheckType/iTCheckTypeSlice";
import { useTaxCalculations } from "../../hooks/useTaxCalculations";
import styles from "./CheckIT.module.css";

export default function CheckIT() {
  const selectITCheck = useSelector(selectITCheckButton);
  const dispatch = useDispatch();
  const { recalculateAll } = useTaxCalculations();

  useEffect(() => {
    recalculateAll();
  }, [selectITCheck, recalculateAll]);

  const handleCheckIT = (e) => {
    const newValue = e.target.checked ? "CERTIFIED" : "UNCERTIFIED";
    dispatch(setITCheckType(newValue));
  };

  const isChecked = selectITCheck === "CERTIFIED";

  return (
    <div className={styles.checkItContainer}>
      <label className={styles.checkItCheckbox}>
        <input type="checkbox" checked={isChecked} onChange={handleCheckIT} />
        <Text
          className={`${styles.checkItText} ${isChecked ? styles.checkedText : ""}`}
        >
          Աշխատում եմ <b>ՏՏ</b> ոլորտի հարկային արտոնություններից օգտվող ընկերությունում
        </Text>
      </label>
    </div>
  );
}
