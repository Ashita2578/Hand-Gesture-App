Webcam.set({  
    width:400,
    height:650,
    image_format:'png',
    png_quality:90
});
camera= document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()    {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
  }

        console.log('ml5', ml5.version);
        classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UKWi1Z5LZ/model.json',modelLoaded);

function modelLoaded()  {
    console.log("Model Loaded");
}

function speak()    {
    var synth= window.speechSynthesis;
    speak_data_1="I predict it's "+predict;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    utterThis.rate=0.5;
    synth.speak=(utterThis);
}
function predict()
  {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
  }

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "Victory")
    {
	    document.getElementById("result_emotion_name").innerHTML = "&#128522;";
    }
    if(results[0].label == "Peace")
    {
	    document.getElementById("result_emotion_name").innerHTML = "&#129310;";
    }
    if(results[0].label == "Good Luck")
    {
	    document.getElementById("result_emotion_name").innerHTML = "&#128077;";
    }
    if(results[0].label == "Rock")
    {
	    document.getElementById("result_emotion_name").innerHTML = "&#129304;";
    }
    if(results[0].label == "Call me")
    {
	    document.getElementById("result_emotion_name").innerHTML = "&#129305;";
    }
    if(results[0].label == "Loose")
    {
	    document.getElementById("result_emotion_name").innerHTML = "&#128078;";
    }
    if(results[0].label == "Please")   
     { document.getElementById("result_emotion_name").innerHTML = "&#128591;" }
  }
}