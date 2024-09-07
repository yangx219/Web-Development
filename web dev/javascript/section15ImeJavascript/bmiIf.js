function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    bmi =  Math.round(bmi);
    var interpretation;
    if(bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if(bmi >= 18.5 && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else if(bmi >24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    } 
    return interpretation;
}

/**var weight, height;

function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
} */