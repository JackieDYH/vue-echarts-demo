function generateData(count) {
    let time = +new Date(2023, 0, 1);
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
    const baseValue = [];
    const valueDataPrice = [];
    for (let i = 0; i < count; i++) {
      categoryData.push(
        // echarts.format.formatTime('yyyy-MM-dd hh:mm', time, false)
        time
      );
      baseValue.push([time, generateRandomNumber().toFixed(0)]);
      valueDataPrice.push([time, generateRandomPrice().toFixed(2)]);
      time += 1000 * 60 * 1;
    }
    return {
      categoryData: categoryData,
      baseValue: baseValue,
      valueDataPrice: valueDataPrice,
    };
}

export const mockData = generateData(200)
