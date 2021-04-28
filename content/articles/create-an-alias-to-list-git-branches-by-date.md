---
title: Create an Alias to List Git Branches by Date
summary: It is possible to list your local git branches ordered by most recent commit date, while showing some extra information, like the abbreviated commit sha and commit message. But if you're human, you'll never remember the whole command to do so. In this post you'll learn how to permanently save an easy-to-remember alias to run that lengthy command with ease...
date: 2020-05-27T02:09:00Z
img: clean-history.png
alt: git
categories: [{name: Git, slug: git}, {name: Workflow, slug: 'workflow'}]
---


<p class="drop-cap">Sometimes I wouldn't realize how many random one-off branches I had saved locally until one day, after running the generic git branch command, that I had no idea which branch was actually the one I needed. I wanted to be able to quickly see if a branch:</p>

1. Contained the right work
2. Was the most recent one (I was very sloppy about naming things similarly over a long period of time. Don't be like me.)

So instead of checkout out each branch one by one and looking at the commit history, and trying to read the not-so-nicely-formatted dates, I found what is now one of my favorite commands ever.

It is possible to list your local git branches ordered by most recent commit date, while showing some extra information, like the abbreviated commit sha and commit message.

_N.B. The following instructions are for Mac OSX command line users._

<pre><code style="white-space: initial" class="language-shell">git for-each-ref --sort=-committerdate refs/heads/ --color --format="%(HEAD)%(color:bold)%(refname:short)%(color:reset);%(color:green)%(committerdate:relative)%(color:reset);%(committerdate:format:'%m/%d/%Y\ %H:%M');%(color:cyan)%(authorname)%(color:reset);%(color:yellow)%(objectname:short)%(color:reset) %(color:italic)%(contents:subject)%(color:reset)" | column -t -s ";"
</code></pre>

Your results should look something like this:

<post-image src="https://cdn.buttercms.com/Cu8MHsagSLKCBK4ZFfAZ" alt="list of git branches"></post-image>

If you're human, you'll never remember that whole command. I personally have it saved as an alias called `gbl` (like "git branch list") that you can create as well by following along below.

To make aliases permanent, we have to set them in your bash profile file that gets read when you open Terminal (or whatever client you use - I personally use iTerm). They don't all share the same name, but some common ones are _~/.bashrc_ and _~/.bash_profile_. If you're having trouble finding yours, it should be located in your home directory. If not, you can create one yourself!

For this example, let’s use _~/.bash_profile_.

On a new line in your profile file, lets create an alias called gbl for that command that lists out our branches by updated date:

<pre><code class="language-shell" style="white-space: initial" >alias gbl='git for-each-ref --sort=-committerdate refs/heads/ --color --format="%(HEAD)%(color:bold)%(refname:short)%(color:reset);%(color:green)%(committerdate:relative)%(color:reset);%(committerdate:format:'%m/%d/%Y\ %H:%M');%(color:cyan)%(authorname)%(color:reset);%(color:yellow)%(objectname:short)%(color:reset) %(color:italic)%(contents:subject)%(color:reset)" | column -t -s ";"'</code></pre>

Great! Save the file and head back to your terminal app.

Now, we have to tell our terminal application to reload and get the latest changes to the bash profile file. If yours was located at _~/.bash_profile_, you would run the following command in your terminal:

`source ~/.bash_profile`

If you try running `gbl` in your command line, you should see your branches listed out, sorted by the date of the last commit to the branch!