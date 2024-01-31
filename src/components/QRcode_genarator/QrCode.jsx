import { useState } from "react";
import QRCode from "react-qr-code";
function QrCode() {
  const [value, setValue] = useState("");
  const [qrValue, setQrvalue] = useState("");
  function handelQrGenarate() {
    setQrvalue(value);
    setValue("");
  }
  return (
    <div>
      <h1 className="text-center mb-8 text-green-800 font-bold text-xl mt-2">
        QR Code Genarator
      </h1>
      <div className=" flex gap-8 justify-center">
        <input
          type="text"
          name="qrCode"
          placeholder="Enter Your Text Here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-1 py-0.5 bg-slate-500 rounded-md font-semibold text-sm"
        />

        <button
          className="px-2 py-1 bg-green-400 rounded-md font-bold text-slate-700"
          onClick={handelQrGenarate}
          disabled={value && value.trim() !== 0 ? false : true}
        >
          Genarate
        </button>
      </div>
      <div className="flex justify-center mt-20">
        {qrValue && (
          <QRCode
            id="qr-code-value"
            value={qrValue}
            size={200}
            bgColor="#ffffff"
          />
        )}
      </div>
    </div>
  );
}

export default QrCode;
