import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSalaryIncomeTax } from "../../features/incomeTax/incomeTaxSlice";
import styles from "./IncomeTax.module.css";

export default function IncomeTax() {
  const incomeTax = useSelector(selectSalaryIncomeTax);
  const isIT = useSelector(
    (state) => state.iTCheckType?.iTCheckType === "CERTIFIED",
  );
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(incomeTax.toString());
    setCopied(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCopied(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>
          Եկամտային հարկ {isIT ? "10%" : "20%"}
        </span>
      </div>

      <div
        onClick={handleCopy}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={styles.rightBox}
      >
        <span className={styles.rightText}>{incomeTax.toLocaleString()}</span>
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
