var canvas = document.querySelector('canvas');

canvas.width =1420;
canvas.height = 1000;

var c = canvas.getContext('2d');

var skinColor = "#f1ac37"; // Dog Orange
var noseColor = "#34276f"; // Purple
var mouthColor = "#6b2525"; // Dark Red
var tongueColor = "#ea5d5d"; // Pink
var teetheyeColor = "#ffffff"; // White
var noseColor = "#34276f"; // Purple
var noseColor2 = "#a198c5ff"; // Light Purple

c.fillStyle = "#87ceeb"; // Sky Blue
c.fillRect (0, 0, canvas.width, canvas.height);



c.strokeStyle = "black";
c.lineWidth = 6;

//==========Dog Color Only Below==========
c.translate(-150, 120);
c.beginPath();
        c.moveTo(630, 140); // Top Head
        c.quadraticCurveTo(480, 110, 470, 320);
        c.quadraticCurveTo(460, 420, 470, 450);
        c.quadraticCurveTo(500, 545, 540, 450); 

        c.quadraticCurveTo(535, 420, 523, 300); // Jaw
        // Body Bottom
        c.quadraticCurveTo(780, 620, 1200, 390);
        c.quadraticCurveTo(1255, 260, 1100, 266);
        // Body Top
        c.quadraticCurveTo(820, 390, 640, 245);
        c.lineTo(630, 140); // Close
        c.fillStyle = skinColor;
        c.fill();

        //fillup head color
        c.beginPath();
        c.moveTo(635, 245); 
        c.quadraticCurveTo(820, 240, 636, 135);
        c.fillStyle = skinColor;
        c.fill();

        //fillup head color (2)
        c.beginPath();
        c.moveTo(0, 0); // Nose
        c.ellipse(
            702,        // Center X coordinate
            180,        // Center Y coordinate
            50,         // Horizontal radius (radiusX - making it wide)
            41,         // Vertical radius (radiusY - making it short)
            0.9,          // Rotation (0 for no rotation)
            0,          // Start angle (0 radians)
            2 * Math.PI // End angle (full circle)
        );
        c.fillStyle = skinColor;
        c.fill();
    
    

        //mouth color fill
        c.beginPath();
        c.moveTo(545, 217); 
        c.quadraticCurveTo(565, 355, 595, 290); 
        c.quadraticCurveTo(600, 260, 615, 240); 
        c.quadraticCurveTo(580, 230, 545, 217); 
        c.fillStyle = mouthColor;
        c.fill();

        //tongue color fill
        c.beginPath();
        c.moveTo(565, 300);
        c.quadraticCurveTo(595, 320, 610, 300); 
        c.quadraticCurveTo(580, 270, 560, 285); 
        c.fillStyle = tongueColor;
        c.fill();

        //2nd leg fill
        c.save(); 
        c.translate(100, 0);
        c.beginPath();
        c.moveTo(620, 455);
        c.quadraticCurveTo(659, 500, 650, 657);
        c.quadraticCurveTo(610, 610, 610, 640);
        c.quadraticCurveTo(610, 650, 615, 690);
        c.quadraticCurveTo(610, 720, 680, 690);
        c.quadraticCurveTo(683, 500, 670, 470);
        c.fillStyle = skinColor;
        c.fill();
        c.restore(); 

        //4th leg and tail fill
        c.save();
        c.translate(440, 0);
        c.beginPath();
        c.moveTo(620, 455);
        c.quadraticCurveTo(659, 500, 650, 657);
        c.quadraticCurveTo(610, 610, 610, 640);
        c.quadraticCurveTo(610, 650, 615, 690);
        c.quadraticCurveTo(610, 720, 680, 690);
        c.quadraticCurveTo(683, 500, 670, 430);
        c.fillStyle = skinColor;
        c.fill();

        //tail color fill
        c.beginPath();
        c.moveTo(776, 340);
        c.quadraticCurveTo(960, 265, 900, 100);
        c.quadraticCurveTo(850, 5, 850, 220);
        c.quadraticCurveTo(840, 290, 760, 290);
        c.fillStyle = skinColor;
        c.fill();
        c.restore();


//==========Dog Outline Only Below==========

//linya sa taas ng katawan
c.beginPath();
c.moveTo(640, 245);
c.quadraticCurveTo(820, 390, 1100, 265);
c.stroke();
c.beginPath();
c.moveTo(523, 300);
c.quadraticCurveTo(780, 620, 1200, 390);
c.quadraticCurveTo(1255, 260, 1100, 266);
c.stroke();

//linya sa taas ng bunganga
c.beginPath();
c.fiillStyle = skinColor;  
c.moveTo(540, 215);
c.quadraticCurveTo(700, 290, 750, 190);
c.stroke();

//ilong
c.beginPath();
c.arc(749, 160, 45, 0, Math.PI * 2, false);
c.strokeStyle = "black";
c.fillStyle = noseColor;
c.fill();
c.stroke(); 

//inner ilong
c.beginPath();
c.arc(734, 149, 20, 0, Math.PI * 2, false);
c.fillStyle = noseColor2;
c.fill(); 

//linya sa right ng mata nung nasa left
c.beginPath();
c.moveTo(668, 140);
c.quadraticCurveTo(700, 132, 712, 132);
c.stroke();

//linya sa left ng mata nung nasa left hanggang tenga
c.beginPath();
c.moveTo(630, 140);
c.quadraticCurveTo(480, 110, 470, 320);
c.quadraticCurveTo(460, 420, 470, 450);
c.quadraticCurveTo(500, 550, 542, 450);
c.moveTo(520, 240);
c.quadraticCurveTo( 520, 350, 540, 400);
c.quadraticCurveTo( 550, 450, 540, 450);
c.stroke();

//buhok 1
c.beginPath();
c.moveTo(500, 190);
c.quadraticCurveTo(480, 150, 430, 150);
c.stroke();

//buhok 2
c.beginPath();
c.moveTo(500, 190);
c.quadraticCurveTo(460, 160, 380, 180);
c.stroke();

//buhok 3
c.beginPath();
c.moveTo(500, 190);
c.quadraticCurveTo(460, 180, 440, 200);
c.stroke();

//linya sa taas ng mata (sa kaliwa)
c.beginPath();
c.fillStyle = teetheyeColor;
c.moveTo(680 , 155);
c.quadraticCurveTo(655, 115, 618, 150);
c.fill();
c.stroke();

//pupil taas na mata (sa kaliwa)
c.beginPath();
c.arc(665, 145, 8, 0, Math.PI * 2, false);
c.fillStyle = "#000000ff";
c.fill();

//linya sa baba ng mata (sa kaliwa)
c.beginPath();
c.fillStyle = "#ffffffff";
c.moveTo(680 , 153);
c.quadraticCurveTo(655, 165, 618, 148);
c.fill();
c.stroke();

//linya ng bibig sa kaliwa (sa kaliwa)
c.beginPath();
c.moveTo(545, 217);
c.quadraticCurveTo(558, 355, 620, 290);
c.stroke();

//linya ng bibig sa kaliwa (sa kaliwa) (2)
c.beginPath();
c.moveTo(615, 240);
c.quadraticCurveTo(590, 280, 600, 292);
c.stroke();

//dila(sa kaliwa) (3)
c.beginPath();
c.fillStyle = 
c.moveTo(560, 280);
c.quadraticCurveTo(590, 280, 610, 303);
c.stroke();

//ngipin kaliwa (sa kaliwa)
c.beginPath();
c.fillStyle = teetheyeColor;
c.moveTo(555, 222);
c.quadraticCurveTo(559, 270, 570, 230);
c.fill();
c.stroke();

//ngipin gitna  (sa kaliwa)
c.beginPath();
c.fillStyle = teetheyeColor;
c.moveTo(575, 228);
c.quadraticCurveTo(578, 274, 592, 235);
c.fill();
c.stroke();

//ngipin kanan  (sa kaliwa)
c.beginPath();
c.fillStyle = teetheyeColor;
c.moveTo(595, 237);
c.quadraticCurveTo(598, 277, 612, 239);
c.fill();
c.stroke();

c.beginPath();
c.fillStyle = "#ffffffff";
c.ellipse(
    605,        // Center X coordinate
    179,        // Center Y coordinate
    50,         // Horizontal radius (radiusX - making it wide)
    23,         // Vertical radius (radiusY - making it short)
    -0.1,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
);
c.fill();
c.stroke();

//pupil baba na mata (sa kaliwa)
c.beginPath();
c.arc(632, 165, 10, 0, Math.PI * 2, false);
c.fillStyle = "#000000ff";
c.fill();

//front left color foot
c.beginPath();
c.moveTo(640, 395); 
c.quadraticCurveTo(659, 500, 670, 650); 
c.quadraticCurveTo(610, 570, 610, 640);
c.quadraticCurveTo(610, 650, 615, 690);
c.quadraticCurveTo(610, 720, 700, 690);
c.quadraticCurveTo(683, 500, 690, 400); 
c.fillStyle = skinColor;
c.fill();

//back left color foot
c.save();
c.translate(330, 0);
c.beginPath();
c.moveTo(640, 445);
c.quadraticCurveTo(659, 500, 670, 650);
c.quadraticCurveTo(610, 570, 610, 640);
c.quadraticCurveTo(610, 650, 615, 690);
c.quadraticCurveTo(610, 720, 700, 690);
c.quadraticCurveTo(683, 500, 690, 425);
c.fillStyle = skinColor;
c.fill();
c.restore();

c.save();
//1st paa (left line)
c.beginPath();
c.moveTo(640, 395);
c.quadraticCurveTo(659, 500, 670, 650);
c.stroke();
//1st paa (right line)
c.beginPath();
c.moveTo(690, 400);
c.quadraticCurveTo(683, 500, 700, 690);
c.stroke();
//1st paa (down part)
c.beginPath();
c.moveTo(679, 659);
c.quadraticCurveTo(610, 570, 610, 640);
c.quadraticCurveTo(610, 650, 615, 690);
c.quadraticCurveTo(610, 720, 700, 690);
c.stroke();
c.restore();

c.save();
c.translate(100, 0);
//2nd paa (left line)
c.beginPath();
c.moveTo(620, 455);
c.quadraticCurveTo(659, 500, 650, 657);
c.stroke();
//2nd paa (right line)
c.beginPath();
c.moveTo(670, 470);
c.quadraticCurveTo(683, 500, 680, 690);
c.stroke();
//2nd paa (down part)
c.beginPath();
c.moveTo(650, 659);
c.quadraticCurveTo(610, 610, 610, 640);
c.quadraticCurveTo(610, 650, 615, 690);
c.quadraticCurveTo(610, 720, 680, 690);
c.stroke();
c.restore();

c.save();
c.translate(330, 0);
//3rd paa (left line)
c.beginPath();
c.moveTo(640, 445);
c.quadraticCurveTo(659, 500, 670, 650);
c.stroke();
//3rd paa (right line)
c.beginPath();
c.moveTo(690, 425);
c.quadraticCurveTo(683, 500, 700, 690);
c.stroke();
//3rd paa (down part)
c.beginPath();
c.moveTo(679, 659);
c.quadraticCurveTo(610, 570, 610, 640);
c.quadraticCurveTo(610, 650, 615, 690);
c.quadraticCurveTo(610, 720, 700, 690);
c.stroke();
c.restore();

c.save();
c.translate(440, 0);
//4th paa (left line)
c.beginPath();
c.moveTo(620, 455);
c.quadraticCurveTo(659, 500, 650, 657);
c.stroke();
//4th paa (right line)
c.beginPath();
c.moveTo(670, 430);
c.quadraticCurveTo(683, 500, 680, 690);
c.stroke();
//4th paa (down part)
c.beginPath();
c.moveTo(650, 659);
c.quadraticCurveTo(610, 610, 610, 640);
c.quadraticCurveTo(610, 650, 615, 690);
c.quadraticCurveTo(610, 720, 680, 690);
c.stroke();
c.restore();

//buntot ng aso
c.save();
c.translate(440, 0); // 100 + 230 + 110
c.beginPath();
c.moveTo(776, 340);
c.quadraticCurveTo(960, 265, 900, 100);
c.quadraticCurveTo(850, 5, 850, 220);
c.quadraticCurveTo(840, 290, 760, 290);
c.stroke();
c.restore();

// spots sa katawan 1
c.save();
c.translate(20, 190); 
c.beginPath();
c.fillStyle = "#d77c33";
c.strokeStyle = "#d77c33"
c.lineWidth = 0.6;
c.ellipse(
    700,        // Center X coordinate
    189,        // Center Y coordinate
    50,         // Horizontal radius (radiusX - making it wide)
    23,         // Vertical radius (radiusY - making it short)
    0.3,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
);
c.fill();
c.stroke();

// spots sa katawan 2
c.translate(0, 0); 
c.beginPath();
c.fillStyle = "#d77c33";
c.strokeStyle = "#d77c33"
c.lineWidth = 0.6;
c.ellipse(
    960,        // Center X coordinate
    210,        // Center Y coordinate
    50,         // Horizontal radius (radiusX - making it wide)
    23,         // Vertical radius (radiusY - making it short)
    0,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
);
c.fill();
c.stroke();
c.restore();

// spots sa katawan 3
c.translate(0, 0); 
c.beginPath();
c.fillStyle = "#d77c33";
c.strokeStyle = "#d77c33"
c.lineWidth = 0.6;
c.ellipse(
    1150,        // Center X coordinate
    350,        // Center Y coordinate
    50,         // Horizontal radius (radiusX - making it wide)
    23,         // Vertical radius (radiusY - making it short)
    5,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
);
c.fill();
c.stroke();
c.restore();



//fill up color ear
c.save();
c. beginPath();
c.fillStyle = "#f1ac37";
c.ellipse(
    520,        // Center X coordinate
    425,        // Center Y coordinate
    47,         // Horizontal radius (radiusX - making it wide)
    22,         // Vertical radius (radiusY - making it short)
    1.5,          // Rotation (0 for no rotation)
    0,          // Start angle (0 radians)
    2 * Math.PI // End angle (full circle)
)
c.fill();
c.restore();













