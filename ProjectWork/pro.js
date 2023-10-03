//Code For Image Slider

function updateButtonColors(num) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`slider_btn${i}`).style.backgroundColor = "white";
    }
    document.getElementById(`slider_btn${num}`).style.backgroundColor = "gold";
}

function slider_b1() {
    document.getElementById("slider_box").style.backgroundImage = 'url("Project_images/img1.png")';
    updateButtonColors(1);
}

function slider_b2() {
    document.getElementById("slider_box").style.backgroundImage = 'url("Project_images/img2.png")';
    updateButtonColors(2);
}

function slider_b3() {
    document.getElementById("slider_box").style.backgroundImage = 'url("Project_images/img3.png")';
    updateButtonColors(3);
}

function slider_b4() {
    document.getElementById("slider_box").style.backgroundImage = 'url("Project_images/img4.png")';
    updateButtonColors(4);
}

function slider_b5() {
    document.getElementById("slider_box").style.backgroundImage = 'url("Project_images/img5.png")';
    updateButtonColors(5);
}

function slider_b6() {
    document.getElementById("slider_box").style.backgroundImage = 'url("Project_images/img6.png")';
    updateButtonColors(6);
}

const fun_array = [slider_b1, slider_b2, slider_b3, slider_b4, slider_b5, slider_b6];

let index = 0;

function color_change(num) {  //it will only be used to set eventlistener nothing else
    index = num - 1;
    document.getElementById("slider_box").style.backgroundImage = `url('Project_images/img${num}.png')`;
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`slider_btn${i}`).style.backgroundColor = "white";
    }

    document.getElementById(`slider_btn${num}`).style.backgroundColor = "gold";
}

for (let i = 1; i <= 6; i++) {
    document.getElementById(`slider_btn${i}`).addEventListener("click", function () {
        color_change(i);
    });
}


function left_click() {

    let current;
    if (index === 0) {
        index = 5;
        document.getElementById("slider_box").style.backgroundImage = `url("Project_images/img6.png")`;
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`slider_btn${i}`).style.backgroundColor = "white";
        }

        document.getElementById(`slider_btn${index + 1}`).style.backgroundColor = "gold";
    }
    else {
        index--;
        document.getElementById("slider_box").style.backgroundImage = `url("Project_images/img${index + 1}.png")`;
        for (let i = 1; i <= 6; i++) {
            document.getElementById(`slider_btn${i}`).style.backgroundColor = "white";
        }

        document.getElementById(`slider_btn${index + 1}`).style.backgroundColor = "gold";

    }
}

document.getElementById("left_btn").addEventListener("click", left_click);

function right_click() {
    if (index === 5) {
        index = 0;

        document.getElementById("slider_box").style.backgroundImage = `url("Project_images/img1.png")`;

        for (let i = 1; i <= 6; i++) {
            document.getElementById(`slider_btn${i}`).style.backgroundColor = "white";
        }

        document.getElementById(`slider_btn1`).style.backgroundColor = "gold";
    }
    else {
        index++;
        document.getElementById("slider_box").style.backgroundImage = `url("Project_images/img${index + 1}.png")`;

        for (let i = 1; i <= 6; i++) {
            document.getElementById(`slider_btn${i}`).style.backgroundColor = "white";
        }

        document.getElementById(`slider_btn${index + 1}`).style.backgroundColor = "gold";
    }
}
document.getElementById("right_btn").addEventListener("click", right_click);

function fun_rep() {

    fun_array[index]();

    index = (index + 1) % fun_array.length;

}



setInterval(fun_rep, 4000);