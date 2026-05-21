import os
from playwright.sync_api import sync_playwright

def test_rebuild_candidates_empty_board():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Resolve the absolute path to index.html dynamically
        html_path = f"file://{os.path.abspath('index.html')}"
        page.goto(html_path)

        # Call clearAll to make sure board is empty
        page.evaluate("clearAll()")

        # Call rebuildCandidates
        page.evaluate("rebuildCandidates()")

        candsMap = page.evaluate("candsMap.map(row => row.map(cell => Array.from(cell)))")

        # All cells should have 1-9
        for row in range(9):
            for col in range(9):
                assert sorted(candsMap[row][col]) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

        browser.close()

def test_rebuild_candidates_with_board_values():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        html_path = f"file://{os.path.abspath('index.html')}"
        page.goto(html_path)

        # Start with empty board
        page.evaluate("clearAll()")

        # Set some board values
        page.evaluate("board[0][0] = 5")
        page.evaluate("board[0][1] = 3")

        # Call rebuildCandidates
        page.evaluate("rebuildCandidates()")

        candsMap = page.evaluate("candsMap.map(row => row.map(cell => Array.from(cell)))")

        # The cells with values should have empty candidates
        assert len(candsMap[0][0]) == 0
        assert len(candsMap[0][1]) == 0

        # Cells in the same row/col/block should not have 5 or 3 as candidates
        assert 5 not in candsMap[0][2]
        assert 3 not in candsMap[0][2]
        assert 5 not in candsMap[1][0]
        assert 3 not in candsMap[1][1]

        # Independent cells should still have 5 and 3
        assert 5 in candsMap[8][8]
        assert 3 in candsMap[8][8]

        browser.close()

if __name__ == "__main__":
    test_rebuild_candidates_empty_board()
    test_rebuild_candidates_with_board_values()
    print("All tests passed.")
