#!/usr/bin/env node
import puppeteer from 'puppeteer';

const ROUTER_IP = 'http://192.168.1.1';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Go to eco page
  await page.goto(`${ROUTER_IP}/eco`);

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Login
  const authForm = '#form_auth_passwd';
  await page.type(`${authForm} #login`, process.env.NB6VAC_USER);
  await page.type(`${authForm} #password`, process.env.NB6VAC_PASSWORD);
  await page.click(`${authForm} .btn`);

  // Wait and click on first result
  const ecoConfiguration = '#form_eco_configuration';
  await page.waitForSelector(ecoConfiguration);
  await page.click(`${ecoConfiguration} .btn-onoff`);
  await page.click(`${ecoConfiguration} .btn`);

  await browser.close();
})();
