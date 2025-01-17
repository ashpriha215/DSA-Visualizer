// Main

var arr = [];
var no_of_squares = 8;
var grid = document.querySelector(".grid");
var x_length = 400/no_of_squares;
var all_queens = document.querySelectorAll('.queens');

initiate_grid();


// N-Queens algorithm 



// utility funtions

function create_grid(i, j) {
    let innerSquare = document.createElement('div');
    let col;
    let pp = i * no_of_squares + j;
    if((pp + (pp / no_of_squares) & 1) & 1) {
        col = 'black'
    } else {
        col = 'white'
    }

    var p = document.createElement('span');
    p.style.borderRadius = '50%';
    p.style.background = 'yellow';
    p.style.width = p.style.height = `${x_length / 2}px`;
    p.style.position = 'absolute';
    p.style.top =  `${x_length * i + x_length/4}px`;
    p.style.left = `${x_length * (j%no_of_squares) + x_length/4}px`
    p.classList.add('queens');
    innerSquare.style.background = col;
    innerSquare.style.width = innerSquare.style.width =  `${x_length}px`;
    console.log(innerSquare.style.left);
    grid.appendChild(innerSquare);
    grid.appendChild(p);
}

function initiate_grid() {
    for(let i=0; i< no_of_squares; i++) {
        for(let j=0; j< no_of_squares; j++) {
            create_grid(i, j);
        }
    }


    for(let i=0 ;i< no_of_squares; i++) {
        for(let j=0; i<no_of_squares; j++) {
            if(check_some(i, j)) {
                arr.push([i, j])
                all_queens[i * no_of_squares + j].style.background = 'red';
            }
            else {
                all_queens[i * no_of_squares + j].style.background = 'red';
            }
        }
    }
}

function get_i_j_from_n(n, max) {
    return [Math.floor(n / max), n % max];
}


function check_some(i, j) {
    arr.forEach((e) => {
        if( e[0] == i || e[1] == j || e[0] + e[1] == i+j || e[0] - i == e[1] - j) {
            return false;
        }
        if(i >= no_of_squares || j >= no_of_squares)
            return false;
    })
    return true;
}