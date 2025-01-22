---
# You can also start simply with 'default'
theme: apple-basic
titleTemplate: '%s'
title: Sorting Algorithms
info: 'Data Structures, Algorithms and Advanced Programming'
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true

author: Chris Janes
selectable: false

layout: intro-image
image: 'https://images.unsplash.com/photo-1688841903161-97d4837b28ec?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
hideInToc: true
---


<div class="absolute bottom-10">
<h1 class="">Sorting Algorithms</h1>
</div>

<div class="w-full absolute top-10">
  <div class="font-700">
    Chris Janes 23/02/25
  </div>
  <div>
    Data Structures, Algorithms and Advanced Programming
  </div>
</div>

---
hideInToc: true
---

# Today's topics
<toc />

---
layout: quote
transition: fade-out
hideInToc: true
---

# "To put a number of things in an order or to separate them into groups"
-- Cambridge Dictionary

<!--
  Sorting is the process of re-arranging the elements of a given data structure into a specific order - usually by ascending or descending value based on some property.
  There are several approaches to sorting; today we'll look at some of the simpler algorithms.

  Some of the algorithms we'll look at in the future rely on sorted data to function effectively, but beyond that sorting algorithms are used to improve data presentation,
  index databases, data retrieval and can benefit data analysis.
-->

---

# Selection Sort
In-place sort, $O(n^2)$ time complexity

````md magic-move
```text{all}
START

END
```
```text{2-4}
START
  FOR I = 0 TO N-1 DO:
    SMALL = I  
  END
END
```
```text{4-6}
START
  FOR I = 0 TO N-1 DO:
    SMALL = I
      FOR J = I+1 TO N-1 DO:

      END
  END
END
```
```text{5-7}
START
  FOR I = 0 TO N-1 DO:
    SMALL = I
      FOR J = I+1 TO N-1 DO:
        IF ARR[J] < ARR[SMALL]
          SMALL = J
        END
      END
  END
END
```
```text{9-11|all}
START
  FOR I = 0 TO N-1 DO:
    SMALL = I
      FOR J = I+1 TO N-1 DO:
        IF ARR[J] < ARR[SMALL]
          SMALL = J
        END
      END
    TEMP = A[I]
    A[I] = A[SMALL]
    A[SMALL] = TEMP
  END
END
```
```cpp{all}
void selectionSort(int arr[], int arrSize) {
  for (int i = 0; i < arrSize - 1; i++) {
    int small = i;
    for (int j = i+1; j < arrSize - 1; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    swap(arr[i], arr[small]);
  }
}
```
```cpp{1-5|all}
void swap(int& a, int& b) {
  int temp = a;
  a = b;
  b = a;
}

void selectionSort(int arr[], int arrSize) {
  int small = 0;
  for (int i = 0; i < arrSize - 1; i++) {
    small = i;
    for (int j = i+1; j < arrSize - 1; j++) {
      if (arr[j] < arr[small]) {
        small = j;
      }
    }
    swap(arr[i], arr[small]);
  }
}
```
````

<!-- A sort-in-place algorithm (the sorted array is the same size as the unsorted array) that works in O(n^2) time complexity (we'll talk about what that means in more detail next week) - but for now, take it that it means this is not a very efficient algorithm, especially for larger sets of data.
  It works by finding the smallest value in the array and swapping it with the current element - lets work through it in pseudocode to get an understanding.

[click] We iterate over the container from the start (so index 0). The first index is treated as the index to the smallest element to begin with

[click] We then iterate over the rest of the container, from the next index (i+1) onwards.

[click] if any of the values are less than the one represented by the "small" index, we set the index of that value to be the new smallest.

[click] once we've finished that iteration, we swap the values represented by the indices at I and SMALL - putting the smaller value at the "front" of the container

[click] that process repeats until we have finished the outer loop.

[click] The C++ code for this is relatively straight forward - you can very nearly take the pseudocode exactly!

[click] The only major change here is the swap function, which takes two references to integers and swaps their values via a temporary variable - it's not necessary, but it makes our code a little tidier and we can re-use it later.

-->
---
layout: default
---
# Bubble Sort
Adaptive in-place sort, $O(n^2)$ complexity

<style>
.wrapper {
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 20px;
}

.left {
grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

.right {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
</style>

<div class="wrapper">

<div class="left">

````md magic-move
```text{*}
START
  
END
```
```text{*}
START
  SWAPPED = TRUE
END
```
```text{3-5}
START
  SWAPPED = TRUE
  WHILE SWAPPED == TRUE DO:
    SWAPPED = FALSE
  END
END
```
```text{5-7}
START
  SWAPPED = TRUE
  WHILE SWAPPED == TRUE DO:
  SWAPPED = FALSE  
    FOR I = 0 TO N-2
   
  END
  END
END
```
```text{6-9|all}
START
  SWAPPED = TRUE
  WHILE SWAPPED == TRUE DO:
  SWAPPED = FALSE  
    FOR I = 0 TO N-2
    IF ARR[I] > ARR[I+1]
      SWAP ARR[I] ARR[I+1]
      SWAPPED = TRUE
    END
  END
  END
END
```
````

</div>
<div class="right">

````md magic-move {at:1}
```cpp{*}{lines:true}
void bubbleSort(int arr[], int arrSize) {
  
}
```
```cpp{*}{lines:true}
void bubbleSort(int arr[], int arrSize) {
  bool swapped = true;
}
```
```cpp{3-5}{lines:true}
void bubbleSort(int arr[], int arrSize) {
  bool swapped = true;
  while (swapped) {
  swapped = false;
  }     
}
```
```cpp{5-7}{lines:true}
void bubbleSort(int arr[], int arrSize) {
  bool swapped = true;
  while (swapped) {
  swapped = false;
    for (int i = 0; i < arrSize-1; i++) {

    } 
  }     
}
```
```cpp{6-9|all}{lines:true}
void bubbleSort(int arr[], int arrSize) {
  bool swapped = true;
  while (swapped) {
  swapped = false;
    for (int i = 0; i < arrSize-1; i++) {
      if (arr[i] < arr[i + 1]) {
        swap(arr[i], arr[i+1]);
        swapped = true;
      }
    } 
  }     
}
```
```cpp{*}{lines:true}
void bubbleSort(int arr[], int arrSize) {
  bool swapped = false;
  do {
  swapped = false;
    for (int i = 0; i < arrSize-1; i++) {
      if (arr[i] < arr[i + 1]) {
        swap(arr[i], arr[i+1]);
        swapped = true;
      }
    }     
  } while (swapped);      
}
```
````
</div>

</div>

<!-- Bubble sort is a form of adaptive sort algorithm; so it takes advantage of existing order in the input data, allowing it to sort faster. Even with that in mind, it also has a n squared worst case complexity.
It's called "bubble sort" because it effectively "bubbles" values into place. It works by iterating over the data, comparing an index with the next element along and swapping them if they are out of order - 
this keeps happening until no swaps have occurred.

Here's how that looks in code:

[click] We start by setting a "swapped" flag to true

[click] While that's true, we loop - the first step of that loop is to set "swapped" to false!

[click] We iterate over the array data from start to N-2 (note the difference in the C++ code for the for loop using arrSize - 1 rather than - 2)

[click] if the current element is less than the element next to it (i+1), we swap them and set swapped to be true

[click] that process repeats until we run an iteration where swapped remains false.

[click] There's potential to use a do while loop here instead

-->

---

# Insertion Sort
Adaptive, in-place sort, $O(n^2)$ complexity

````md magic-move
```text
START
  
END
```
```text
START
  FOR I = 1 TO N-1
    
  END
END
```
```text
START
  FOR I = 1 TO N-1
    J = I
  END
END
```
```text
START
  FOR I = 1 TO N-1
    J = I
    WHILE J > 0 AND ARR[J] < ARR[J - 1]
      
    END
  END
END
```
```text
START
  FOR I = 1 TO N-1
    J = I
    WHILE J > 0 AND ARR[J] < ARR[J - 1]
      SWAP ARR[J] ARR[J-1]
      J = J - 1
    END
  END
END
```
````

<v-click>

```cpp
void insertionSort(int arr[], int arrSize) {
  for (int i = 1; i < arrSize - 1; i++) {
    int j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(arr[j], arr[j - 1]);
      j--;
    }
  }
}
```

</v-click>

<!-- Insertion Sort works sort of how the name suggests; it works over the array, checking each element and inserting it into the "correct" place in the final or sorted array. Conceptually, we split the data into a sorted set and an unsorted set. 
The first element of the data is considered to be "sorted", we then iterate over the rest of the unsorted data and compare each element against the sorted data, inserting the element into the correct place. It's very similar to selection sort, except
insertion sort scans backwards over the "sorted" elements rather than forward over the unsorted elements.

Here's how that looks in code:

[click] We iterate from 1 to the array size - 1

[click] For every iteration, we start by setting J to I

[click] While J is above 0 and the array element at j is less than the array element at j - 1

[click] swap the array values and subtract one from J

[click] Which looks like this in C++

-->

---

# Merge Sort
Divide-and-conquer sort, $O(n\,log_2\,n)$ complexity, $O(n)$ size & $O(n)$ auxiliary

<v-click>

````md magic-move{at:2}
```cpp
void mergeSort(int arr[], int start, int end) { }
```
```cpp
void mergeSort(int arr[], int start, int end) {
  if (start >= end) return;
}
```
```cpp
void mergeSort(int arr[], int start, int end) {
  if (start >= end) return;

  int mid = start + (end - start) / 2;
}
```
```cpp
void mergeSort(int arr[], int start, int end) {
  if (start >= end) return;

  int mid = start + (end - start) / 2;

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
}
```
```cpp
void mergeSort(int arr[], int start, int end) {
  if (start >= end) return;

  int mid = start + (end - start) / 2;

  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}
```
````
</v-click>


<!-- Merge sort is a recursive algorithm that works by splitting the data set into two over each iteration until there is one element in each set (an element of one set is sorted after all!). These sets are then merged into a single sorted sequence.
This requires an additional array of the same size as the unsorted array to put the resulting merged values into. The n log2 n worst case complexity means it's efficient on large data sets, but unlike the other sorts we have looked at so far, we have to consider the size complexity too - as we require sufficient storage for each of the elements as they are broken down and then the temporary storage as they are merged back together (the auxiliary size)

This is one where pseudo code does a little bit less to help explain, so we'll look at the straight C++ code - there are two components at work here, the division of the initial array and then the merging into a sorted array.

[click] We iterate from 1 to the array size - 1

[click] For every iteration, we start by setting J to I

[click] While J is above 0 and the array element at j is less than the array element at j - 1

[click] swap the array values and subtract one from J

[click] Which looks like this in C++

-->

---

# The Merge function
Nothing too complex...
<div class="columns-3">

```cpp{hide|1-3|4-8|10-13|15-17|all}
void merge(int arr[], int start, 
      int mid, int end) 
{
  int n1 = mid - start + 1;
  int n2 = end - mid;

  int *L = new int[n1];
  int *R = new int[n2];

  for (int i = 0; i < n1; i++)
    L[i] = arr[start + i];
  for (int i = 0; i < n2; i++)
    R[i] = arr[mid + 1 + i];

  int i = 0;
  int j = 0;
  int k = start;
```

```cpp{hide|1,17|2-11|13-16|all}{at:5}
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    }
    else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }
```

```cpp{hide|1-5|7-8|all}{at:8,lines:true}
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }

  delete[] L;
  delete[] R;
}
```
</div>

<!-- Ok, that might not be entirely true - this is the longest bit of code we've looked at so far...

[click] The merge function takes a reference to the main array, a start point, mid point and end point (represented as indices into the array)

[click] We then calculate the upper bounds based on mid to start and end to mid, using those values, we allocate memory for 2 further arrays.

[click] With those new arrays, we fill them with the values from the main array (so half the total to the left, half to the right)

[click] Then we can setup some values that we'll use as we merge the two arrays together.

[click] It goes on, we now iterate while i and j are less than their respective sizes.

[click] If the value in the left half is less than or equal to the value in the right half, we place the left value into the main array and increment i
otherwise, the right value goes in and j is incremented - k is incremented to keep moving along the main array no matter what.

[click] We then put the remaining elements from the left half into the main array, incrementing k as we go

[click] Nearly at the end now, the values from the right half are put into the main array, again, incrementing k

[click] Finally, we clear up the two temporary arrays to stop the process leaking memory and we're done. [click]

-->

---
hideInToc: true
---

# Or...

<div class="columns-2">

```cpp{hide|all}
#include <array>
#include <algorithm>

template<class Iter>
void mergeSort(Iter start, Iter end) {
  if (end - start > 1)
  {
    Iter middle = start + (end - start) / 2;
    mergeSort(start, middle);
    mergeSort(middle, end);
    std::inplace_merge(start, middle, end);
  }
}
```

```cpp{hide|all}{at:2}
int main() {
  const int ArrayMax = 10;

  std::array<int, ArrayMax> numbers;

	srand(time(0));

	for (int i = 0; i < ArrayMax; i++)
	{
		numbers[i] = rand() % 256;
	}	

  mergeSort(numbers.begin(), numbers.end());
	return 0;
}
```

</div>

<!-- making use of modern elements of the C++ standard, such as std::array, iterators and the algorithm library, we can do it in significantly less code... -->

---

# Next time

- Linked Lists
- Complexity
  - $O$, $\Theta$, $\Omega$
- Maybe a little more sorting...