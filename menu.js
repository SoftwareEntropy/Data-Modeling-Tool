function updateStarForceOptions() {
    var selectedFace = document.getElementById("selectFace").value;
    var starForceSelect = document.getElementById("faceStarForce");
    var faceImage2 = document.getElementById("faceImage2");
    starForceSelect.innerHTML = "";

    var options;
    switch(selectedFace) {
        case "condensedPowerCrystal":
            options = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            faceImage2.src = "images/01012478.img.info.icon._outlink.png";
            break;
        case "twilightMark":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            faceImage2.src = "images/01012757.img.info.icon._outlink.png";
            break;
        case "sweetwaterTattoo":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            faceImage2.src = "images/01012438.img.info.icon._outlink.png";
            break;
        case "berserked":
            options = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            faceImage2.src = "images/01012632.img.info.icon._outlink.png";
            break;
        default:
            options = [0];
            faceImage2.src = "";
    }

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.text = options[i];
        option.value = options[i];
        starForceSelect.add(option);
    }
}



