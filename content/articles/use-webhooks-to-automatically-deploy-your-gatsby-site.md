---
title: Use Webhooks to Automatically Deploy Your Gatsby Site
summary:  Use a Webhook to automatically build and deploy your site on Netlify after you create, update, or delete a post in ButterCMS. This way you avoid having to manually rebuild and redeploy your site just to fix a typo in a post.
date: 2020-06-28T06:35:00Z
img: netlify.png
alt: Rocket launching
categories: [{name: Gatsby, slug: gatsby}, {name: Netlify, slug: netlify}, {name: Webhooks, slug: webhooks}]
---

<p class="drop-cap">I used to use a headless CMS by the name of ButterCMS to create and publish the posts you see on CRISTIN.IO. This was also when my site used Gatsby, so I had set up API calls to fetch and create pages server-side based on the data returned from the ButterCMS API (with some help from the [gatsby-source-buttercms plugin](https://github.com/buttercms/gatsby-source-buttercms)). Because I'm rendering these pages server-side, the client won't have the ability to re-fetch content with every page load. To generate the new version(s) of my updated post/posts pages, I'd have to rebuild the site locally so the server could re-fetch the updated data, and then finally deploy that build to Netlify manually via the command line.</p>

<quote>
  <template #quote>This is inconvenient and I hate doing it.</template>
  <template #cite>&mdash; Cristin O'Connor</template>
</quote>

I finally decided to look into using a Webhook to automatically trigger the build and deploy process. Thankfully, ButterCMS and Netlify make this relatively easy. You just have to follow the steps below.

<ol>
<li>Go to your Netlify site page and click "Site Settings" in the top left box.</li>
<li>In the menu on the left-hand side, click "Build & deploy"</li>
<li>Scroll down to the "Build hooks" section</li>
<li>Create a new hook. Name it "post.published" after the name of the Event in ButterCMS we're about to use. Make sure the branch you choose to build is the one that you usually deploy with.
<post-image src="https://cdn.buttercms.com/KzLtqtWqRWicy1QJVPM1" alt="Build hooks in Netlify"></post-image></li>
<li>Save your hook.</li>
<li>You'll see Netlify has assigned a URL to your hook. Any POST request to this URL will trigger a new build and deploy process in Netlify. Copy this URL - we'll need it in a moment.</li>
<li><a href="https://buttercms.com/login/" target="_blank" rel="noopener noreferrer">Log in to ButterCMS</a></li>
<li>Hover over your account Avatar at the very top of the side nav on the left-hand side and click on "Settings"</li>
<li>Click on "Webhooks"</li>
<li>Paste the Netlify URL we copied into the Target URL field. You can leave the Header fields blank for our purposes.</li>
<li>Select the "post.all" event from the Event field dropdown menu. _Note: If you want to use a different event, feel free! Post.all is useful because it will rebuild and deploy our site whether we delete, update, or create a new post. It's a nice catch-all event. All event types are pictured below:_
<post-image src="https://cdn.buttercms.com/1umktjuFS1iyBrWjBuGG" alt="Event types in ButterCMS"></post-image></li>
<li>Click the "Save" button.</li>
</ol>

And you're all set! Now, anytime you modify, create, or delete a post, your site will automatically rebuild and deploy itself. Test it out by making an edit to an existing post and watching your deploys on Netlify (to view, click "Deploys" in the top horizontal menu that shows on your site settings page).

