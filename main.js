Webcam.set ({
width: 350,
height: 300,
image_format: 'png',
png_quality: 90
});

camera = document.getElementById("i_see_u");
Webcam.attach('#i_see_u');

function takeSnapShot() {
Webcam.snap(function (data_uri) {
document.getElementById("here").innerHTML = '<img id = "capture_image" src = "'+ data_uri + '" />';
});
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8_2xrhyLj/model.json', modelLoaded);

function modelLoaded() {
console.log('model Loaded!');
}

function check() {
img = document.getElementById('capture_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results) {
if (error) {
console.error(error);
}else {
console.log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}




















//never gonna give you up never gonna let you down never gonna run around and dessert you never gonna