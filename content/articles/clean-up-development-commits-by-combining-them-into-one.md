---
title: Clean Up Developments Commits By Combining Them Into One
summary: This post demonstrates how you can cleanup your commit history on a local branch prior to merging it into another branch (e.g. 'master'). Keeping frequent commits throughout your development process on a local branch can be very helpful for works-in-progress, but long, detailed histories that were meant to aid in...
date: 2020-07-19T17:42:00Z
img: git.png
alt: Git
categories: [{name: Git, slug: git}, {name: Workflow, slug: workflow}]
---


<p class="drop-cap">This post demonstrates how you can cleanup your commit history on a local branch prior to merging it into another branch (e.g. 'master').</p>

Keeping frequent commits throughout your development process on a local branch can be very helpful for works-in-progress, but long, detailed histories that were meant to aid in development may not be appropriate to put into production. For example, if you're tasked with adding a carousel to a page, the only commit that, in my opinion, should exist in your production branch should be something like "[ISSUE#] Add carousel to home page". No one needs to see each incremental change you made on the local branch.

## How do we get from our long, detailed development branch history to a concise, production ready history?

First, let's create a history to work with on a new development branch called demo based off of master. For our purposes, master will serve as our production branch, while demo is our development branch we're using to create a detailed README file. Inside demo, I updated the README several times, committing after each change. When I run <code>git log</code>, my history looks like this (ignore the fact my commit email addresses are different - I have my reasons!):

<post-image src="https://cdn.buttercms.com/1cvSxqa3RESSyYkyJOy4" alt="Git history"></post-image>

Let's say we've been super efficient and our README is done already, and our changes are ready for production. It's now time to get our history production ready.

### Step 1: Combine Your Commits with a Soft Reset

We want to take our 2 commits from editing the README and combine them into one commit that contains all the same changes. To do this, we can use what is called a soft reset, which will simultaneously un-commit everything while preserving your changes from the previous n commits.

`git reset --soft HEAD~n`

Since we have 2 commits we want to combine, our n is equal to 2.  The entire command looks like:

`git reset --soft HEAD~2`

If you run `git log`, you'll see all of our previous commits are missing. But if you run `git status`, you'll see the staged README file with all of our changes intact. We're ready to make our production-worthy commit message now!

### Step 2: Commit

Just like you'd normally do, commit the changes. But be careful to use a concise, meaningful message that makes it clear what was changed. For my purposes, my message will be: `Add first and second sections to README file` (note the use of present tense - this is a best practice stylistically).

Our new development branch history will look like this:

<post-image src="https://cdn.buttercms.com/xvPmg3PkQhqxIXriEFZa" alt="Git history"></post-image>

### Step 3: Merge your branch into master (or whatever your production branch is)

`git checkout master`

`git merge demo`

Our production branch history will now contain our single new commit.

## Accessing Your Development Commits After a Soft Reset

Say you hear from the product owner that they actually only want to keep the first of the two sections you added to the README file due to poor planning up front. OK, so you could technically just make a new commit that deletes the second section. Let's look at how to revert our development branch to that point in history after we've done a soft reset on it using the magic of reflog. _Note: This may seem like overkill given the simplicity of our changes, but let's pretend we did a lot more complicated stuff and changed many more files, and we can't just delete a section in a new commit_.

We're going to check out out development branch, demo, and restore it to the commit containing only the first new README section.

### Git Reflog

Unlike `git log`, which contains a commit ancestry for the current HEAD, `git reflog` contains a history of every action performed where data changed. When I run `git reflog` on my demo branch, it looks like this:

<post-image src="https://cdn.buttercms.com/E3ZLqokvRa2W41KuvIhg" alt="Git reflog history"></post-image>

We can see basically everything we've done in the entire repository, not just on the local branch. A few notable items are:

1. `HEAD@{6}` The commit containing the changes we want to restore to.
2. `HEAD@{4}` The soft reset action we performed
3. `HEAD@{3}` The production-ready commit we made after our soft reset
4. `HEAD@{0}` Our current state (it shows a checkout because I had to checkout demo again after being on master to perform the first merge with demo).

The abbreviated SHAs in yellow are what we can use to revert to that commit. In this case, we want to use `451437d` since that is the SHA for the change at `HEAD@{6}`.

`git reset --hard 451437d`

<post-image src="https://cdn.buttercms.com/g6xGgVsWSeCN9sCnprgS" alt="Git reset hard output"></post-image>

Now that your branch contains only the changes you want, you can edit the commit message for production by running:

`git commit --amend -m "Add first section and remove second section from README file"`

Now if we run `git log` on our demo branch, we'll see our production ready commit instead of our old commit:

<post-image src="https://cdn.buttercms.com/DBFgVKVGQ7CThuPA2Dki" alt="New git history"></post-image>

You can merge this branch back into master like you'd normally do. You'll likely encounter merge conflicts due to the fact that you revised the history of the demo branch. But this is easy enough to fix - just accept the incoming change for each conflict in your code editor (I use VSCode's built in merge conflict helper):

<post-image src="https://cdn.buttercms.com/sELQSISS9jIL6Fjk2CAl" alt="VS Code's Merge Conflict Helper"></post-image>

After you accept the incoming change, save the file, and run `git add` followed by `git commit -m "Fix merge conflicts with demo"`.

The new history for the _master_ branch looks like this:

<post-image src="https://cdn.buttercms.com/TF6g3lnDTIqKajYrDeZ6" alt="New git history"></post-image>



















