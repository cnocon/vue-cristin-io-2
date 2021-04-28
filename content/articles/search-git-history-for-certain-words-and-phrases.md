---
title: Search Git History for Certain Words and Phrases
summary: Finding your work in a long history of commits can be difficult. These commands help search your git reflog or log history for exactly what you need, whether your search term(s) are a word or phrase...
date: 2020-05-26T22:30:00Z
img: git.png
alt: git
categories: [{name: Git, slug: git}, {name: Workflow, slug: workflow}]
---


<p class="drop-cap">When I started my first job at a company that used git for version control, I had never worked on projects of a scale that required more than a rudimentary knowledge of how to use git (I could add, commit, push, and pull, without really understanding what was happening the whole time). Years later, I use a nuanced and broad range of git commands regularly, even for personal projects.</p>

To date, my favorite command (spoiler: THE ONE I'M ABOUT TO TELL YOU ABOUT) helps search my history for given words or phrases.

## Find Commit Messages Matching Your Search Term

If you want to find all commits where the commit message contains a given word, you can take advantage of `grep`.

`git log --grep=SOME_WORD`

OR `reflog`:

`git reflog --grep-reflog=SOME_WORD`

For example, say I run `git log --grep=fix`.

This should output what looks like a normal `git log` except that only commit messages with some semblance of the word "style" show up.

<post-image src="https://cdn.buttercms.com/d8pk6nCbRTmExisx09mn" alt="Git log"></post-image>

## Searching for Multiple Words or a Phrase

If you want to search for multiple words or a phrase, you just have to use quotes:

`git log --grep='my phrase'`

Same with `--grep-reflog`:

`git reflog --grep-reflog='my phrase'`

I hope this was post was helpful! Thanks for taking the time read it!


