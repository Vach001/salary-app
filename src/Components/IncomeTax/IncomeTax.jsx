import { useSelector } from "react-redux";
import { selectSalaryIncomeTax } from "../../features/incomeTax/incomeTaxSlice";
import { useCopy } from "../../hooks/useCopy";
import styles from "../../styles/taxRow.module.css";

export default function IncomeTax() {
  const incomeTax = useSelector(selectSalaryIncomeTax);
  const isIT = useSelector(
    (state) => state.iTCheckType?.iTCheckType === "CERTIFIED",
  );
  const { copied, isHovered, setIsHovered, handleCopy, handleMouseLeave } =
    useCopy();

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
