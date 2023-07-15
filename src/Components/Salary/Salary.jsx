import React from 'react'
import Header from '../Header/Header'
import InputButtons from '../InputButtons/InputButtons'
import PensionButtons from '../PensionButtons/PensionButtons'
import { Card } from '@nextui-org/react'
import styles from "./Salary.module.css"
import CheckIT from "../CheckIT/CheckIT"

export default function Salary() {
  return (
    <>
        <Header />
        <Card className={styles.calcForm}>            
            <InputButtons />
            <PensionButtons />
            <CheckIT />
        </Card>
    </>
  )
}
