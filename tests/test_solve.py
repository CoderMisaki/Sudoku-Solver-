from playwright.sync_api import sync_playwright, expect
import time

def test_solve_scenarios():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("file:///app/index.html")

        # Expose all testing functions
        page.evaluate("""
            window.getAllSolutions = () => allSolutions;
        """)

        # 1. Invalid board error
        page.evaluate("""
            board = Array.from({ length: 9 }, () => Array(9).fill(0));
            board[0][0] = 5;
            board[0][1] = 5;
        """)
        page.locator('#btn-solve').click()
        # Assert status text
        expect(page.locator('#status')).to_have_text("Papan error, perbaiki angka yang bentrok dulu!")


        # 2. Already solved board
        page.evaluate("""
            board = [
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ];
        """)
        page.locator('#btn-solve').click()
        expect(page.locator('#status')).to_have_text("Selesai! Papan sudah penuh dan benar.")

        # 3. No solution board
        page.evaluate("""
            board = Array.from({ length: 9 }, () => Array(9).fill(0));
            board[0][0] = 1; board[0][1] = 2; board[0][2] = 3;
            board[1][0] = 4; board[1][1] = 5; board[1][2] = 6;
            board[2][0] = 7; board[2][1] = 8;
            board[0][3] = 4; board[0][4] = 5; board[0][5] = 6;
            board[1][3] = 7; board[1][4] = 8; board[1][5] = 9;
            board[2][3] = 1; board[2][4] = 2; board[2][5] = 3;
            board[3][2] = 9;
        """)
        page.locator('#btn-solve').click()
        # Wait for the status to change from "Mencari solusi..." to "Mentok!"
        expect(page.locator('#status')).to_have_text("Mentok! Tidak ada solusi valid.", timeout=5000)

        # 4. Solvable with 1 solution (Easy)
        page.evaluate("""
            board = Array.from({ length: 9 }, () => Array(9).fill(0));
            // Just leaving one empty cell from a solved board
            board = [
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 0] // missing 9
            ];
        """)
        page.locator('#btn-solve').click()
        expect(page.locator('#status')).to_have_text("Selesai! 100% Pasti via DLX.", timeout=5000)
        assert page.evaluate("window.getAllSolutions().length") == 1

        # 5. Multiple solutions (Gambling)
        page.locator('#btn-demo').click()
        page.evaluate("""
            // make a lot of empty space to force multiple solutions
            board[0] = Array(9).fill(0);
            board[1] = Array(9).fill(0);
        """)
        page.locator('#btn-solve').click()
        expect(page.locator('#status')).to_have_text("Ditemukan 150+ variasi (DLX). Awas Gambling!", timeout=5000)
        assert page.evaluate("window.getAllSolutions().length") > 1

        print("All assertions passed!")
        browser.close()

if __name__ == "__main__":
    test_solve_scenarios()
