Time and Space Complexity

Time Complexity
Simplify away coefficients and constants
Time complexity expressions are relative to input
O(1)      constant no matter input
O(n)      varies with input length
O(n^2)	varies with square of input length, e.g. nested loop
O(log n) typically this means binary log!

Space Complexity
Simplify away coefficients and constants
Space complexity expressions exclude size of input
Also called "auxiliary space complexity"
O(1)      constant no matter the size of the input
O(n)      space taken up is proportionate to input, excluding the input

Objects:
Searching is O(n)
Inserting, deleting, accessing are O(1)
Objects.keys is O(n)
Objects.entries is O(n)
.hasOwnProperty is O(1)

Arrays
Pushing/popping is O(1)
Shifting/unshifting is O(n)
Searching is O(n) at least for unsorted
Access is O(1)
Concat, slice, splice are O(n)
Sort is O(n log n)


Problem Solving Strategies
Frequency Counters
Uses objects or sets to collect frequencies
Find a way to use when you need to compare each element to each element to reduce time complexity
Avoids nested loops that are O(n^2)

Multiple pointers
Create multiple indices to start from both beginning and end of list, string, etc.
Can be useful when input is sorted

Start pointers at beginning and end & do a while loop, increment/decrement each pointer till you find solution. Gets you O(n)

Sliding Window
Looking for subset of string or array that meets a condition
Move or resize the window based on conditions
Rather than recalculate the entire window every time (say, for a moving sum within an array), you can just incrementally adjust based only on the elements that change

Searching: Binary Search
For sorted array, split it and use a binary search technique
Recursion can help
Has O(log n) because it cuts in half each time
Can round down or up, doesn’t matter, just be consistent

Basic/Quadratic Sorting
Bubble Sort
Compare each element with the next one and swap them
Bigger elements “bubble” to the top
Each iteration need to do less and less of the array as the tail gets sorted
To implement: outer loop starts from end of array and decreases; inner loop does the comparison and increases
Very slow in most cases.
Keeps going after it’s sorted… so add a check to stop the sort if you didn’t swap last time
O(N^2) complexity, generally
But if data is nearly sorted, it’s closer to O(N), which is good

Selection sort
Iterate entire array, move smallest element to beginning
Outer loop iterates a window whose start advances
inner loop finds the smallest in that window and swaps it to outer loop’s start point
O(N^2)
Better than bubble sort if you want to minimize swaps for some reason
Bad for nearly-sorted data
only positive is that it’s easy to understand

Insertion Sort
Iterate array, move each element to correct position in sorted sub-array prior to current index
Outer loop starts from 0, inner loop looks backwards from outer loop index and finds a place to put the selected element, shifting everything over and then inserting.
O(N^2)
Good at nearly sorted. Also a good to sort live data when new stuff is e.g. added to the end

Intermediate Sorting Algos
Merge Sort
Recursive and needs a helper function.
The helper function, merge, merges two already-sorted arrays. It does this with a while loop with a pointer for each array. Until one pointer hits the length of its respective array, the while loop pushes elements from the two arrays to an output array, depending on which is smallest.
The main mergesort function splits an array down the middle and calls mergesort on each sub-array and then merges the sorted arrays using the helper function.
Time complexity is O(n log n) no matter how sorted the input is already.
Why n log n? For input of length n, algo needs to split & merge it 2 * binary log n times. The merge helper function has complexity n for its input. Since you call n for each split, total complexity is n log n.
This one has space complexity of O(n) where the simpler ones had space complexity of O(1).  

Quick Sort
Pick a “pivot”. This can be any point in the array. Move everything smaller than the pivot to a new array, move everything larger than a pivot to another array. Quicksort each array.
Time complexity is O(n log n) for best case. This is because you’re making log2n decompositions of the array. For each decomp you do n operations to flip stuff to the left side of the pivot.
Worse case time complexity is quadratic. This happens when the input array is already sorted, because each decomposition doesn’t split anything.
Quicksort can be optimized by intelligently picking pivots: try to not pick the minimum or maximum each time; random or median.
Space complexity is log n

All of these are called “comparison sorts.” They all operate by comparing two elements and then doing sometihng with them. Bubble, insertion, selection are O(N^2). Merge and Quick are O(n log n). Best possible case for comparison sorts is n log n.

Radix Sort
First non-comparison sort. Works on numbers. Exploits the fact that info about size of a number is encoded in number of digits. Four digit number is larger than two digits. Etc. Sort into buckets by ones digit, then reform list, then put in buckets by second digit, preserving order, etc. Time complexity based on number of digits in largest number. Number of buckets based on base of the number system. Time complexity is O(nk) where k is the length or word size of the longest number. Depending on how numbers are stored, this could be n log n. Space complexity is O(n + k)


Data Structures
Singly Linked List
Push/unshift		O(1)
Removal/pop		O(n)
Searching		O(n)
Access/get		O(n)
Singly linked lists excel at insertion and deletion but are bad at random access.

Doubly Linked List
Insertion 		O(1)
Removal/pop		O(1) (better than singly linked!)
Searching		O(n)
Access			O(n)
Good for reverse access-- say, a browser history. But they take more memory.

Stacks
LIFO, last-in-first out
Last element added will be first element out
Ways to implement: array pushing/popping, shifting/unshifting; former is faster… or linked list
Insertion	O(1)
Removal	O(1)

Queues
FIFO, first-in-first-out
To set up via linked list, add to the end and remove from the beginning
Queue is push, unqueue is shift
Insertion  	O(1)
Removal	O(1)

Binary Search Trees
Every node has a left and right; smal to the left, large to the right. Pick a root near the middle for a balanced fast tree.
Insertion	O(log n)
Searching	O(log n)
Depth-first search has less space/memory complexity for wide but not deep trees. DFS inorder gets you a sorted list, but DFS preorder gets you the root first, which will help you deserialize/reconstruct the tree if you need to

Heaps
Max heap, the biggest number is on top. Children are always smaller. As compact as possible: all children are as full as possible starting from the left. Can be stored as a list: root at 0, kids at 1 and 2, etc. Left and right children of node are at 2n + 1 and 2n + 2. Parent of child n is at floor((n-1)/2)
