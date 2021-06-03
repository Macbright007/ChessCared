import blackking from './assets/images/blackking.jpg';
import knightqueen from './assets/images/knightqueen.jpg';
import KQ from './assets/images/KQ.jpg';
import queenB from './assets/images/queenB.jfif';


export const Data = {
    card : [
    {message: 'The king (♔, ♚) is the most important piece in the game of chess.Kings move one square in any direction, so long as that square is not attacked by an enemy piece',
    name: 'King', 
    img: blackking},
    {message: 'The knight (♘, ♞) move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces. They own the only move the Queen cant make. They are both unique and very powerful. ',
    name: 'KnightQueen', img: knightqueen},
    {message: 'The middle two pieces are the King♚ and the Queen♛.The queen(♕, ♛) is the only piece on the board during a chess game that represents a woman, and she is the most powerful piece of the game.', name: 'KingQueen', img: KQ},
    {message: 'The queen (♕, ♛) is the most powerful piece in the game of chess, able to move any number of squares vertically, horizontally or diagonally, combining the power of the rook and bishop. ', 
    name: 'Queen',
     img: queenB}
]};