# How to set up GitHub pages

First, we will [create a repository](#create-a-repository) named "**yourgithubusername**.github.io". Then, you have the option of using a [custom domain](#custom-domain) so the URL of your github pages is [example.com](http://example.com) instead of [example.github.io](http://example.github.io).

## Create a repository

You must be logged in to a GitHub account. 

- In the top right corner of any GitHub page, click the plus icon, then click "create new repository". A repository is a publicly-visible folder hosted by GitHub where you can share files.

[https://keshavsaharia.github.io/image/new-repository.png]

Create a repository named exactly "**yourgithubusername**.github.io", where **yourgithubusername** is substituted for your own username. Check the box for "Initialize this repository with a README". 

[https://keshavsaharia.github.io/image/create-github-pages-repository.png]

Finally, click the green "Create repository" button, which will bring you to a page showing the files in your repository.

[https://keshavsaharia.github.io/image/github-pages-repository.png]

Click the buttons to create individual files or upload your own HTML files. You should be able to navigate to [**yourusername**.github.io](https://keshavsaharia.github.io/) and see your HTML page.

## Custom domain

You will need to register a domain with a domain registrar like [GoDaddy](https://www.godaddy.com/), [Google Domains](https://domains.google/), or [Gandi.net](https://gandi.net). You can use [Instant Domain Search](https://instantdomainsearch.com) to quickly verify if the domain name you want is available.

**I will update this section with screenshots.**

Once you have registered a domain, you will need to add two `A` records that point to the following IP addresses:

- 192.30.252.153
- 192.30.252.154

Finally, add a CNAME record for the key "www" with a value of **yourgithubusername.github.io**. 

It can anywhere from a couple minutes to a couple hours for your domain registrar to update its DNS servers with the changes.

The last step is to create a new file in your GitHub repository with a name of "CNAME". In this file, put the URL that you want to connect to your GitHub pages, without any trailing "http://". For example, in the [CNAME file](https://github.com/keshavsaharia/keshavsaharia.github.io/blob/master/CNAME) for the [keshavsaharia.github.io](https://github.com/keshavsaharia/keshavsaharia.github.io) repository, there is only one line with the content "how.keshav.is".
