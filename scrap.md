---Training Kit Link---

TK Link - https://learn.lambdaschool.com/cs/module/reca7nyptklr7f403

---PRECLASS VIDEOS---

Object Oriented Design - https://www.youtube.com/watch?v=124f0YBJgro

Class Inheritance - https://www.youtube.com/watch?v=tKSCUSGiwMg

Class Association - https://www.youtube.com/watch?v=Dpc0Ajah2Ns

---Github Repo Day3/Day4---

Repo - https://github.com/LambdaSchool/Intro-Python-II

```playerDirections = ['n','s','e','w']
        if playerDirection in playerDirections:
            new_room = room_change(playerDirection)
            if not new_room:
                print("you cannot move that way");
                return;
            else:
                curr_room = new_room

```

```
----Sprint Challenge Day----

Github Repo -

* Fork & Clone
* Dont forget to add me as a collaborator(This will count as your attendance.)
* Submit a airtable form after you finish your sprint challenge https://airtable.com/shruSVU97eR6CHE5A
```

```

As we go through the sorting module please try to find time before the GP on monday morning to review this material to help on the project for the sorting module.


TK Link - https://learn.lambdaschool.com/cs/module/reck76spx26begsqe

Github Repo - https://learn.lambdaschool.com/cs/module/reck76spx26begsqe

Runtime Complexity Video - https://www.youtube.com/watch?v=rEx9E_Oq8xg

Linear & Binary Search - https://www.youtube.com/watch?v=a1oLy-ft8o8

Recursion - https://www.youtube.com/watch?v=n59qpp0SNDo

BIG O Geeks for Geeks quick read - https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/

```

```
swapping_occured = true
while swapping_occured
    swapping_occured = false
    for i in range(len(arr) - 1)
        if arr[i] > arr[i + 1]:
            swapping_occured = true
            SWAP ALGO
```

```
Problems
1. Counting Votes - Davina Taylor
2. Integer Pairs - Kawsar Huseen
3. Matrix Spiral Copy - Joel Bartlett
4. Largest Contiguous Sum - Michael Checo
5. Search In Sorted Matrix - Shreyas Jothish
6. Suffix Trie - Thomas Hessburg
7. Zeroes to the Right - AJ Brush

You will get interviewed with somebody from your PM group. You will show step by step your partner how to solve your problem.
```

```
Pair Programming Partners

Davina - Michael
Kawsar - Thomas
AJ - Joel
Shreyas - Carlo

```

DATA STRUCTURES

Data Structures TK Link -https://learn.lambdaschool.com/cs/module/recuhKMtdYvWMeXMz

4 Day Github repo - https://github.com/LambdaSchool/data-structures

---TK Videos---

Queues -https://www.youtube.com/watch?v=j-fBJpSQ19g

Linked List - https://www.youtube.com/watch?v=7sk4jG83q80

Binary Search Trees - https://www.youtube.com/watch?v=SsRVdvRsNG0

Heaps Data Structure - https://www.youtube.com/watch?v=LYWPsV2YQBA

```

```

`Solutions!!

-----RPS------
def rock_paper_scissors_recursive(n):
outcomes = []
plays = ['rock', 'paper', 'scissors']

def find_outcome(rounds_left, result=[]):
if rounds_left == 0:
outcomes.append(result)
return
for play in plays:
find_outcome(rounds_left - 1, result + [play])

find_outcome(n, [])
return outcomes
------MAKING CHANGE------
def making_change(amount, denominations):
ways = [0] \* (amount + 1)
ways[0] = 1

for coin in denominations:
for higher_amount in range(coin, amount + 1):
remainder = higher_amount - coin
ways[higher_amount] += ways[remainder]

return ways[amount]

------KNAPSACK------
def knapsack*solver(items, capacity):
cache = [[0] \* (capacity + 1) for * in range(len(items) + 1)]

def knapsack_memoized_helper(index, capacity, value=0, bag=set()):
answer = cache[index][capacity]
if answer == 0:
answer = knapsack_bf_helper(index, capacity, value, bag)
cache[index][capacity] = answer
return answer

def knapsack_bf_helper(index, capacity, value=0, bag=set()): # No remaining items that fit
if index == -1:
return value, bag
elif items[index].size > capacity:
return knapsack_memoized_helper(index - 1, capacity, value, bag)
else: # Recurse cases of taking item/not taking item, return max
bag_copy = bag.copy() # Copy to avoid marking everything taken
bag_copy.add(index) # Calculate the value of taking this item
r1 = knapsack_memoized_helper(index - 1, capacity - items[index].size, value + items[index].value, bag_copy) # Calculate the value of not taking this item
r2 = knapsack_memoized_helper(index - 1, capacity, value, bag) # Choose the option with the larger value
return max(r1, r2, key=lambda tup: tup[0])

answer = knapsack_bf_helper(len(items) - 1, capacity)
return {'Value': answer[0], 'Chosen': sorted(list(answer[1]))}`

```
Pair Programming Partners

Davina - Thomas
Kawsar - Shreyas
Joel - Michael
AJ - Carlo

```
