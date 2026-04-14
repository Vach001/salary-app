import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSalaryStampFee } from "../../features/stampFee/stampFeeSlice";
import styles from "./StampFee.module.css";

export default function StampFee() {
  const stampFee = useSelector(selectSalaryStampFee);
  const salary = useSelector((state) => state.salaryInput?.salary || 0);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const displayValue = salary > 0 ? stampFee : 0;

  const handleCopy = () => {
    navigator.clipboard.writeText(displayValue.toString());
    setCopied(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCopied(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>Դրոշմանիշային վճար</span>
      </div>

      <div
        onClick={handleCopy}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={styles.rightBox}
      >
        <span className={styles.rightText}>{displayValue.toLocaleString()}</span>
        {!copied && isHovered && (
          <span className={styles.copyTooltip}>Պատճենել</span>
        )}
        {copied && isHovered && (
          <span className={styles.copyTooltip}>Պատճենված է</span>
        )}
      </div>
    </div>
  );
}