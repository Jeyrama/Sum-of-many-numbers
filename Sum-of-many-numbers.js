/*
Due to another of his misbehaved, 
the primary school's teacher of the young Gauß, Herr J.G. Büttner, 
to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, 
while he is teaching arithmetic to his mates, 
assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; 
so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:
f(n=100) // returns 5050 

It's your duty to verify that n is a valid positive integer number. 
If not, please, return false.
*/

// Solution

function f(n) {
  return (parseInt(n) === n && n > 0) ? n*(n+1)/2 : false;
};

// or

function f(n) {
  return (n % 1 !== 0 || n <= 0) ? false: (((n + 1) * n) / 2);
};