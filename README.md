# My Autocomplete app

- It is implementational of an auto-complete list which will be updated dynamically while the user types in a search box. The result will be comprised of products containing information like title, price and a couple of images.
- Deployed version is available [here](https://autocomplete.marzzy-codes.com/)

## Features

1. Parse and load all the items from the `provided.csv` file, and wait untill user type something into the input
2. Search and filter related items and displaied with pagination(100 items per page)
    - Service workers are using in order to not crached the app while search and the user dont experience any lag on huge process of search and filter 20k items
3. Each item has the following information:
    - **title**: the title of the product.
    - **gtin**: a unique identifier (right-bottom side on the card).
    - **gender**: The gender can take 3 values (female, male, unisex) that are displied by icons.
      Some falsely values in this column are interperted as not-set and display no icon for them and can't be filtere individually.
    - **price**: The normal retail price of the product.
    - **sale_price**: The price of the product after a discount is applied.(if sale_price > price it will displied on card with highlighted color, otherwise(when they are the same) for simplify the card and take attention to those cards that are on sale).
    - **image_link**: The main image of the product.(left side on the card).
    - **additional_image_link**: the additional images are appeared by clicking on the card, if there is no additional image, it will display.
4. The pagination is in the top and bottom of the cards for easy access and user convenience.
5. The images are fetched asynchronously.
6. On searching part we have `debounceing featuere` with 1 secound delay, which means after 1 secound that user stop typeing, we will search and display the results.
7. The images have random image placeholder which display if an error happened or imaged crashed or even before image load

## Tools

- [React](https://reactjs.org/) + Typescript
- [Chakra-UI](https://chakra-ui.com/): styling framework
- [papaparse](papaparse.com): parsing CSV to Json

## Available Scripts

***NOTICE*** : The project fully compatible with the node v16.13.2 (Latest LTS: Gallium)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
