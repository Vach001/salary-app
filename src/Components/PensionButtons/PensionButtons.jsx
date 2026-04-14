import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPensionType, selectPensionButton } from '../../features/pensionType/pensionButtonsSlice';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Text } from '@nextui-org/react';
import { useTaxCalculations } from '../../hooks/useTaxCalculations';

export default function PensionButtons() {
  const selectPension = useSelector(selectPensionButton);
  const dispatch = useDispatch();
  const { recalculateAll } = useTaxCalculations();

  // Երբ pensionType-ը փոխվում է, վերահաշվարկել
  useEffect(() => {
    recalculateAll();
  }, [selectPension, recalculateAll]);

  const handlePensionChange = (value) => {
    dispatch(setPensionType(value));
  };

  return (
    <>
      <Text h4 align="center" css={{ padding: "3px" }}>
        Մասնակցում եք արդյո՞ք պարտադիր կուտակային կենսաթոշակային համակարգին:
      </Text>
      <ToggleButtonGroup fullWidth color="primary" value={selectPension} exclusive>
        <ToggleButton value="VOLUNTARY" onClick={() => handlePensionChange("VOLUNTARY")}>
          <b>ԱՅՈ</b>, կամավոր միացած 07/2018-ից հետո
        </ToggleButton>
        <ToggleButton value="COMPULSORY" onClick={() => handlePensionChange("COMPULSORY")}>
          <b>ԱՅՈ</b>, պարտադիր կամ մինչ 07/2018-ը միացած կամավոր
        </ToggleButton>
        <ToggleButton value="UNPAID" onClick={() => handlePensionChange("UNPAID")}>
          <b>ՈՉ</b>, մասնակից չեմ
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}