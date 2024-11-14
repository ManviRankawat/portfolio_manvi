const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureStatsImages() {
    // Ensure the stats-images directory exists
    const imagesDir = path.join(__dirname, 'stats-images');
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir);
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Define URLs for the stats
    const urls = [
        {
            url: 'https://github-readme-stats.vercel.app/api/top-langs/?username=ManviRankawat&layout=compact&langs_count=6',
            outputPath: path.join(imagesDir, 'top-langs.png')
        },
        {
            url: 'https://github-readme-stats.vercel.app/api?username=ManviRankawat&show_icons=true&theme=radical',
            outputPath: path.join(imagesDir, 'github-stats.png')
        },
        {
            url: 'https://streak-stats.demolab.com?user=ManviRankawat',
            outputPath: path.join(imagesDir, 'github-streak.png')
        }
    ];

    // Capture screenshots for each URL
    for (const { url, outputPath } of urls) {
        await page.goto(url, { waitUntil: 'networkidle2' });
        await page.screenshot({ path: outputPath });
        console.log(`Saved screenshot of ${url} to ${outputPath}`);
    }

    await browser.close();
}

captureStatsImages()
    .then(() => console.log('Screenshots captured successfully'))
    .catch(err => console.error('Error capturing screenshots:', err));
