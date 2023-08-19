import { useState, ChangeEvent } from "react";
import styles from "@/styles/BlackCat.module.css";
import { useWindowSize } from "@/hooks";
import { CardContainer } from "@/components";

export default function BlackCat() {
  const [result, setResult] = useState("-");
  const [productPrice, setProductPrice] = useState("");
  const [shippingPrice, setShippingPrice] = useState("0");
  const [additionalPrice, setAdditionalPrice] = useState("0");
  const [disableAdditionalPrice, setDisableAdditionalPrice] = useState(true);
  const windowSize = useWindowSize();
  const updateResult = ({
    productPrice,
    shippingPrice,
    additionalPrice
  }: {
    productPrice: string,
    shippingPrice: string,
    additionalPrice: string,
  }) => {
    const productPriceFloat = parseFloat(productPrice);
    const shippingPriceFloat = parseFloat(shippingPrice);
    const additionalPriceFloat = parseFloat(additionalPrice);
    const totalSum = productPriceFloat + shippingPriceFloat + additionalPriceFloat;
    if (!isNaN(totalSum) && totalSum > 0) {
      // Calculate something.
      const totalPriceYen = productPriceFloat + shippingPriceFloat + additionalPriceFloat;
      let totalPriceBath = 0;
      if (totalPriceYen > 25000) totalPriceBath = totalPriceYen * 0.29;
      else if (totalPriceYen > 20000) totalPriceBath = totalPriceYen * 0.30;
      else if (totalPriceYen > 10000) totalPriceBath = totalPriceYen * 0.31;
      else totalPriceBath = totalPriceYen * 0.32;
      setResult(`${totalPriceBath.toFixed(2)}`);
    } else {
      setResult("-");
    }
  }

  // Event handlers.
  const handleProductPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setProductPrice(newValue);
    updateResult({
      productPrice: newValue,
      shippingPrice,
      additionalPrice,
    })
  }
  const handleShippingPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setShippingPrice(newValue);
    updateResult({
      productPrice,
      shippingPrice: newValue,
      additionalPrice,
    })
  }
  const handleAdditionalPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setAdditionalPrice(newValue);
    updateResult({
      productPrice,
      shippingPrice,
      additionalPrice: newValue,
    })
  }

  const handleAdditionalPriceChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setDisableAdditionalPrice(event.target.checked)
    if(event.target.checked) {
      setAdditionalPrice("0")
      updateResult({
      productPrice,
      shippingPrice,
      additionalPrice: "0",
    })
    }
  }

  return (
    <>
      <div
        className={`${styles.header__background} mb-2`}
      />
      <div className={`${windowSize.containerClass}`}>
        <div className="row">
          <div className="col-12">
            <CardContainer title={"คำนวณค่าสินค้า (โดยประมาณ)"}>
              <div className="input-group mt-3 mb-3">
                <span className="input-group-text">ค่าสินค้า</span>
                <input
                  type="number"
                  className="form-control"
                  value={productPrice}
                  onChange={handleProductPriceChange}
                />
                <span className="input-group-text">เยน</span>
              </div>
              <div className="input-group mb-1">
                <span className="input-group-text">ค่าส่ง (ในประเทศญี่ปุ่น)</span>
                <input
                  type="number"
                  className="form-control"
                  value={shippingPrice}
                  onChange={handleShippingPriceChange}
                />
                <span className="input-group-text">เยน</span>
              </div>
              <p className="text-secondary mb-3">∗ ค่าส่งและยอดส่งฟรีขึ้นอยู่กับแต่ละร้าน หากไม่แน่ใจแนะนำให้ใส่ไว้ที่ 660 เยนโดยประมาณ</p>
              <div className="input-group mb-1">
                <span className="input-group-text">ค่าบริการอื่น ๆ เพิ่มเติม</span>
                <input
                  type="number"
                  className="form-control"
                  disabled={disableAdditionalPrice}
                  value={additionalPrice}
                  onChange={handleAdditionalPriceChange}
                />
                <span className="input-group-text">เยน</span>
              </div>
              <div className="d-flex mb-3 align-items-center">
                <input
                  type="checkbox"
                  checked={disableAdditionalPrice}
                  onChange={handleAdditionalPriceChecked}
                />
                <p className="text-secondary mb-0 ms-2">ไม่มีค่าบริการเพิ่มเติม</p>
              </div>
              <div className="d-block">
                <p className="fs-3 mb-0">ราคาสุทธิ {result} บาท*</p>
                <p className="mb-0 text-secondary">
                  ∗ ราคาสุทธิดังกล่าวยังไม่รวมค่าจัดส่งจากประเทศญี่ปุ่นมายังประเทศไทย โดยขึ้นอยู่กับขนาดและน้ำหนักของสินค้า, รวมถึงวิธีการจัดส่งไปยังที่อยู่ของลูกค้า ซึ่งจะคำนวณในภายหลังอีกทีหลังจากสินค้าเดินทางถึงโกดังที่ประเทศไทยแล้ว
                </p>
              </div>
            </CardContainer>
          </div>
        </div>
      </div>
    </>
  );
}
