# Sudoku Game

This is a simple, single-page Sudoku game implemented using HTML, CSS, and JavaScript. The game features a classic 9x9 Sudoku grid, pre-loaded with an easy starting puzzle. Users can input numbers (1-9) into empty cells, and the application provides immediate visual feedback by highlighting any cell in red if its entered number violates standard Sudoku rules (i.e., conflicts with another number in the same row, column, or 3x3 block).

## Features

*   **Classic 9x9 Grid:** A standard Sudoku grid visually divided into 3x3 subgrids.
*   **Pre-defined Easy Board:** The game loads with a hardcoded, easy-level Sudoku puzzle.
*   **Interactive Input:** Users can easily enter numbers (1-9) into empty cells.
*   **Real-time Conflict Highlighting:** Cells containing numbers that violate Sudoku rules (duplicate in row, column, or block) are immediately highlighted in red.
*   **Read-only Fixed Cells:** Initial numbers of the puzzle are fixed and cannot be changed by the user.

## How to Run

This application is a single HTML file and does not require any special build tools or server setup. 

1.  **Save the file:** Save the `index.html` content provided as `index.html` in a folder.
2.  **Open in Browser:** Navigate to the folder where you saved `index.html` and simply double-click the file. It will open in your default web browser.
3.  **Play:** Start entering numbers (1-9) into the empty cells. Observe the red highlighting for any rule violations.

## Technologies Used

*   **HTML5:** For the page structure and grid elements.
*   **CSS3:** For styling the grid, cells, and conflict highlighting.
*   **JavaScript (ES6+):** For game logic, board management, user input handling, and real-time validation.

Enjoy playing Sudoku!
