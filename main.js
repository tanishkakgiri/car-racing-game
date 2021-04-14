var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var car1_width = 100;
var car1_height = 45;
var car2_width = 100;
var car2_height = 45;
background_image = "racing.jpg";
car1_image = "car1.png";
car2_image = "Car 2.jpeg";
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 65;

function add() {
    bc_ground = new Image();
    bc_ground.onload = uploadbc_ground;
    bc_ground.src = background_image;

    car1 = new Image();
    car1.onload = uploadcar1;
    car1.src = car1_image;

    car2 = new Image();
    car2.onload = uploadcar2;
    car2.src = car2_image;
}

function uploadbc_ground() {
    ctx.drawImage(bc_ground, 0, 0, canvas.width, canvas.height);

}

function uploadcar1() {
    ctx.drawImage(car1, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", moving_rover);

function moving_rover(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

//Car 1 if codes

    if (keypressed == 38) {
        console.log("up_1");
        up1();
    }
    if (keypressed == 40) {
        console.log("down_1");
        down1();
    }
    if (keypressed == 37) {
        console.log("left_1");
        left1();
    }
    if (keypressed == 39) {
        console.log("right_1");
        right1();
    }

//Car 2 if codes

    if (keypressed == 87) {
        console.log("up_2");
        up2();
    }
    if (keypressed == 83) {
        console.log("down_2");
        down2();
    }
    if (keypressed == 65) {
        console.log("left_2");
        left2();
    }
    if (keypressed == 68) {
        console.log("right_2");
        right2();
    }
}


//Car 1 function codes



function up1() {
    if (car1_y >= 10) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
    }
}

function down1() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
    }
}

function left1() {
    if (car1_x >= 10) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
    }
}

function right1() {
    if (car1_x <= 690) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
    }
}



//Car 2 function codes




function up2() {
    if (car2_y >= 10) {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
    }
}

function down2() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
    }
}

function left2() {
    if (car2_x >= 10) {
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
    }
}

function right2(){
    if (car2_x <= 690)
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbc_ground();
        uploadcar1();
        uploadcar2();
}
    
    