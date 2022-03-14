function start1(){
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier= ml5.soundClassifier("https://storage.googleapis.com/tm-model/HcMZZD-2v/model.json", modelRead)
    }
    function modelRead(){
        classifier.classify(gotResults)
    }
    function gotResults(e, r){
    if(e){
        alert("error")
    }
    else{
        console.log(r)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("nou").innerHTML= " I can hear - "+r[0].label;
    
        document.getElementById("nou").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+""
    
        img= document.getElementById("dog")
        if (r[0].label == "dog") {
            img.src = "https://i.pinimg.com/474x/32/a4/41/32a4412f3aa942ef8c2d6d143e3879d3.jpg"
        } else if (r[0].label == "cat") {
            img.src = "https://thumbs.dreamstime.com/b/cute-cartoon-cat-smiling-illustration-79019857.jpg"
        } else if (r[0].label == "crow") {
            img.src = "https://img.freepik.com/free-vector/cartoon-crow-isolated-white-background_29190-6550.jpg?size=626&ext=jpg"
        } else if (r[0].label == "Background Noise") {
            img.src = "https://webusupload.apowersoft.info/beecut/wp-content/uploads/2019/10/featuredimage-4.jpg"
        }
    }
    }