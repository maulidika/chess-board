document.addEventListener('DOMContentLoaded', (event) => {
    const chessboard = document.getElementById('chessboard');
    const squares = document.querySelectorAll('.square');
    const pieces = {
        'pawn': '♙',
        'rook': '♖',
        'knight': '♘',
        'bishop': '♗',
        'queen': '♕',
        'king': '♔'
    };

    // Fungsi untuk membuat papan catur
    function createBoard() {
        let html = '';
        for (let row = 0; row < 8; row++) {
            html += '<div class="row">';
            for (let col = 0; col < 8; col++) {
                const color = (row + col) % 2 === 0 ? 'white' : 'black';
                html += `<div class="square ${color}" data-row="${row}" data-col="${col}"></div>`;
            }
            html += '</div>';
        }
        chessboard.innerHTML = html;
        
        // Menempatkan bidak catur
        placePieces();
    }

    // Fungsi untuk menempatkan bidak catur
    function placePieces() {
        // Posisi awal bidak putih
        for (let col = 0; col < 8; col++) {
            setPiece(6, col, 'pawn');
        }
        setPiece(7, 0, 'rook'); setPiece(7, 7, 'rook');
        setPiece(7, 1, 'knight'); setPiece(7, 6, 'knight');
        setPiece(7, 2, 'bishop'); setPiece(7, 5, 'bishop');
        setPiece(7, 3, 'queen');
        setPiece(7, 4, 'king');

        // Posisi awal bidak hitam
        for (let col = 0; col < 8; col++) {
            setPiece(1, col, 'pawn');
        }
        setPiece(0, 0, 'rook'); setPiece(0, 7, 'rook');
        setPiece(0, 1, 'knight'); setPiece(0, 6, 'knight');
        setPiece(0, 2, 'bishop'); setPiece(0, 5, 'bishop');
        setPiece(0, 3, 'queen');
        setPiece(0, 4, 'king');
    }

    // Fungsi untuk menempatkan bidak di posisi tertentu
    function setPiece(row, col, piece) {
        const square = squares[row * 8 + col];
        square.textContent = pieces[piece];
        square.dataset.piece = piece;
    }

    // Event listener untuk klik pada kotak
    squares.forEach(square => {
        square.addEventListener('click', function() {
            const piece = this.dataset.piece;
            if (piece === 'pawn') {
                // Contoh gerakan pion sederhana: hanya ke depan satu langkah
                const row = parseInt(this.dataset.row);
                const col = parseInt(this.dataset.col);
                if (row > 0 && !squares[(row - 1) * 8 + col].dataset.piece) {
                    squares[(row - 1) * 8 + col].classList.add('highlight');
                }
            }
        });
    });

    createBoard();
});
