# Pseudocode

0. If the game is reset, return to **Step 1**.
1. Set the turn to **Player 1**.
2. Initialize **Player 1's** total score to **0**.
3. Initialize **Player 1's** current score to **0**.
4. Initialize **Player 2's** total score to **0**.
5. Initialize **Player 2's** current score to **0**.
6. Display the die with a face value of **5**.
7. When **Player 1** rolls the die, update the die image to show a random face.
8. If the die shows **1**, go to **Step 12**. Otherwise, continue to the next step.
9. Add the rolled value to **Player 1's** current score.
10. If **Player 1** chooses to hold, add their current score to their total score.
11. If **Player 1's** total score reaches **100**, declare them the winner, end the game, and return to **Step 1**. Otherwise, continue to the next step.
12. Reset **Player 1's** current score to **0** and switch turns to **Player 2**.
13. When **Player 2** rolls the die, update the die image to show a random face.
14. If the die shows 1, go to **Step 18**. Otherwise, continue to the next step.
15. Add the rolled value to **Player 2's** current score.
16. If **Player 2** chooses to hold, add their current score to their total score.
17. If **Player 2's** total score reaches **100**, declare them the winner, end the game, and return to **Step 1**. Otherwise, continue to the next step.
18. Reset **Player 2's** current score to **0**, switch turns back to **Player 1**, and go to **Step 7**.
