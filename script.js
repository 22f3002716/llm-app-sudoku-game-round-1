(function(){
  const initialBoard = [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9]
  ];

  const gridContainer = document.querySelector('.sudoku-grid');

  // Create cells
  const cells = [];
  for(let row=0; row<9; row++) {
    cells[row] = [];
    for(let col=0; col<9; col++) {
      const cellIndex = row * 9 + col + 1;
      const cell = document.createElement('div');
      cell.setAttribute('data-row', row);
      cell.setAttribute('data-col', col);
      cell.setAttribute('data-box', Math.floor(row/3)*3 + Math.floor(col/3));
      if(initialBoard[row][col] !== null) {
        cell.innerText = initialBoard[row][col];
        cell.setAttribute('data-fixed', 'true');
        cell.style.fontWeight = 'bold';
        cell.style.backgroundColor = '#ddd';
      } else {
        cell.setAttribute('contenteditable', 'true');
      }
      cell.className = 'cell';
      gridContainer.appendChild(cell);
      cells[row][col] = cell;
    }
  }

  function validateMove(row, col, num) {
    // Check row
    for(let c=0; c<9; c++) {
      if(c !== col) {
        const val = cells[row][c].innerText;
        if(val == num) {
          return false;
        }
      }
    }
    // Check column
    for(let r=0; r<9; r++) {
      if(r !== row) {
        const val = cells[r][col].innerText;
        if(val == num) {
          return false;
        }
      }
    }
    // Check box
    const startRow = Math.floor(row/3)*3;
    const startCol = Math.floor(col/3)*3;
    for(let r= startRow; r< startRow+3; r++) {
      for(let c= startCol; c< startCol+3; c++) {
        if(r !== row || c !== col) {
          const val = cells[r][c].innerText;
          if(val == num) {
            return false;
          }
        }
      }
    }
    return true;
  }

  function clearConflicts() {
    document.querySelectorAll('.cell').forEach(c => c.classList.remove('conflict'));
  }

  document.querySelectorAll('.cell[contenteditable="true"]').forEach(cell => {
    cell.addEventListener('input', () => {
      clearConflicts();
      const row = parseInt(cell.getAttribute('data-row'));
      const col = parseInt(cell.getAttribute('data-col'));
      let val = cell.innerText.trim();
      // Only allow digits 1-9
      if(!/^[1-9]$/.test(val)) {
        cell.innerText = '';
        return;
      }
      if(validateMove(row, col, val)) {
        cell.classList.remove('conflict');
      } else {
        cell.classList.add('conflict');
      }
    });
  });

  // Initialize fixed cells
  document.querySelectorAll('.cell[data-fixed="true"]').forEach(cell => {
    cell.setAttribute('contenteditable', 'false');
  });

  // Expose validateMove function
  window.validateMove = validateMove;

})();