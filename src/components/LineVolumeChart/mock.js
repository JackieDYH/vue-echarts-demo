function generateData(count) {
    let baseValue = Math.random() * 1000;
    let time = +new Date(2023, 0, 1);
    let smallBaseValue;
    function generateRandomNumber() {
        let min = 50000000;
        let max = 2000000000;
        let randomNumber = Math.random() * (max - min) + min;
        return randomNumber;
    }
    function generateRandomPrice() {
        let min = 5000;
        let max = 30000;
        let randomNumber = Math.random() * (max - min) + min;
        return randomNumber;
    }
    const categoryData = [];
    const valueDataBN = [];
    const valueDataBIT = [];
    const valueDataOK = [];
    const valueDataPrice = [];
    for (let i = 0; i < count; i++) {
      categoryData.push(
        // echarts.format.formatTime('yyyy-MM-dd hh:mm', time, false)
        time
      );
      valueDataBN.push([time, generateRandomNumber().toFixed(0)]);
      valueDataBIT.push([time, generateRandomNumber().toFixed(0)]);
      valueDataOK.push([time, generateRandomNumber().toFixed(0)]);
      valueDataPrice.push([time, generateRandomPrice().toFixed(2)]);
      time += 1000 * 60 * 1;
    }
    return {
      categoryData: categoryData,
      valueDataBN: valueDataBN,
      valueDataBIT: valueDataBIT,
      valueDataOK: valueDataOK,
      valueDataPrice: valueDataPrice,
    };
}

export const mockData = generateData(200)

/**
 * mock数据示例
 * categoryData 为时间戳数据 （未使用）
 * valueDataBN 为binance相应时间戳成交量数据
 * valueDataBIT 为bitget相应时间戳成交量数据
 * valueDataOK 为okx相应时间戳成交量数据
 * valueDataPrice 为相应时间戳币种价格数据
 */
// {
//     "categoryData": [1672502400000,1672502460000,1672502520000],
//     "valueDataBN": [[1672502400000,"0.001058"],[1672502460000,"0.003095"],[1672502520000,"0.004657"]],
//     "valueDataBIT": [[1672502400000,"-0.001481"],[1672502460000,"-0.001805"],[1672502520000,"0.003304"]],
//     "valueDataOK": [[1672502400000,"0.002623"],[1672502460000,"0.001223"],[1672502520000,"-0.001003"]],
//     "valueDataPrice": [[1672502400000,"1906.75"],[1672502460000,"2967.62"],[1672502520000,"1618.48"]]
// }