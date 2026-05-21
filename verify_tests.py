from playwright.sync_api import sync_playwright
import sys

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        passed = False
        failed = False

        def handle_console(msg):
            nonlocal passed, failed
            print(f"Browser console: {msg.text}")
            if "TESTS PASSED" in msg.text:
                passed = True
            if "TESTS FAILED" in msg.text:
                failed = True

        page.on("console", handle_console)
        page.goto("file:///app/index.html?test=true")
        page.wait_for_timeout(1000)
        browser.close()

        if failed or not passed:
            print("Tests failed!")
            sys.exit(1)
        print("Tests passed successfully!")
        sys.exit(0)

if __name__ == "__main__":
    main()
