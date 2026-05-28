import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(permissions=['clipboard-read', 'clipboard-write'])
        page = await context.new_page()
        await page.goto("file:///app/index.html")

        # Set board state instead of DOM which getFormattedPuzzle reads from
        await page.evaluate("""
            board[0][0] = 8;
        """)

        # Call copyPuzzle()
        await page.evaluate("copyPuzzle()")
        await asyncio.sleep(0.1)

        # Check clipboard
        clipboard_text = await page.evaluate("navigator.clipboard.readText()")
        print(f"Clipboard text: '{clipboard_text}'")

        await browser.close()

asyncio.run(main())
