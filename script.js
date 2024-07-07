let sec = document.querySelector('.section');
     	let heading = document.querySelector('.main__heading');
     	let counter = 0;
		 document.querySelector(".title").addEventListener("click", () => {
			if(counter == 10) {
				if(window.localStorage.getItem("questions")) {
					window.localStorage.removeItem("questions");
				}
				else
					window.localStorage.setItem("questions", true)
				window.location.reload();
			}
			console.log(counter);
			counter++;
		 })
		
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
     				"delete",
                         "linear search",
                         "prefix sum",
                         "kadane",
                         "sliding windows",
                         "partitioning",
                         "rain water trapping"

     			]
     		},
               {
                    heading: 'Number Theory',
                    image: `images/number_theory.png`,
                    link: 'templates/number_theory.html',
                    sub_topics: [
                         "gcd",
                         "Extended Eucledian",
                         "Sieve of Eratosthenes",
                         "Binary Exponentiation"
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
     				"peek",
                         "Balanced bracket",
                         "infix to postfix",
                         "infix to prefix",
                         "postfix evaluation",
                         "prefix evaluation",
                         "Max Area under histogram",
                         "Min Stack O(1)"

     			]
     		},
               {
                    heading: 'Matrix',
                    image: `images/matrix.png`,
                    link: 'templates/matrix.html',
                    sub_topics: [
                         "Transpose",
                         "Sparse Matrix",
                         "kadane 2d",
                         "Sorted Matrix search"
                    ]
               },
     		{
     			heading: 'Queue',
     			image: 'images/queue.png',
     			link: 'templates/queue.html',
     			sub_topics: [
     				"create",
     				"enqueue",
     				"dequeue",
                         "bfs"
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
     				"heapify",
                         "heap sort"
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
                    heading: 'Recursion',
                    image: 'images/recursion.jpg',
                    link: 'templates/recursion.html',
                    sub_topics: [
                         "factorial",
                         "H tree",
                         "snowflakes",
                         "Tower Of Brahma"

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
     				"traversal",
//                          	"rotations"
     			]
     		},
     		{
     			heading: 'Binary Search Algorithm',
     			image: 'images/search.jpeg',
     			link: 'templates/search.html',
     			sub_topics: [
     				"binary search",
                         	"start point in roated array",
                         	"find peak element",
//                          	"minmum page allocation",
                         	"biotonic array"
     			]
     		},
     		{
     			heading: 'Backtracking',
     			image: 'images/backtrack.png',
     			link: 'templates/backtracking.html',
     			sub_topics: [
     				"N Queens",
     				"maze",
     				"sudoku",
                         "knight tour",
                         "graph coloring"
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
                         "heap",
                         "shell",
                         "counting"
                    ]
               },
               {
     			heading: 'Divide And Conquer',
     			image: 'images/divide_and_conquer.png',
     			link: 'templates/divide_and_conquer.html',
     			sub_topics: [
     				"merge sort",
     				"quick sort",
                        	"counting inversion"
     			]
     		},
               {
                    heading: 'String',
                    image: 'images/string.png',
                    link: 'templates/string.html',
                    sub_topics: [
			 "Naive",
                         "KMP",
                         "Rabin Karp",
//                          "Boyer Moore",
                         "Z Function"
                    ]
               },
     		{
     			heading: 'Greedy',
     			image: 'images/greedy.png',
     			link: 'templates/greedy.html',
     			sub_topics: [
     				// "prims",
     				"kruskals",
     				"fractional knapsack",
     				"Merge Intervals",
     				"counting money",
     				"huffman coding"
     			]
     		},
     		{
     			heading: 'Dynamic Programming',
     			image: 'images/dynamic_programming.png',
     			link: 'templates/dynamic.html',
     			sub_topics: [
     				"Travelling Salesman",
     				"0/1 knapsack",
     				"unbounded Knapsack",
     				"subset sum problem",
     				"cutting_rod",
     				"coin_change_making",
     				"longest_common_sequence",
     				// "matrix chain multipication",
     				"levenshtein distance",
     				"ladder"
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
                        //  "prims",
						"dfs maze",
                         "djstras",
                         "flood fill",
                         "color filling",
                         "topological sorting",
                         "detect cycle",
                        //  "bellman ford",
                        //  "floyd warshall",
                         "graph coloring",
                        //  "snake and ladders",
                         "travelling salesman",
                        //  "ford fulkerson",
                        //  "tarjons",
						"bridges",
						// "kosarajus ",
                        //  "Articulation points",
                        //  "dinics"
                    ]
               },
     		

              //  // Extras

               
               {
                    heading: 'Disjoint Set',
                    image: 'images/disjoint_set.png',
                    link: 'templates/disjoint.html',
                    sub_topics: [
                         "find",
                         "union"
                    ]
               },
               {
                    heading: 'Hashing Table',
                    image: 'images/hashing_table.png',
                    link: 'templates/hashing_table.html',
                    sub_topics: [
                         "open hashing",
                         "closed hashing"
                    ]
               },

               {
                    heading: 'Non-deterministic Polynomial time',
                    image: `images/np_hard.jpg`,
                    link: 'templates/np_hard.html',
                    sub_topics: [
                         "p",
                         "np",
                         "np hard",
                         "np complete"

                    ]
               },

//                {
//                     heading: 'Segment Tree',
//                     image: 'images/segment_tree.png',
//                     link: 'templates/segment_tree.html',
//                     sub_topics: [
//                          "create",
//                          "query",
//                          "update"
//                     ]
//                },


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
     	]

        if(!localStorage.getItem("counter"))
			pop_up();

// Utility

      	details.forEach((detail, index) => {
			let temp = window.localStorage.getItem("questions");
			if(detail.heading == "Questions" && temp == null) {
				// Do Nothing
			}
			else	
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
			if(+localStorage.getItem("counter") == 1) return;

			if(+localStorage.getItem("first_time") == 1){
				localStorage.setItem("counter", 1);
			}
			else
				localStorage.setItem('first_time', 1)
			
			if(true && +localStorage.getItem('first_time') == 1) {
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

				let html =  () => {
					let a = `

					<div class="popup__heading">DSALGO</div>
					<img src="https://github.com/jhabarsingh/DSALGO-VISUALIZER/blob/main/logo/logo_2.png?raw=true" 
						style="width:200px;"
					/>
					<div class="popup__sub__heading">
						<b>Ds Algo visualizer </b> 
						<br />
						<code>
							is made for students who want to learn Data structures and algorithms with Animations. This project includes all the important data structures that are being widely used.
						</code>
						<hr />
						<h5> <b>Topics Covered</b> </h5>
						<div>` 
					
					let b = "";
					for(let i=0; i<details.length; i++) 
							b += `<span class="badge badge-primary" style="margin:3px;">${details[i].heading}</span>`
					
					let c = `	</div>
								</div>
								
								<blockquote class="popup__sub__heading__details"> </blockquote>
							
						`
					return a + b + c;
				}

				info = document.createElement("div");
				info.innerHTML = html();
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
     	}