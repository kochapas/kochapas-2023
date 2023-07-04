import { useState, ChangeEvent } from "react";
import styles from "@/styles/Apps001.module.css";
import { useWindowSize } from "@/hooks";
import { CardContainer } from "@/components";

// Just some experimental code for side project. Don't mind the app name.
export default function ZeroZeroOne() {
  const [result, setResult] = useState("-");
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
      console.log({
        totalKmFloat,
        consumptionRateFloat,
        fuelCostFloat
      })
    } else {
      setResult("-");
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
          <p className="fs-2">ค่าน้ำมันสุทธิ {result} บาท</p>
        </CardContainer>
      </div>
    </>
  );
}
