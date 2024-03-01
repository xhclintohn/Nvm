const puppeteer = require('puppeteer');

async function searchAndCapture(query) {
    // Start the browser and open a new page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Go to Google and wait for the page to load
    await page.goto('https://www.google.com', { waitUntil: 'networkidle2' });

    // Enter the search query into the search box
    await page.type('input[name=q]', query);

    // Submit the search form
    await page.evaluate(() => {
        document.querySelector('form').submit();
    });

    // Wait for the search results page to load
    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Take a screenshot of the search results page
    const screenshot = await page.screenshot({ path: `search-${query}.jpeg`, type: 'jpeg' });

    // Close the browser
    await browser.close();

    return screenshot;
}

// Use the function with a search query
searchAndCapture('node.js')
    .then(() => console.log('Screenshot taken and saved successfully.'))
    .catch(err => console.error('Error taking screenshot:', err));

