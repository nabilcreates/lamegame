var rx, ry, rs;

function setup() {
    createCanvas(64 * 5, 64 * 5)

    rx = 0;
    ry = 0;
    rs = 64;
}

function draw() {
    background(0)
    rect(rx, ry, rs, rs)

    boundary()

}

function boundary(){

    if(rx > width){
        rx = 0
    }

    if(rx < 0){
        rx = width
    }

    if(ry > height){
        ry = 0;
    }

    if(ry < 0){
        ry = height;
    }
    
}

function keyPressed(event) {
    switch (event.key) {
        case 'w':
            ry -= rs;
            break;

        case 'a':
            rx -= rs
            break;

        case 's':
            ry += rs
            break;

        case 'd':
            rx += rs;
            break;

    }
}