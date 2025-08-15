# FeelJS
## What is this?
This is an implementation of [Albert Wong's](https://observablehq.com/@ajwwong/feeling-wheel) reimagining of [Geoffory Robert's Emotions Wheel](https://imgur.com/a/emotion-wheel-CkxQC)!

I've done an implementation of this previously in [Ruby](https://github.com/tokisuno/feel), but since I've been using JavaScript a lot more, I wanted to re-implement an old project in the language! It definitely makes me appreciate both JavaScript and Ruby a lot more as language.

### Current features
- Coloured output
- Saves to MongoDB (put key to your own database inside .env)
    - Saves with the mood, and current datetime
- Shows a cool spinner on ``await``

### Goals with doing this
- I want to write a web-app based on this concept at some point for people to track their moods.
    - Starting off by writing a basic CLI version of this
- Although I am unsure of both the effectiveness and the accuracy of the feelings wheel, it's something that I've used in the past in order to get a better gauge as to how I am feeling and think it would be useful to others who are going through CBT!
- This is just one step forward towards making that application (baby steps, baby steps).

# Documentation

## Functions

<dl>
<dt><a href="#handleInput">handleInput(input, _head)</a></dt>
<dd><p>Validates user input. Checks whether input is a valid range (amount of options).</p>
</dd>
<dt><a href="#printFeelings">printFeelings(_head)</a></dt>
<dd><p>Prints feelings from current node&#39;s head.</p>
</dd>
<dt><a href="#feelingsInDb">feelingsInDb()</a></dt>
<dd><p>Returns full dataset from MongoDB</p>
</dd>
<dt><a href="#printLast10Feelings">printLast10Feelings()</a></dt>
<dd><p>Prints the most recent 10 entries made by use</p>
</dd>
</dl>

<a name="handleInput"></a>

## handleInput(input, _head)
Validates user input. Checks whether input is a valid range (amount of options).

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | User input |
| _head | <code>object</code> | Head of node to be checked |

<a name="printFeelings"></a>

## printFeelings(_head)
Prints feelings from current node's head.

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| _head | <code>object</code> | Head of node to be checked |

<a name="feelingsInDb"></a>

## feelingsInDb()
Returns full dataset from MongoDB

**Kind**: global function
<a name="printLast10Feelings"></a>

## printLast10Feelings()
Prints the most recent 10 entries made by use

**Kind**: global function
