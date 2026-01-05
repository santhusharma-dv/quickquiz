# Quick Quiz
#### Video Demo: https://youtube.com/shorts/U-wBwmvr7y8
    Quiz  https://santhusharma-dv.github.io/quickquiz/
#### Description:
Quick Quiz is my CS50x 2025 final project, designed as a lightweight but meaningful web-based quiz application. The project challenges users with three questions covering Python, SQL, and Flask fundamentals. My goal was to create a tool that reinforces learning from CS50 in a fun, interactive way, while also demonstrating my ability to integrate multiple technologies into a cohesive project.

The application is built with HTML, CSS, and JavaScript for the front end. I chose this stack because it allowed me to focus on user experience and responsiveness without requiring server-side hosting. The quiz logic is implemented in JavaScript, which handles question display, answer validation, and score tracking. CSS ensures a clean, mobile-friendly design, while HTML provides the structure.

This project is more than just a quiz. It represents my journey through CS50, showing how I can design, implement, and present a complete software solution from scratch. By building Quick Quiz, I practiced debugging, organizing code, documenting my work, and deploying projects using GitHub Pages. The result is a polished, beginner-friendly tool that encourages continued learning.

File Overview
index.html: The main entry point of the application. It defines the structure of the quiz, including placeholders for questions, answer buttons, and the score summary.

style.css: Responsible for the visual design. I used CSS to ensure responsive layouts, consistent fonts, and color schemes that make the quiz engaging on both desktop and mobile.

script.js: Contains the quiz logic. It loads questions, shuffles them, validates answers, and provides instant feedback. It also calculates the final score and displays encouragement messages.

questions.csv  (optional): A file I experimented with to store questions externally. While not required for the final version, it reflects my interest in connecting front-end logic with structured data.

README.md: Documentation of the project, explaining its purpose, structure, and design decisions.

Design Choices
One major decision was to keep the quiz lightweight and client-side only. I debated using Flask and SQLite to store questions and scores, but ultimately chose a static deployment on GitHub Pages for simplicity and accessibility. This allowed anyone to play the quiz instantly without needing a backend server.

Another design choice was limiting the quiz to three questions. I wanted the experience to be quick and approachable, like a “sprint” rather than a long exam. This makes it ideal for learners who want a short refresher.

I also prioritized responsive design. Many learners access CS50 materials on mobile devices, so I ensured the quiz adapts to smaller screens.

Challenges
During development, I faced issues with JavaScript event handling. Initially, answer buttons weren’t updating correctly after each question. Debugging taught me the importance of separating logic into clear functions.

I also struggled with CSS alignment across devices. Testing on both desktop and mobile helped me refine the layout.

Another challenge was deciding whether to include backend features. While I experimented with Flask and SQL, I realized the scope of this project was better suited to a static deployment.

Learning Outcomes
This project helped me practice:

Integrating HTML, CSS, and JavaScript into a cohesive app.

Debugging JavaScript functions and DOM manipulation.

Designing responsive layouts.

Documenting my work clearly for others to understand.

Deploying projects using GitHub Pages.

Future Improvements
If I had more time, I would:

Add a Flask backend to store user scores.

Expand the quiz to include more questions and categories.

Implement a leaderboard system.

Allow users to upload their own CSV files of questions.

Author
Santhosh DV
CS50x 2025 Final Project
