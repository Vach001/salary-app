import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSalaryPensionTax } from "../../features/pensionTax/pensionTaxSlice";
import styles from "./PensionTax.module.css";

export default function PensionTax() {
  const pensionTax = useSelector(selectSalaryPensionTax);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pensionTax.toString());
    setCopied(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCopied(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <span className={styles.leftText}>Սոցիալական վճար</span>
      </div>

      <div
        onClick={handleCopy}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={styles.rightBox}
      >
        <span className={styles.rightText}>{pensionTax.toLocaleString()}</span>
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