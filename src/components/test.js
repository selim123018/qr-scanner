import React, { useState, useRef } from 'react'
import QrReader from 'react-qr-reader'
import QRCode from 'qrcode.react'
import ReactToPrint from 'react-to-print';

const data={
  ItemName: "Speed Can",
  price: 35,
  discount: 5
}

const Test=()=> {
  const [result, setResult] = useState('')
  const printRef = useRef();

  const handleScan = data => {
    console.log(data)
    if (data) {
      setResult(data)
    }
  }
  const handleError = err => {
    console.error(err)
  }
  
  return (
    <React.Fragment>
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '20%' }}
        />
        <p>{result}</p>
      </div>
      <div>
        <div ref={printRef}>
          <QRCode
            id="123456"
            value={JSON.stringify(data)}
            size={290}
            level={"H"}
            includeMargin={true}
          />
        </div>
        <ReactToPrint
          trigger={() => (
            <button className="btn btn-primary">
              Print
            </button>
          )}
          content={() => printRef.current}
        />
      </div>
    </React.Fragment>
  )
}

export default Test;