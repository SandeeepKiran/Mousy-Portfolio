# 02 — Editing guide (for beginners)

This guide uses Simplified Technical English. Each step has one action.
You need only a text editor (Cursor or VS Code) and a web browser.

## Before you start

1. Open the folder `C:\Users\SandeepKiran\Videos\Project - Mousy Portfolio` in Cursor.
2. Open `index.html` in the browser. To do this, double-click the file in File Explorer.
3. Keep the browser window open. After each change, save the file and press `F5` in the browser.

> CAUTION: Do not delete the `<` and `>` characters or the quote marks `"` around values.
> If you delete them, the page can break. If the page breaks, press `Ctrl+Z` in the editor.

## Procedure 1 — Change your name or job title

1. Open `index.html`.
2. Press `Ctrl+F`.
3. Type `hero__title`.
4. Change the text `Sandeep` and the text `Kiran` between the `<span>` tags.
5. Find the line that contains `QA Manager`.
6. Change the text `QA Manager`.
7. If you changed your name, also change it in the `<title>` line near the top of the file.
8. If you changed your name, also change it in the About card (search for `holo-card__title`).
9. If you changed your name, also change it in the footer (search for `&copy;`).
10. Save the file.

## Procedure 2 — Add your email address

1. Open `index.html`.
2. Press `Ctrl+F`.
3. Type `mailto:"`.
4. Put your email address after `mailto:`. Example: `href="mailto:sandeep@example.com"`.
5. Do step 4 again for each result. There are two in `index.html`.
6. Save the file.
7. Open `js/projects.js`.
8. Find `link: "mailto:"`.
9. Put your email address after `mailto:`.
10. Save the file.

## Procedure 3 — Change a project card

1. Open `js/projects.js`.
2. Find the block of the project that you want to change. Example: `title: "Project One"`.
3. Change the text between the quote marks after `title:`.
4. Change the text between the quote marks after `description:`.
5. If the project has a web page, put its address after `link:`. Example: `link: "https://example.com"`.
6. Save the file.
7. Refresh the browser and look at the card.

## Procedure 4 — Add a picture to a project card

1. Make a folder with the name `images` in the project folder.
2. Copy your picture into the `images` folder. Use a wide picture, for example 1280 × 720 pixels.
3. Open `js/projects.js`.
4. Find the block of the project.
5. Type the picture path after `image:`. Example: `image: "images/project-one.png"`.
6. Type a short description of the picture after `imageAlt:`. Example: `imageAlt: "Test report dashboard"`.
7. Save the file.
8. If the card still shows the coloured box, examine the file name. The name must be the same, including capital letters.

## Procedure 5 — Change the social links

1. Open `index.html`.
2. Press `Ctrl+F`.
3. Type `aria-label="GitHub"`.
4. Replace the `#` in `href="#"` on that line with your GitHub address.
5. Do steps 2 to 4 again for `LinkedIn` and for `Telegram`.
6. If you do not use one of these sites, delete its full `<li> … </li>` block.
7. Save the file.

## Procedure 6 — Change the About text and skills

1. Open `index.html`.
2. Press `Ctrl+F`.
3. Type `holo-card--bio`.
4. Replace the sentence between the `<p>` and `</p>` tags with your own sentence.
5. Find the five lines that start with `<li>Skill`.
6. Replace each `Skill one`, `Skill two` (and so on) with a real skill.
7. Save the file.

## Procedure 7 — Look at the site through a local server (optional)

1. Open PowerShell.
2. Type `cd "C:\Users\SandeepKiran\Videos\Project - Mousy Portfolio"` and press `Enter`.
3. Type `python -m http.server 8000` and press `Enter`.
4. Open `http://localhost:8000` in the browser.
5. When you are done, press `Ctrl+C` in PowerShell to stop the server.
