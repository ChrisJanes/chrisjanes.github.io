---
theme: apple-basic
titleTemplate: '%s'
title: Complexity
info: 'Data Structures, Algorithms and Advanced Programming'
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# as
author: Chris Janes
selectable: false

canvasWidth: 980

layout: intro-image
image: 'https://images.unsplash.com/photo-1517373116369-9bdb8cdc9f62?q=80&w=1280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
hideInToc: true
---


<div class="absolute bottom-10">
<h1 class="">Complexity</h1>
</div>

<div class="w-full absolute top-10">
  <div class="font-700">
    Chris Janes 30/01/25
  </div>
  <div>
    Data Structures, Algorithms and Advanced Programming
  </div>
</div>

---
hideInToc: true
---

# In this session

<toc />

---
layout: image
image: https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# Algorithmic Efficiency

<v-clicks>

- Crucial for choosing the best algorithm for a given problem.
- How efficiently an algorithm uses resources
- Measured using asymptotic notation.

</v-clicks>

<!-- Consider the difference between searching through a single book to find a bit of information and searching through an entire library to find that book before searching through it - while the process is effectively the same, the complexity of the task is significantly different!

As humans, when we're confronted with the task of searching a library (or anything else) we make some assumptions and consider the process holistically - our first port of call is probably going to be a librarian or library index to narrow down our search space. 
Hopefully that gets us into at least the right part of the library if not the right shelf or even the right book. Algorithms slog through things step by step and some rely on having the data set they're processing provided in a specific format to be able to work at all.
In the worst case, a linear search of the library (that is, starting at the first shelf and working through the rest in physical order) will mean we find the book at the end of the last shelf we search, the best case is it's the first book we look at. 

Obviously, if we have one shelf to search linearly, that's relatively quick, even 10 shelves is probably fairly fast to get through - but when we get to something in the order of a library, we may be bouncing off the effective efficiency of the search process (and our willingness to continue)

[click] Knowing the efficiency of an algorithm lets us ensure we're choosing the most relevant algorithm for a given problem; in the case of searching a library, we want to avoid a linear search if we can find something that would let us divide 
the data set into categories or order it in a way that improves the searching process so we could use a binary or hashing search.

[click] That's what we're considering when we talk about algorithmic efficiency or complexity; for smaller data sets, as we saw with the sorting algorithms from last week, the complexity has a much smaller impact, but as the data sets grow,
we get into an area where the complexity is far more important. So when we talk about complexity, we're considering it from the perspective of the growth rate of the algorithm as the input set scales upwards.

[click] So let's take a look at approaches to measuring the performance of an algorithm.
 -->

---
layout: image-left
image: https://images.unsplash.com/photo-1704265586142-db3e17d0dea0?q=80&w=3474
---

<div class="container">

# Time Measurement

<v-click>

````md magic-move
```cpp{*}
int *array = randomisedArray(arraySize);

mergeSort(array, 0, arraySize-1);
```
```cpp{3,5}
int *array = randomisedArray(arraySize);

auto before = system_clock::now();
mergeSort(array, 0, arraySize-1);
auto after = system_clock::now() - before;
```
```cpp{6-8|all}
int *array = randomisedArray(arraySize);

auto before = system_clock::now();
mergeSort(array, 0, arraySize-1);
auto after = system_clock::now() - before;
std::cout << "Time taken: " << 
	duration_cast<milliseconds>(after).count() << 
	"ms\n";
```
````
</v-click>

<v-clicks>

<div class="my-2 bg-green-600 shadow-sm border border-green-950 rounded-lg p-px">
    <p class="text-slate-800 text-sm font-semibold text-center">Running time varies between algorithms</p>
</div>

<div class="my-2 bg-red-600 shadow-sm border border-red-950 rounded-lg p-px">
    <p class="text-slate-200 text-sm font-semibold text-center">
      Running time varies between implementations
    </p>
</div>

<div class="my-2 bg-red-600 shadow-sm border border-red-950 rounded-lg p-px">
    <p class="text-slate-200 text-sm font-semibold text-center">
      Running time varies between computers
    </p>
</div>

<div class="my-2 bg-red-600 shadow-sm border border-red-950 rounded-lg p-px">
    <p class="text-slate-200 text-sm font-semibold text-center">
      Running time is not predictable based on small inputs
    </p>
</div>

</v-clicks>

</div>

<!-- One of the more obvious things we could do is just time how long it takes our algorithm to run for our given problem; [click] say we've want to measure the performance of merge sort;
[click] We add some timing code around it and [click] we log the result out to a file or the console - [click] and the results are ok - we can use them to see how algorithms have different amounts of running time associated with them – 
[click] so, odds are, if we measure running time, it will almost certainly change as the algorithm we use varies. 

[click] But, this method of timing also depends on the implementation of that algorithm – if I implement the algorithm as having a loop that has a couple more steps in it, it’s going to impact the run time too, 
so really I’m conflating implementation influence on time with algorithm influence on time. [click] Worst still, our running time will vary between machines; depending on the processor, we will see a different result come out of our timing. 
[click] Finally, while we can happily measure small sized problems, we can’t use that to then predict what would happen if the problem size were to grow. So timing is impact too much by other factors, some of which are outside of our control.
-->

---
layout: two-column-header
---

# Counting Operations

:: left ::

<v-clicks at="8">

<div class="my-2 bg-green-600 shadow-sm border-slate-200 rounded-lg p-px">
    <p class="text-slate-800 text-sm font-semibold text-center">Count depends on algorithm</p>
</div>

<div class="my-2 bg-red-600 shadow-sm border border-slate-200 rounded-lg p-px">
    <p class="text-slate-200 text-sm font-semibold text-center">
      Count depends on implementation
    </p>
</div>

<div class="my-2 bg-green-600 shadow-sm border border-slate-200 rounded-lg p-px">
    <p class="text-slate-800 text-sm font-semibold text-center">
      Count independent of computers
    </p>
</div>

<div class="my-2 bg-red-600 shadow-sm border border-slate-200 rounded-lg p-px">
    <p class="text-slate-200 text-sm font-semibold text-center">
      No clear definition of which operations to count
    </p>
</div>

</v-clicks>

:: right ::

```cpp{hide|all|3|4|6|7|9|}
int SearchArrayLinearly(int valToFind, int arr[], int arrSize)
{
	int i = 0;
	while (i < arrSize)
	{
		i++;
		if(arr[i] == valToFind)
		{
			return i;
		}
	}

  return -1;
}
```

<v-click at="2">

````md magic-move{at:3}
```text
1 operation
```
```text
1 + arrSize operations
```
```text
1 + arrSize + arrSize operations
```
```text
1 + arrSize + arrSize + arrSize operations
```
```text
1 + arrSize + arrSize + arrSize + 1 operations
```
```text
32 operations
```
````

</v-click>

<!-- the second approach is the idea of counting operations; if we assume that each operation (by which I mean arithmetic operators, comparisons, assignments and retrieval, and things like returns or other function calls) 
takes constant time (each one takes the same amount of time as each other) then we side step the concern of having different machines run our implementation; we’re independent of that now. 

[click] Let's just work through this linear search function; I've re-structured it a little to split each operation onto a separate line.

[click] the assignment is one operation

[click] The while comparison happens arrSize times

[click] Nearly everything inside the loop happens arrSize - 1 times, so that's the increment of i [click] and the comparison against valToFind

[click] the return only happens once, so that's one operation

[click] Counting that as the end of the algorithm, we're at 32 operations all told for an arrSize of 10.

So this is better than measuring time as [click] the count depends on the algorithm, which is nice. [click] But it’s still a little bit implementation dependant – subtle changes to how we declare variables or run the loop might make minor changes
to the count, we might see two operations added at the start rather than one, giving us 33 operations. [click] Because we're not using processing time any more, it's a measure independent of hardware too so that's another win.

[click] But we get into a space where we have to decide which operations to count, should we count the return call? What about if the implementation calls another function?

So yes, this is an improvement - the value we get out depends on the size of the input now, so we get a better reflection of the algorithm rather than the implementation, but the implementation is still a factor and we want to separate that out completely.
 -->

---
layout: three-column-header
---

# Asymptotic Bounds

:: left ::

<v-clicks>

## Big $\mathcal{O}$
- $\mathcal{O}(g(n))$
- $f(n)\leq c \cdot g(n)$

</v-clicks>

:: middle ::

<v-clicks>

## Big Omega
- $\Omega(g(n))$
- $c \cdot g(n) \geq f(n)$

</v-clicks>

:: right ::

<v-clicks>

## Big Theta
- $\Theta(g(n))$
- $c_1 \cdot g(n)\leq f(n)\leq c_2 \cdot g(n)$

</v-clicks>

:: bottom ::

<v-click>

<BoundsChart id="asymptotic"/>

</v-click>

<!-- This leads us to the idea of the asymptotic bounds of an algorithm, which describes how the runtime or space requirements of an algorithm grow as the input size grows. We focus on the long-term behaviour, ignoring constant factors and smaller terms. 

We describe these in three different forms, Big O, Big-Omega and Big-Theta - these represent different asymptotic bounds in relation to the growth (represented by the g of n), Big O is the worst case (the upper bound), Big Omega is the best case (the lower bound) 
and Big Theta represents a tight bound, which occurs when Big O and Big Omega can be considered to be the same. -->

---
layout: default
---

# Calculating Big $\mathcal{O}$: Step-by-Step

<v-clicks>

- **Step 1**: Drop the constants
- **Step 2**: Find the highest order term

</v-clicks>

<div class="grid grid-cols-2 gap-4">

```cpp{hide|all|3,9|4,6,7|}
int SearchArrayLinearly(int valToFind, int arr[], int arrSize)
{
	int i = 0;
	while (i < arrSize)
	{
		i++;
		if(arr[i] == valToFind)
		{
			return i;
		}
	} 
  return -1;
}
```

<div>
<v-clicks at="4">

```text
2 operations
```
```text
3 * arrSize operations
```
```text
arrSize operations
```

</v-clicks>

</div>

</div>

<!-- So Big Oh represents the worst case situation; perhaps unsurprisingly, we find ourself caring about this more often than we might want to.
These are generally the biggest bottleneck when our application runs and so have the biggest impact on performance / runtime. We spoke briefly about this when we
look at sorting algorithms.

[click] The "simplest" way to calculate it is to drop any constants and [click] then find the highest order term that's left; [click] let's take a look at the linear search function again.

[click] So these operations are effectively constant, as they happen once in the run of the algorithm - as the input size increases, these have less and less impact. When arrSize was 10, we had 32 operations - if it's 100 then we have 302 operations, at 1000 it's 3002... 
So obviously, removing the constants at higher levels of n means nothing (really).

[click] There are also multiplicative constants, so the three operations here multiply against arrSize (or n), giving us 3*arrSize.

[click] But, fundamentally, we care about the growth rate - that is, what is the term that grows most rapidly? and in this case, that's the value of arrSize -->

---

# Laws of addition and multiplication

<v-click>

- ## Law of addition - $\mathcal{O}(f(n)) + \mathcal{O}(g(n)) = \mathcal{O}((f(n)+g(n)))$

</v-click>

<div class="grid grid-cols-4 grid-rows-1 place-content-center">

<v-clicks>

```cpp
for (int i = 0; i < n; i++) 
{
  std::cout << 'a\n';
}

for (int j = 0; j < n*n; j++) 
{
  std::cout << 'b\n';
}
```

  <div class="grid grid-rows-2 self-center justify-self-center">
    
  <div>
  
  $\mathcal{O}(n)$
  </div>

  <div>
  
  $\mathcal{O}(n*n)$
  </div>
  
  </div>
  
  <div class="self-center justify-self-center text-sm">
  
  $\mathcal{O}(n)+\mathcal{O}(n^2)=\mathcal{O}(n + n^2)$
  </div>
  
  <div class="self-center justify-self-center">
  
  $\mathcal{O}(n^2)$
  </div>

</v-clicks>

</div>

<v-click>

- ## Law of multiplication - $\mathcal{O}(f(n)) \cdot \mathcal{O}(g(n)) = \mathcal{O}((f(n)\cdot g(n)))$

</v-click>

<div class="grid grid-cols-4 grid-rows-1 place-content-center">

<v-clicks>

```cpp
for (int i = 0; i < n; i++) 
{
  for (int j = 0; j < n; j++) 
  {
    std::cout << 'c\n';
  }
}
```

<div class="self-center justify-self-center">

  2 loops, each $\mathcal{O}(n)$
</div>

<div class="self-center justify-self-center text-sm">

$\mathcal{O}(n)\cdot\mathcal{O}(n) = \mathcal{O}(n \cdot n)$
</div>

<div class="self-center justify-self-center">

$\mathcal{O}(n^2)$
</div>

</v-clicks>

</div>

<!-- When we're working to calculate Big O, there are two useful laws that we can keep in mind - those of addition and multiplication. They help us look at a piece of code, real or pseudo, and reason out
the relationships. 

[click] The law of addition states that if we have two functions, f(n) and g(n), then the order of growth is the combination of the order of the growth for both functions...

[click] So, in this example, we have two loops that run separately, one that runs n times and one that runs n squared times. [click] The Big O of the first loop is n, the Big O of the second loop is n squared, [click] the law of addition means that the Big O of the two loops together is the sum of the two, [click] so n squared after we drop the minor term of the singular n.

[click] Meanwhile, the law of addition combines the operations of nested statements.

[click] Here, we have two loops, one nested inside the other.

[click] The inner loop is O(n), but then the outer loop also loops n times, so that’s O(n) too. 

[click] The law of multiplication means that the Big O of the two loops together is the product of the two

[click] so n squared

-->

---
layout: center
transition: slide-up
---

# Big-O Examples

<div class="grid grid-cols-2 gap-4">

## Operations
## Big $\mathcal{O}$

<v-clicks>


  $n^2 + 2 \cdot n + 2$

  $\mathcal{O}(n^2)$

  $n^2 + 100,000 \cdot n + 3^{1000}$ 

  $\mathcal{O}(n^2)$ 

  $\log(n) + n + 4$ 

  $\mathcal{O}(n)$  
  
  $0.0001 \cdot n \cdot \log(n) + 300 \cdot n + 2$

  $\mathcal{O}(n \log n)$

  $2 \cdot n^{30} + 3^n$  

   $\mathcal{O}(3^n)$  

</v-clicks>

</div>



<!-- Let’s look at some examples of what I mean, so I have a few expressions where I've counted the operations.

[click] I’ve got n squared + 2 times n + 2, given that we’re looking for the dominant term – we can drop the 2n and the 2, [click] so the Big O value of our expression is n squared. 

[click] This second one is actually the same, it may feel like a hundred thousand times n is going to the slow point and that’s true for smaller values of n, but remember that we’re looking at the worst case, [click] so n squared is the thing to look at here. 

[click] The third one is a polynomial expression, we’ve got n in here twice, but which one is going to grow the most? [click] It’s just n – it’s a linear growth. 

[click] The fourth is a bit crazy looking, we’ve got a lot going on here but the term that’s going to grow the most? [click] n * log(n). 

[click] How about this one? What’s the big term here? Who thinks it’s n to the 30th? Anyone? [click] What about 3 to the n?
-->

---

# Visualising Growth Rates

<GrowthChart id="growth" :clicks="5" />

<!-- So this graph shows us some of the more common growth rates; the difference is more visible at lower values of n, so we only go up to 5 across the x axis here!

The red is constant, blue is logarithmic, green is linear, purple is quadratic and yellow is exponential. -->

---

# $\Omega$ : The Lower Bound
$f(n)\geq c_2 \cdot g(n)$

```cpp{hide|*}
int SearchArrayLinearly(int valToFind, int arr[], int arrSize)
{
	for(int i = 0; i < arrSize; i++)
  {
		if(arr[i] == valToFind)
		{
			return i;
		}
	}

  return -1;
}
```

<!-- Given it represents the best possible case, it's common that Omega is a constant. 

[click] For our linear search, the best case is 1 - we find the thing we're looking for in the first element of the array.
The best case is rarely a beneficial thing to consider in the real world, as we tend to care more about the worst case, but it's useful to know that it's there. -->

---

# $\Theta$ : The Tight Bound

$c_1 \cdot g(n)\leq f(n)\leq c_2 \cdot g(n)$

```cpp{hide|*}
void iterateArray(int* arr, int arrSize) {
  for (int i = 0; i < arrSize; i++) {  // O(n) and Ω(n)
    std::cout << arr[i] << '\n';  // Constant time operation
  }
}
```

<!-- The tight bound is found when, in effect, the Big O and the Big Omega for an algorithm are the same. 

[click] Here, that's the case for iterating through an array - the best case is the same as the worst case, as we're always going to iterate through the entire array.

Mathematically, this does not represent the average case - but the notation is often used to
represent just that. The average case usually ends up being the same as the worst case, as to find the average you need to divide n by 2 but then you remove the constant and end up back at n again... -->


---
layout: center
---

# Common Growth Rates in Algorithms

| Algorithm | Best | Average | Worst |
|-----------|:------:|:---------:|:-------:|
| Quicksort | $\Omega(n \log n)$ | $\Theta(n \log n)$ | $\mathcal{O}(n^2)$ |
| Mergesort | $\Omega(n \log n)$ | $\Theta(n \log n)$ | $\mathcal{O}(n \log n)$ |
| Heapsort | $\Omega(n \log n)$ | $\Theta(n \log n)$ | $\mathcal{O}(n \log n)$ |
| Bubble Sort | $\Omega(n)$ | $\Theta(n^2)$ | $\mathcal{O}(n^2)$ |
| Insertion Sort | $\Omega(n)$ | $\Theta(n^2)$ | $\mathcal{O}(n^2)$ |
| Selection Sort | $\Omega(n^2)$ | $\Theta(n^2)$ | $\mathcal{O}(n^2)$ |
| Radix Sort | $\Omega(nk)$ | $\Theta(nk)$ | $\mathcal{O}(nk)$ |
| Bogo Sort | $\Omega(n!)$ | $\Theta((n+1)!)$ | $\mathcal{O}((n+1)!)$ |


<!-- There is a set of quite complex math that we could get into, the master theorem, which we can use to calculate the asymptotic bounds of an algorithm. But realistically, 
it's ok if we keep in mind the Big O for common algorithms and have a reasonable idea about how to estimate it for any given algorithm or piece of code. -->

---

# Summary

<div class="columns-2">

<div class="break-after-column">

- Big O ($\mathcal{O}$): Upper bound on growth
  - The worst-case scenario
- Big Omega ($\Omega$):Lower bound on growth
  - The best-case scenario
- Big Theta ($\Theta$): Tight bound on growth
  - The average-case scenario or typical growth

</div>
<div>

- Common Complexities (best to worst):
  - $\mathcal{O}(1)$ - Constant
  - $\mathcal{O}(log(n))$ - Logarithmic
  - $\mathcal{O}(n)$ - Linear
  - $\mathcal{O}(n\cdot log(n))$ - Linearithmic
  - $\mathcal{O}(n^c)$ - Quadratic
  - $\mathcal{O}(\mathcal{C}^n)$ - Exponential
</div>

  </div>

  <!-- What it is:  A measure of how an algorithm's resource consumption (time or space) scales with the input size (n).  We focus on the growth rate, ignoring constant factors and smaller terms.

Why it matters:  Crucial for choosing the right algorithm, especially for large datasets.  A faster-growing algorithm will quickly become impractical as input size increases. 

Understanding algorithmic complexity helps us write efficient code that performs well even with massive amounts of data. -->