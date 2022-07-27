var i = 0;
var correctCount = 0 ;
var TotalAttempts=0;
//initialize the first question
generate(0);
// generate from json array data with quiz
function generate(quiz) {
    document.getElementById("question").innerHTML = jsonData[quiz].q;
    document.getElementById("optt1").innerHTML = jsonData[quiz].option1;
    document.getElementById("optt2").innerHTML = jsonData[quiz].option2;
    document.getElementById("optt3").innerHTML = jsonData[quiz].option3;
}
var attempts = 0;
function checkAnswer() {
    if (document.getElementById("option1").checked && jsonData[i].option1 == jsonData[i].answer) {
       correctCount++;
       attempts++;
    }
    if (document.getElementById("option2").checked && jsonData[i].option2 == jsonData[i].answer) {
        correctCount++;
        attempts++;
    }
    if (document.getElementById("option3").checked && jsonData[i].option3 == jsonData[i].answer) {
        correctCount++;
        attempts++;
    }
    TotalAttempts = TotalAttempts + attempts;
    // increment i for next question
    i++;
    if(jsonData.length-1 < i){
        document.write("<body style='background-color:#420352;'>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>Your score is : "+correctCount+"  </div>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>Total Attempts  : "+TotalAttempts+" </div>");
        document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>Percentage  : "+(correctCount/5)*100+"% </div>");
        document.write("</body>");
    }
    // callback to generate
    generate(i);
}
function ReviewResult() {
    document.write("<body style='background-color:#420352;'>");
    document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>Your score is : "+correctCount+"  </div>");
    document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>Total Attempts  : "+TotalAttempts+" </div>");
    document.write("<div style='color:#ffffff;font-size:18pt;text-align:center;'>Percentage  : "+(correctCount/5)*100+"% </div>");
    document.write("</body>");
}