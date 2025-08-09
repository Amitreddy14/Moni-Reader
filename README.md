# Screen-Reader

A screen reader is an accessibility tool created to assist visually impaired users. It enables them to "hear" the content of web pages and provides controls for pausing/resuming, navigating between elements, and adjusting the voice speed.

## Functionality: 
- When activated by clicking start or pressing the spacebar, the screen reader will sequentially announce each element on the page, highlighting the currently read content.
- The screen reader supports multiple modes, including normal browsing, text input, pausing, and table exploration.
- Users can pause or resume the reading using a button or by pressing the "P" key.
- Navigation to previous or next elements is possible via buttons or the UpArrow and DownArrow keys.
- For interactive elements like links, buttons, and input fields, the screen reader offers instructions on how to interact:
    - Buttons: instruct users to click them via a specific keystroke.
    - Links: guide users on how to navigate to them using a keystroke.
    - Input boxes: reading pauses and the user is prompted to enter data.
    - Tables: users can navigate cells using arrow keys and receive information about the table’s size (rows and columns)

## To get started
1. Run tsc in your current directory to compile the code.
2. Include the script <script type="module" src="../screenreader.js"></script> inside the <head> section of your test HTML file.
3. Run http-server in the directory and open the HTML file in your browser to use the screen reader.


