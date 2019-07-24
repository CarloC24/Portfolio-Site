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

```
You will solve your problem and explain the process of solving the problem every step of the way to your partner.

Coding Challenges
AJ - Balanced Brackets
Thomas - Reversed Link List
Davina - Sort Top Stores
Kawsar - Zeroes to the Right
Michael - Set of Stacks
Joel - Depth First Search
Shreyas - Min Jumps



Pair Program Partners

AJ - Davina
Kawsar - Joel
Shreyas - Michael
Thomas - Jubilee Young


LambdaSchool Whiteboard pairings Repo - https://github.com/LambdaSchool/Whiteboard-Pairing
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

Pair Programming Partners

Davina - Carlo
Kawsar - Thomas
Joel - Shreyas
AJ - Michael

Topic - talk about how you solved earliest ancestor or the social graph

```

```

Michael Checo - I'll serve soup

##WebUI
Candance Rossi
May Ng
##Frontend
Peishan Lee
Laura Dougherty
##Backend
Alfonso Garcia

```

```

Davina Taylor - Foodie Fun

##WebUI
Tania Keller
Jonathon Green
##Frontend
Blake Goms
Jacob McGrath
##Backend
Nguyen Vo

```

```

Joel Bartlett - African Marketplace

##WebUI
Keshawn Sharper
Saipher Zureti
Daniela Arias Ordonez
##Frontend
Vincent Nmergini
##Backend
Leigh Martin

```

```

Andrew Brush - Art Portfolio

##WebUI
William Brooks
Nisa
Greg Poirer
##Frontend
Patrick Rodrigues
##Backend
Thierry Joux
##UX
Kimberly Ho

```

```

Kawsar Hussen - Wanderlust

##WebUI
Patrick Baldwin
Tommy Lee Coleman
##Frontend
Sascha Majewski
Jeff Oliver
##Backend
Rogelio Caballero
##UX
Landon Bassett

```

```

Albert Wong/Shreyas Jothish - AirBnB optimal price

##WebUI
Kelly Moreira
Noor Al Darraji
##Frontend
David Clavijo
Christopher Carter
##Backend
Sam Jeffcoat
##Data Science
Connor Heraty
Tomas fox

```

```

Thomas Hessburg - Org Chart

##WebUI
Lily Zhou
Hamidou Diallo
##Frontend
Anthony Piazza
##Backend
Dwayne Pearson

```

```

BUILD-WEEK

1.                        Watch the video.... `https://youtu.be/oUOz5FfckSg`
2.                        Set Up Trello board
3.                        Create a Github Organization ---  https://help.github.com/en/articles/creating-a-new-organization-from-scratch
4.                        Create a Slack channel invite your team members their respective PM and  me(thanks)
5.                        You need to hold daily stand-up with your team (prefer in morning so we can have our evening stand-up)
6.                       Suggestion ..... pin these links in your channel as you need them frequently
    --> https://www.notion.so/Policies-and-Procedures-19e679fc1a284b668d8132dd8d7228cd
    --> Trello board Link
    --> Github-Organization link

```

```

F/E - React or Vue ??
Packages - Axios , Router
F/E APIS - Zoom API

B/E - NodeJS
B/E Packages - PassportJS , SocketIO

```

```

email:carlo.clamucha@gmail.com
linkedIn:https://www.linkedin.com/in/juan-carlo-clamucha-1489b216b/
github:https://github.com/CarloC24
summary:I am a web developer residing in Texas, and currently looking for a job in software development/web development. I studied computer science at my local community college for a year and a half before I joined Lambda School. I've recently graduated for the Lambda School web development course.

```

```

Kawsar - (https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/BalancedBinaryTree)
Joel - (https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/LargestContiguousSum)
AJ - BST from Array (https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/BSTFromArray)
David - Ring Buffer (https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/RingBuffer)
Thomas - Queue with two stacks (https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/QueueWithTwoStacks)
Michael - Nth Fibonacci(https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/NthFibonacci)

Michael - David
AJ - Joel
Thomas - Kawsar

```

```
