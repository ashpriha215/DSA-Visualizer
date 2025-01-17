// Main

let sec = document.querySelector('.section');
let heading = document.querySelector('.main__heading');
let details = [
    {
        heading: 'Time Complexity',
        image: `images/time_complexity.png`,
        link: 'templates/time_complexity.html',
        sub_topics: [
            "Big Oh",
            "Big Omega",
            "Big Theta"

        ]
    },
    {
        heading: 'Array',
        image: `images/array.png`,
        link: 'templates/array.html',
        sub_topics: [
            "create",
            "insert",
            "delete"

        ]
    },
    {
        heading: 'Stack',
        image: `images/stack.png`,
        link: 'templates/stack.html',
        sub_topics: [
            "create",
            "push",
            "pop",
            "peek"

        ]
    },
    {
        heading: 'Queue',
        image: 'images/queue.png',
        link: 'templates/queue.html',
        sub_topics: [
            "create",
            "enqueue",
            "dequeue"

        ]
    },
    {
        heading: 'Heap',
        image: 'images/heap.png',
        link: 'templates/heap.html',
        sub_topics: [
            "create",
            "delete",
            "insert",
            "heapify"
        ]
    },
    {
        heading: 'Linked List',
        image: 'images/linked_list.png',
        link: 'templates/linkedlist.html',
        sub_topics: [
            "singly",
            "doubly",
            "circular",
            "stack",
            "queue"
        ]
    },
                 {
        heading: 'Binar Search Tree',
        image: 'images/tree.png',
        link: 'templates/tree.html',
        sub_topics: [
            "create",
            "insert",
            "delete",
            "find",
            "traversal"
        ]
    },
    {
        heading: 'Graph',
        image: 'images/graph.png',
        link: 'templates/graph.html',
        sub_topics: [
            "create",
             "dfs",
            "bfs",
            "kruskals",
            "prims",
            "djstras",
            "flood fill",
                "color filling",
            "topological sorting",
            "detect cycle",
            "bellman ford",
            "floyd warshall",
            "graph coloring",
            "snake and ladders",
            "travelling salesman"
        ]
    },
    {
        heading: 'Sort Algorithms',
        image: 'images/sort.png',
        link: 'templates/sort.html',
        sub_topics: [
            "bubble",
            "selection",
            "insertion",
            "merge",
            "quick",
            // "radix",
            // "heap",
            // "shell",
            "counting"
        ]
    },
    {
        heading: 'Searching Algorithm',
        image: 'images/search.jpeg',
        link: 'templates/search.html',
        sub_topics: [
            "linear",
            "binary"
        ]
    },
    {
        heading: 'Recursion',
        image: 'images/recursion.jpg',
        link: 'templates/recursion.html',
        sub_topics: [
            "fibonacci",
            "factorial",
            "permutations"

        ]
    },
    {
        heading: 'Backtraking',
        image: 'images/backtrack.png',
        link: 'templates/backtracking.html',
        sub_topics: [
            "N Queens",
            "maze",
            "sudoku"
        ]
    },{
        heading: 'Divide And Conquer',
        image: 'images/divide_and_conquer.png',
        link: 'templates/divide_and_conquer.html',
        sub_topics: [
            "merge sort",
            "quick sort"
        ]
    },
    {
        heading: 'Greedy',
        image: 'images/greedy.png',
        link: 'templates/greedy.html',
        sub_topics: [
            "prims",
            "kruskals",
            "knapsack",
            "job schedling",
            "counting money",
            "huffman coding"
        ]
    },
    {
        heading: 'Dynamic Programming',
        image: 'images/dynamic.jpeg',
        link: 'templates/dynamic.html',
        sub_topics: [
            "Travelling Salesman",
            "0/1 knapsack",
            "unbounded 0/1 Knapsack",
            "partition problem",
            "cutting_rod",
            "coin_change_making",
            "longest_common_sequence",
            "shortest_common_sequence",
            "levenshtein",
            "ladder"
        ]
    },
    

     //  // Extras

                     {
           heading: 'String',
           image: 'images/string.jpeg',
           link: 'templates/string.html',
           sub_topics: [
                "KMP",
                "Boyer Moore"
           ]
      },
      {
           heading: 'Disjoint Set',
           image: 'images/disjoint_set.jpeg',
           link: 'templates/disjoint.html',
           sub_topics: [
                "find",
                "union"
           ]
      },
      {
           heading: 'Hashing Table',
           image: 'images/hasing_table.jpeg',
           link: 'templates/hashing_table.html',
           sub_topics: [

           ]
      },


     // Questions 
     
     {
           heading: 'Questions',
           image: 'images/question.jpeg',
           link: 'templates/questions.html',
           sub_topics: [
                "Data Structure",
                "Algorithm"
           ]
      },

      


     //  // Advance 

     //  {
     //       heading: 'Bit Masking',
     //       image: 'images/bit_masking.jpeg',
     //       link: 'templates/bit_masking.html',
     //       sub_topics: [

     //       ]
     //  },
     //  {
     //       heading: 'Tries',
     //       image: 'images/hasing_table.jpeg',
     //       link: 'templates/hashing_table.html',
     //       sub_topics: [
                
     //       ]
     //  },
     //  {
     //       heading: 'Segment Tree',
     //       image: 'images/segment_tree.jpeg',
     //       link: 'templates/segment_tree.html',
     //       sub_topics: [
                
     //       ]
     //  },
     //  {
     //       heading: 'Self Balancing Tree',
     //       image: 'images/self_bst.jpeg',
     //       link: 'templates/self_bst.html',
     //       sub_topics: [
     //            "Avl tree",
     //            "Splay tree",
     //            "Red black tree",
     //            "B tree",
     //            "B+ tree"
     //       ]
     // },
     // {
     //       heading: 'Geometry',
     //       image: 'images/geometry.jpeg',
     //       link: 'templates/geometry.html',
     //       sub_topics: [
     //
     //       ]
     // },
]

pop_up();

// Utility

 details.forEach((detail, index) => {
    add_card(detail, index);
}) 

function add_card(details, index) {
    let card = document.createElement('div');
   ['col', 'col-12', 'col-md-6', 'col-lg-4'].forEach((el) => card.classList.add(el));
   card.style.borderRadius = '10px';
   card.style.transform = 'scale(.9)';
   let card_html = `
       <div class="card" style="">
         <div class="card__heading">${details.heading}</div>
         <a href="${details.link}" target="_self" class="card-img-top-parent">
              <img src="${details.image}" class="card-img-top" alt="${details.heading}">
         </a>
         <div class="card-body">
         </div>
       </div>
    `	     		
    card.innerHTML = card_html;
    sec.appendChild(card);

    details.sub_topics.forEach((e) => {
        let card_span = document.createElement('button');
        card_span.classList.add('badge');
        card_span.classList.add('badge-primary');
        card_span.innerText = e.toUpperCase();

        document.querySelectorAll('.card-body')[index].appendChild(card_span);
    })
}



// POP UP

function pop_up() {
    if(+localStorage.getItem('first_time') === 1 && false) {
        let cross;
       let slider;
       let info;
       cross = document.createElement("span");
       cross.innerText = "X";
       cross.style.position = 'absolute';
       cross.style.top = '10px';
       cross.style.right = '10px';
       cross.style.borderRadius = "10px";
       cross.style.color = 'white';
       cross.style.boxShadow = '1px 1px 10px rgba(255, 255, 255, .5)'
       cross.style.padding = '15px 20px';
       cross.style.cursor = 'pointer';
       cross.classList.add('cross')
       slider = document.createElement("div");
       slider.style.width = '100vw';
       slider.style.height = '100vh';
       slider.style.overflow = 'scroll';
       slider.style.background = 'rgba(0, 0, 0, .9)';
       slider.style.position = 'fixed';
       slider.style.top = '0px';
       slider.style.left = '0px';
       slider.style.zIndex = '20';
       // debugger

       // POPUP Info

       let html = `

           <div class="popup__heading">DSALGO</div>
           <div class="popup__sub__heading">what is <b>DSALGO</b> ?</div>
           <blockquote class="popup__sub__heading__details"> </blockquote>
       
       `
       info = document.createElement("div");
       info.innerHTML = html;
       info.style.maxWidth = '600px';
       info.style.textAlign = 'center';
       info.style.margin = '30px'
       info.style.transform = 'translateY(100px)';
       info.style.background = 'white';
       info.style.borderRadius = '10px'
       info.classList.add("info__box");
       info.style.boxShadow = '20px 20px 30px rgba(0, 0, 0, .3)'
       info.style.padding = '20px'
       info.style.border = '1px solid black';
       info.style.margin = 'auto';
       slider.appendChild(cross);
       slider.appendChild(info);
       slider.style.textAlign = 'center';

       document.querySelector('.body__bin').appendChild(slider);
        localStorage.setItem('first_time', 1)
        document.querySelector('.cross').addEventListener("click", () => {
            document.querySelector('.body__bin').innerHTML = '';
        })

    }
    else {
        debugger;
    }
}