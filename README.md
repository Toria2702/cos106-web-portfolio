# COS 106 Term Project – Student Portfolio & Academic Management Website

**Name:** Victoria Okon  
**Matric No:** MIVA/BSc/SE/2025/0428  
**Programme:** Software Engineering  
**Course:** COS 106 – Introduction to Web Technologies  
**University:** MIVA Open University  

---

## What This Project Is About

This is my practical term project for COS 106. It's a multi-page portfolio website where I can showcase my academic profile, display projects I've worked on, plan my coursework using an interactive planner, and provide a contact form for anyone who wants to reach me.

Everything was built with plain HTML, CSS, and JavaScript — no frameworks or libraries.

---

## Pages

### 1. Homepage (`index.html`)
The landing page. It has my name, profile photo, a short welcome message, navigation links to every other page, and an audio intro you can play.

### 2. About Me (`about.html`)
This page covers my educational background at MIVA, what I want to do career-wise, a table of my current courses and grades, a skills table showing what technologies I'm comfortable with (with progress bars), and some of my hobbies.

### 3. Projects (`projects.html`)
I put up three projects here with descriptions, the tech I used, and links to the GitHub repos:
- A Student Academic Record & CGPA calculator (C++)
- An Academic Task Planner (the same one on this site, HTML/CSS/JS)
- A Pathfinding Algorithm Visualizer (JavaScript)

Each project has a preview image and tags showing the technologies used.

### 4. Academic Planner (`planner.html`)
This is the interactive part. You can:
- Add new tasks (with a title, course code, due date, and priority)
- Mark tasks as done by ticking the checkbox
- Delete tasks you no longer need
- Filter between All, Pending, and Completed views

Tasks are saved in the browser's localStorage so they don't disappear when you close the tab.

### 5. Contact (`contact.html`)
A simple contact form with four fields — name, email, phone, and message. JavaScript validates everything before submission:
- No field can be left empty
- Email must have a proper format (something@domain.com)
- Phone number must be digits only (7 to 15 digits)

If validation passes, a green success banner appears and the data gets saved locally.

---

## Folder Structure

```
├── index.html
├── about.html
├── projects.html
├── planner.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── planner.js
│   └── validation.js
├── assets/
│   ├── profile.jpg
│   ├── intro.wav
│   ├── project1-records.svg
│   ├── project2-planner.svg
│   └── project3-pathfinding.svg
└── README.md
```

---

## How to Open

Just double-click `index.html` in any browser (Chrome, Edge, Firefox). No installation or server needed.

---

## Technical Summary

| Requirement | Where It's Used |
|---|---|
| Semantic HTML | All pages use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| Forms | Contact page and Planner page |
| Tables | About Me page (coursework table + skills matrix table) |
| Images | Profile photo on homepage, project screenshots on projects page |
| Hyperlinks | Navigation menu on every page, project repo links, footer links |
| Lists | About Me page (education, career goals, hobbies) |
| Multimedia | Audio player on homepage (`<audio>` element) |
| External CSS | Single stylesheet (`css/style.css`) used across all pages |
| Responsive Design | Media queries + mobile hamburger menu |
| Flexbox | Navigation bar, hero section, footer layout |
| CSS Grid | Quick-links grid, about page columns, projects grid, planner layout |
| Animations/Transitions | Card hover effects, button hover states, nav transitions |
| Consistent Colour Scheme | CSS custom properties (variables) in `:root` |
| Event Handling | Nav toggle, form submissions, checkbox clicks, filter buttons, delete buttons |
| DOM Manipulation | Task rendering, error messages, success alerts, dynamic content updates |
| Form Validation | Contact page — empty field checks, email regex, phone digits-only check |
| Dynamic Content | Planner tasks rendered from JavaScript arrays |
| Arrays & Functions | Task storage, filtering, adding, deleting all use arrays and helper functions |
| Interactive Task System | Full add/complete/delete/filter planner with localStorage persistence |
