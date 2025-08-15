# FeelJS
## What is this?
This is an implementation of [Albert Wong's](https://observablehq.com/@ajwwong/feeling-wheel) reimagining of [Geoffory Robert's Emotions Wheel](https://imgur.com/a/emotion-wheel-CkxQC)!

I've done an implementation of this previously in [Ruby](https://github.com/tokisuno/feel), but since I've been using JavaScript a lot more, I wanted to re-implement an old project in the language! It definitely makes me appreciate both JavaScript and Ruby a lot more as language.

## Current features
- Coloured output
- Saves to MongoDB (put key to your own database inside .env)
    - Saves with the mood, and current datetime
- Shows a cool spinner on ``await``

## Known Bugs
- If you make an invalid selection, it never stops prompting.

## Goals with doing this
- I want to write a web-app based on this concept at some point for people to track their moods.
    - Starting off by writing a basic CLI version of this
- Although I am unsure of both the effectiveness and the accuracy of the feelings wheel, it's something that I've used in the past in order to get a better gauge as to how I am feeling and think it would be useful to others who are going through CBT!
- This is just one step forward towards making that application (baby steps, baby steps).
