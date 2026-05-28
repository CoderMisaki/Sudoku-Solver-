import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(permissions=['clipboard-read', 'clipboard-write'])
        page = await context.new_page()
        await page.goto("file:///app/index.html")

        # Call getFormattedPuzzle and check result
        # To just trigger copyPuzzle() we can evaluate it
        await page.evaluate("copyPuzzle()")

        # Check clipboard
        clipboard_text = await page.evaluate("navigator.clipboard.readText()")
        print("Clipboard text:", clipboard_text)

        await browser.close()

asyncio.run(main())
