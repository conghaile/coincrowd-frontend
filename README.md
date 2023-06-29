# CoinCrowd - Let the robot trawl for gems
CoinCrowd is a project I threw together in an attempt to keep my thumb on the pulse of the crypto altcoin economy without needing to spend every waking hour staring at /biz/.


## How does it work?

I made a warosu scraper, a spaCy NER model, and this website. The scraper scrapes /biz/ posts and feeds them to the model, the coins the model identifies are plopped into a database with the time the coin was mentioned, this app puts that data on charts.

## Why is it so shit?

Not enough money or brains. The NER model is pretty shit on account of me being a VRAMlet and for some reason spaCy's training pipeline explodes in cloud GPU farms; there are a few ways to deal with this and I'm too poor and/or stupid for any of them. These include:

 - **Bending the knee to CoinGecko/CoinMarketCap/etc and buying an API key**
	 By far the simplest and most effective solution. Taking a coin the model identifies and searching for it on CG makes this whole thing jarringly accurate, at least when the market's calm enough that most shitcoins aren't pulling 100x before they're listed on CG. This would also give access to price data, which can be overlaid on top of my charts so you can see the relationship between a coin's popularity on /biz/ and its price action. All sorts of silly metrics and indicators could be asspulled by slapping them together.  
I also tried everything in my power to scrape CG. They just stop responding to traffic from your IP eventually, so I'd need to figure out a big fat convoluted scraper swarm thing in the cloud that uses a bunch of rotating IP addresses, which would end up being nearly as pricey as an API key at scale with the added bonus of risking a copyright fisting.  
If you sweet babes wanted to crowdfund an API key that'd be freaking epic but I have zero expectations of that actually happening.
 - **Digging into spaCy's source code to figure out why it shits itself on cloud services/writing my own NER training from scratch.**
 I'm just not gonna do it. After this project I'm completely out of fucks to give about ML beyond downloading hot new mikus from /lmg/. If you actually know what you're doing and want to make a better model, I'm still sitting on a fuckload of scraped /biz/ posts that I could be [convinced](mailto:quandaviousgooch@proton.me) to hand over.
 - **[Your solution that fixes everything quickly and cheaply that I haven't thought of].**
 Fork me, daddy. If there's enough interest that people want to contribute in any way that'd be rad.

## Why not use ChatGPT?
[insert 'jak here]
Why do you look like this?


## Why not scrape Twitter/Telegram/etc too?

Scraping Twitter in the laziest, sloppiest manner would be a tremendous pain in the ass. Scraping only crypto posts from Twitter in the most efficient manner possible (wasting as little time on non-crypto accounts and hashtags) is something like an NP-hard problem (unless of course you have a complete list of every hashtag and account under which new shitcoins will be discussed from now until the end of time). Discussion on any other big platform I can think of is laughably terrible. If there's some half-decent altchan or something that should be scraped, [let me know](mailto:quandaviousgooch@proton.me) or fork CoinCrowd and do it yourself.

## Why not improve the UI further/add more functionality?

If you yell at me loud enough I probably will eventually.

## There's already a site called CoinCrowd...

They can eat the peanuts outta my shit.