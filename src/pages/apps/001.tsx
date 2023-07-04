import styles from "@/styles/Apps001.module.css";
import { useWindowSize } from "@/hooks";
import { CardContainer } from "@/components";

// Just some experimental code for side project. Don't mind the app name.
export default function ZeroZeroOne() {
  const windowSize = useWindowSize();

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
            <input type="number" className="form-control"/>
            <span className="input-group-text">กิโลเมตร</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">อัตราสิ้นเปลือง</span>
            <input type="number" className="form-control"/>
            <span className="input-group-text">กิโลเมตร/ลิตร</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">น้ำมันลิตรละ</span>
            <input type="number" className="form-control"/>
            <span className="input-group-text">บาท</span>
          </div>
          <p className="fs-2">ค่าน้ำมันสุทธิ XX บาท</p>
        </CardContainer>
      </div>
    </>
  );
}
