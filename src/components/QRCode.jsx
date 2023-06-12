/* eslint-disable react/prop-types */
import QRCode from "qrcode.react";

const QRCodeComponent = ({ text }) => {
  return <QRCode value={text} />;
};

export default QRCodeComponent;
