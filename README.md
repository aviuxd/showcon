# Showcon

Allows designers and developers to create easy to maintain and extenadable icon library. Does not work with latest NodeJS please use [NVM](https://github.com/creationix/nvm) to use `nodejs 6.5`. 

## Installation and Usage

1. Clone this repo and `cd` into the folder in terminal.
2. Install dependencies using
	
		npm install

3. Add your icons to `icons` folder.
4. Terminal into the app folder and start the app by using

		node app.js

5. Go into the browser and open `localhost:35700` to view your icons on the page.
6. `showcon/icons` folder is watched by Showcon while running. You can continue adding removing icons from the folder and refreshing the page will provide latest list of icons. 

## Customization

1. In the `showcon/public` folder you can customize the `index.html` to suit your specific needs.
2. All CSS customization can be done by editing files in `public/less` folder.

### Credits

1. Sample icons included in `showcon/icons` folder are available at [UXPIN](https://www.uxpin.com/uxpin-icon-set.html) 