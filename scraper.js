const puppeteer = require('puppeteer');

var getter = async function(username) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://leetcode.com/${username}/`);

  await browser.close();
}