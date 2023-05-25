import qrcode from 'qrcode'
import merge from 'lodash/merge'

export function generateQRCode(text, options, canvas) {
  // const toSJIS =  require('qrcode/helper/to-sjis')
  options = merge({
    margin: 1,
    width: 200,
    scale: 4,
    color: {
      dark: '#000000ff', // 6位颜色+2位明度，支持3位、4位、6位、8位
      light: '#ffffffff',
    },
    // toSJISFunc: toSJIS, // 汉字扩展
    // type: 'png',
    // rendererOpts: {
    //   quality: 0.3,
    //   width: 200,
    //   height: 200,
    // }
    // version: 7,                   // Calculated QR Code version (1 - 40) 版本越高点数越多越密，容纳数据越多
    errorCorrectionLevel: 'M', // Error Correction Level [choices: "L", "M", "Q", "H"]
    maskPattern: 4 // Calculated Mask pattern (0 - 7)
  }, options)
  // 可用于浏览器端和node端
  return new Promise((resolve, reject) => {
    if (canvas) {
      qrcode.toCanvas(canvas, text, options, function(err, data) {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    } else {
      qrcode.toDataURL(text, options, function(err, data) {
        if (err) {
          reject(err)
        }
        resolve(data) // return data:image/png;base64,...
      })
    }
  })
}
