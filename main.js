setTimeout(function()
{
    img_id ="selfie1";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    SpeechSynthesis.speak(utterThis)
}, 5000);

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1"){
            document.getElementById("results1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id == "selfie2"){
            document.getElementById("results2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id == "selfie3"){
            document.getElementById("results2").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }
});
}