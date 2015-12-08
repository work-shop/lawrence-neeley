# Digital Analog Representation
### Project Cycle: 0

*This is the web component of Lawrence Neeley and Work-Shop's collaboration, Digital Analog Representation*

===

## Installation

This site is powered by [Webhook](http://www.webhook.com/docs/), and is hosted on their infrastucture [here](http://lawrence-neeley.webhook.org), so we'll use their toolset, along with a couple of other tools. First let's make sure all the dependencies are installed locally. (We'll assume that webhook's ```wh``` tool, and ruby's ```gem``` package manager are both available on the machine). 

First things first. From your workspace, run:

```sh
git clone https://github.com/work-shop/lawrence-neeley.git lawrence-neeley
cd lawrence-neeley
```

Then follow that up with

```sh
wh init lawrence-neeley
```

You'll be prompted to enter your credentials, the firebase authorization information will subsequently be downloaded to your local machine.

Finally, we need to install the project-specific dependencies: ```bourbon```, ```neat```, and ```requirejs```. If you don't already have ```bourbon``` and ```neat``` installed on your machine, run: 

```sh
gem install bourbon
gem install neat
```

Then, from the ```lawrence-neeley``` directory, run:

```sh
bourbon install --path static/scss
neat install --path static/scss
```

You should be all set.