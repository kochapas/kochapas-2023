import { useState, ChangeEvent } from "react";
import styles from "@/styles/GrabCarTools.module.css";
import { useWindowSize } from "@/hooks";
import { CardContainer } from "@/components";

// Just some experimental code for side project. Don't mind the app name.
export const GrabCarTools = () => {
  const [result, setResult] = useState("-");
  const [costPerKm, setCostPerKm] = useState("-");
  const [totalKm, setTotalKm] = useState("");
  const [consumptionRate, setConsumptionRate] = useState("");
  const [fuelCost, setFuelCost] = useState("");
  const windowSize = useWindowSize();
  const updateResult = ({
    totalKm,
    consumptionRate,
    fuelCost
  }: {
    totalKm: string,
    consumptionRate: string,
    fuelCost: string,
  }) => {
    const totalKmFloat = parseFloat(totalKm);
    const consumptionRateFloat = parseFloat(consumptionRate);
    const fuelCostFloat = parseFloat(fuelCost);
    if (!!totalKmFloat && !!consumptionRateFloat && !!fuelCostFloat) {
      // Calculate something.
      // Drive safe, Dad.
      const totalLiter = totalKmFloat / consumptionRateFloat;
      const totalFuelCost = totalLiter * fuelCostFloat;
      const totalCostPerKm = totalFuelCost / totalKmFloat;
      setResult(`${totalFuelCost.toFixed(2)}`);
      setCostPerKm(`${totalCostPerKm.toFixed(2)}`)
    } else {
      setResult("-");
      setCostPerKm("-")
    }
  }

  // Event handlers.
  const handleTotalKmChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setTotalKm(newValue);
    updateResult({
      totalKm: newValue,
      consumptionRate,
      fuelCost,
    })
  }
  const handleConsumptionRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setConsumptionRate(newValue);
    updateResult({
      totalKm,
      consumptionRate: newValue,
      fuelCost,
    })
  }
  const handlefuelCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setFuelCost(newValue);
    updateResult({
      totalKm,
      consumptionRate,
      fuelCost: newValue,
    })
  }

  return (
    <>
      <div
        className={`${styles.header__background} mb-2`}
        style={{ height: "300px" }}
      />
      <div className={`${windowSize.containerClass}`}>
        <CardContainer title={"คำนวณค่าน้ำมัน"}>
          <div className="input-group mt-3 mb-3">
            <span className="input-group-text">ใช้รถไป</span>
            <input
              type="number"
              className="form-control"
              value={totalKm}
              onChange={handleTotalKmChange}
            />
            <span className="input-group-text">กิโลเมตร</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">อัตราสิ้นเปลือง</span>
            <input
              type="number"
              className="form-control"
              value={consumptionRate}
              onChange={handleConsumptionRateChange}
            />
            <span className="input-group-text">กิโลเมตร/ลิตร</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">น้ำมันลิตรละ</span>
            <input
              type="number"
              className="form-control"
              value={fuelCost}
              onChange={handlefuelCostChange}
            />
            <span className="input-group-text">บาท</span>
          </div>
          <div className="d-block">
            <p className="fs-2 mb-0">ค่าน้ำมันสุทธิ {result} บาท</p>
            <p className="fs-4">{costPerKm} บาท / 1 กิโลเมตร</p>
          </div>
        </CardContainer>
      </div>
    </>
  );
}
