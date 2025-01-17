// Main

arr = ['a', 'b', 'c', 'd', 'e'];
each = []
size = arr.length;
edge = [];
dimension = 30;
rel = 0;
ctx = document.querySelector("canvas").getContext("2d");

dx = ctx.canvas.width / size;
dy = ctx.canvas.height / size;
create_edges();
create_graph();

// Utility

function create_edges() {
    count = 0;
    
    for(let i=0; i<size; i++) {
        let temp = []
    
        for(let i=0; i<size; i++) {
            temp.push(0);
        }
        edge.push(temp);
    }

    for(let i = 0; i< size; i++) {
        each.push(Math.floor(Math.random() * (size - 1)) + 1)
    }

    for(let i=0; i< size; i++) {
        if(count >= 10) {
            break
        }
        for(let j=0; j< size; j++) {
            if(count >= 20) {
                break
            }
            else {
                let p = Math.floor(Math.random()*6 + 1) - 1;
                if(p == 0) {

                } else if(p == 1) {
                    console.log(p)
                    edge[i][j] = 1;
                    count ++;
                }
            }
        }	
    }
}


function create_graph() {

    for(let i=0; i< size; i++) {
        for(let j=0; j< size; j++) {
            if(+edge[i][j] == 1) {
                console.log(edge[i][j])
                ctx.strokeStyle = "black";
                
                let x = each[i] * dx + dimension / 2 + rel;
                let y = i * dy + dimension / 2 + rel;
                console.log(x, y);
                ctx.moveTo(x, y);
                x = each[j] * dx + dimension / 2 + rel;
                y = j * dx + dimension / 2 + rel;
                ctx.lineTo(x, y);
                ctx.stroke();
            }
        }	
    }
    for(let i=0; i< size; i++) {
        ctx.fillStyle = "red";
        ctx.moveTo(each[i] * dx, i* dy);
        let x = each[i] * dx + (dimension / 2) + rel;
        let y = i * dy + dimension / 2 + rel;
        console.log(x, y);
        ctx.arc(x , y , dimension ,0 , Math.PI * 2, true);
        ctx.fill();
    }
}