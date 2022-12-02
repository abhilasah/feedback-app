import QRCode from "react-qr-code"
const qrCodeGenerator = (
    <QRCode
        size={500}
        value="https://www.you.com/"
        level="H"
    />
)

const QrCode = () => {
    return (
        <div>{qrCodeGenerator}</div>
)
}
export default QrCode