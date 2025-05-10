const heigh = 160;
const oddheigh = heigh % 100;
const weight = oddheigh * 9 / 10;
const weight_max = oddheigh;
const weight_min = oddheigh* 8 / 10;

//console.log("Cân nặng lý tưởng: " + weight + ", Cân nặng tối đa: " + weight_max + ", Cân nặng tối thiếu: " + weight_min + ".");

console.log(`Cân nặng lý tưởng: ${weight}, Cân nặng tối đa: ${weight_max}, Cân nặng tối thiếu: ${weight_min}`);