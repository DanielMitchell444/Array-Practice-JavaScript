/*After we finish the section on strings and conditional statements, we will
essentially be moving onto for loops. I think we talked about for loops 
previously, but we are going to go over them again just in case
The defintion of a for loop is that it loops through a block of code a
number of times. For loops usually have 3 optional conditions
The first condition is expression one, in expression 1, it is typically
declaring a starting variable
so for right now, the condition should be for(let i = 0;)
    this is esentially the number that the loop will start at
after that, we will move onto the second part
*/

/*
The second part of a for loop defines the condition for executing a code block.
This is typically shown by how many times you want the loop to run. For example,
most of the time, you have seen it typically like this
for(let i = 0; i < 5;);
this is where you can determine how many times you want the loop to execute for.
*/

/*
The next part is the third part, which executes everytime the after the code
block has been executed. When i initially taught this, you saw that this is 
mostly when you increment, meaning you either use i++ or i--
so with that being said, the syntax of a for loop
*/

for(let i =0; i < 5; i++){

}


/*You might be asking yourself, why are we learning this again? Well,
for loops brings us into learning more about arrays, because most
of the time, we use arrays when we use for loops
*/

/*
The definition of an array is a special variable that can hold more
than one value.
We can use arrays to hold many values under one variable
for example, to create an array, it looks something like this
*/

const cats = ["Marco", "Lilly", "Desmond", "Ethan"];

/*
You will notice that we are using the constant variable instead of let, 
that is because it is common practice to declare arrays using const
instead of let. But both ways work. For this class, i want you
to use const
*/

/*
PRACTICE:
Below this comment, i want you to create an array using the proper
syntax listed above. This array should have 3 indexes, and remember,
that arrays start at 0. Please post the code in the comment below.
*/

/*
ACCESSING ARRAY ELEMENTS
You can access array elements using the name of the array, followed by
the index of said array. Remember that arrays start at index 0,
so if we wanted to get the first index of array, we would have to do
something like this
*/

let coolCats = cats[0];

/*
This would accesss marco, it goes up from 0 1 2 3 and 4
*/

/*
We can change array indexs by specifing the array index. We can do this
like so
*/

cats[0] = "Pikachu";


/*
And this essentially changes the 1st index of the array from Marco to Pikachu
*/

/*
PRACTICE:
Using the array you just created, change the 2nd index of the array
to anything you want. Please post the code below this comment.
*/

/*
ACCESSING THE LAST ELEMENT OF AN ARRAY
We can essentially pick the last index of an array by doing
something similar to what we did with strings
we can go like this
*/

let cats2 = cats[cats.length - 1];

/*This will essentially access the last element of an array */

/*
PRACTICE:
Below this comment, i want you to create a new variable like above,
and then access the last element of your newly created array using
the method listed above. Please write the code below this comment.
*/


/*ARRAY METHODS */

/*
Like strings, arrays have very similar methods to strings. There are some
you probably know, while there are some that you will learn throughout this
lesson.
I will briefly go over the methods, as you should already know them. 
If you need another explanation on some of these methods, i will explain
them to you 

.LENGTH
Basically similar to .length in strings, it essentially just checks to see
the length of the array.
*/

/*
PRACTICE: 
Below this comment, i want you to check the length of the array you
created using the .length method.
*/

/*
Looping through arrays
Another useful thing we can do is loop through an array, one way to
loop through an array is using a for loop. We can then essentially
either console.log the indexes, or compare the indexes using an if 
statement. This will come later, but for now, lets loop through
an array.
Lets loop through the cats array, in order to do this, we can use
the following syntax
*/

for(let i = 0; i < cats.length; i++){

}

/*Doing this will essentially loop through each index of the cats array,
since there are 3 indexes, this loop would essentially loop through
the array 3 times, and then stop.
*/

/*
PRACTICE:
Using your array you created, i want you to loop through the indexes
of the array using a for loop. Please post the code below this comment.
*/

/*
Now, lets say that we want to add items to an array. Well, there is
a very easy way to do so, and that is by using the .push() method
The push method adds items to the end of the array, there are ways
to add an array item to a specific index, but this is something that we
will get to later.
For now, lets get the syntax for the push method.This is as follows
*/

cats.push("Donky");

/*
This would essentially push donky to the end of the push array,
and would add a 4th index to said array.
*/

/*
PRACTICE:
Below this comment, i want you to use the push method to push another index
to the array. Please write the code below this comment.
*/


/*
THE POP METHOD
The pop method is similar to the push method, the huge difference
being that it pushes the last element from the array.
For example, lets say we create a new array of phones
*/

const array = ["Iphone", "Samsung", "Google"];

/*
If we use the .pop() method, it would essentially pop the last
element, google, from the array, here is the syntax for that method
*/

array.pop();

/*
Below this comment, i want you to use the pop method on your array. Please
post the code below this comment.
*/


/*
CONCAT METHOD
The concat method is another new method that we can use
the concat method creates an array by merging existing arrays
for example, lets say we have two arrays
*/

const array1 = ["apples", "bananas", "oranges"];
const array2 = ["Memes", "Dreams", "Believe"];

/*We can use the concat method to essentially add the two arrays together
the syntax is as follows */

const stuff = array1.concat(array2);

/*And this would essentially add the two existing arrays together */

/*
PRACTICE:
Below this comment, i want you to create two new arrays, name them
array3 and array4, then i want you to create a new variable and store
the concatinated array inside that variable. And then add the two
arrays together using .concat(). Please post the code below
this comment.
*/

/* THE SPLICE METHOD 
We talked earlier about how there are ways to add specific values to an
array, this is where the spice method comes in. The splice method can be
used to add new items to an array
Lets use the array2, the array we just used as an example
in the splice method, the first parameter defines the position where new
elements should be added, while the second element defines how many
elements should be removed. For example, lets say we wanted to add it to the
middle of the array. We can do this like so
*/

array1.splice(2,0, "Lemon", "Kiwi");

/*And this would essentially add lemon and kiwi to the 2nd index of the array */




/*SPLICE METHOD
Similar to strings, there is also a splice method with arrays.
For a reminder, the splice method to remove elements from an array
a quick reminder that the 2nd parameter is ommited,
so lets say we use the original array, array1, and go .splice()
and we do the following
*/

array1.splice(0,1);

/*
In this instance, the 1 would be ommitted and we should just remove the
0 index from the array.
*/


/*
PRACTICE:
Below this comment, i want you to create another array, you can name
the array whatever you want. And then, i want you to splice the 0 index through
the 2nd index of the array.
*/

/*SLICE METHOD 
The slice method is the last method we will be looking at for arrays,
the slice method slices out a part of an array into a new array
for example, lets use the .slice() method to get the 2nd index from the array
into another array
if we went like
*/

const citrus = array1.slice(1);

/*This would essentially just make a new array with only the 2nd index
of the first array */

/*
PRACTICE:
Below this comment, i want you to create another new array. You can title the
array whatever you want. Then, i want you to use the slice method to
slice the 2nd index of the array. Please put the code in a constant.
PLEASE TYPE THE CODE BELOW THIS COMMENT.
*/