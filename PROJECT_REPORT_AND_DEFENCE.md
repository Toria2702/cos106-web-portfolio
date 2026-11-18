# Practical Project Report & Project Defence Documentation
## Design and Development of a Responsive Student Portfolio & Academic Management Platform

**Course Code:** COS 106  
**Course Title:** Introduction to Web Technologies  
**Institution:** MIVA Open University, Abuja, Nigeria  
**Student Name:** Victoria Okon  
**Matriculation Number:** 2025/C/SENG/0801  
**Student ID:** 301879012  
**Programme:** B.Sc. Software Engineering  
**Level:** 100 Level (First Year)  
**Submission Date:** November 2026  

---

### Project Links
- **Hosted / Published Website URL:** [https://toria2702.github.io/cos106-web-portfolio/index.html](https://toria2702.github.io/cos106-web-portfolio/index.html)
- **GitHub Repository URL:** [https://github.com/Toria2702/cos106-web-portfolio/](https://github.com/Toria2702/cos106-web-portfolio/)

---

## A. Project Overview

### 1. Introduction to the Portfolio Website
This document serves as the formal project report and defence documentation for my **COS 106 (Introduction to Web Technologies)** term project in the undergraduate Software Engineering curriculum at MIVA Open University.

The project is a fully responsive, five-page student academic portfolio and task management system built strictly using native client-side web technologies: **HTML5**, **CSS3**, and **JavaScript (ES6+)**. No external CSS frameworks (such as Tailwind or Bootstrap) or JavaScript libraries (such as React or jQuery) were used, ensuring complete demonstration of core web standards.

### 2. Purpose & Objectives
As an undergraduate in Software Engineering, managing course registrations, tracking programming assignments, maintaining links to software repositories, and organizing study priorities across multiple computing subjects can quickly become chaotic. 

The primary objectives of this project are:
1. **Academic Presentation:** To present my academic background, technical skills matrix, registered coursework performance, and programming projects in a structured, accessible digital portfolio.
2. **Interactive Academic Activity Management:** To provide a practical task planning tool where I can record assignments, set course codes, track deadlines, filter pending items, and retain state across browser sessions.
3. **Hands-on Demonstration of Web Technologies:** To exhibit proficiency across every technical requirement specified in the COS 106 rubric: semantic markup, responsive design, CSS Flexbox and Grid, form validation with regular expressions, DOM manipulation, event handling, array state management, browser storage persistence, and creative multimedia integration.

### 3. Major Features & Functionalities
- **Multi-Page Architecture:** Five distinct, interconnected web pages linked by a responsive navigation header and sticky footer.
- **Hero & Student Journey Presentation:** Displays my official photograph, student identifiers, and personal journey statement.
- **Creative Multimedia Integration:** A custom audio welcome recording (`assets/intro.mp4`) with native player controls.
- **Academic Tables:** Structured coursework table showing credit units and grade standing, alongside a technical skills matrix with progress bars.
- **Software Projects Showcase:** Three detailed project cards featuring real application screenshots, tech tags, and GitHub repository links.
- **Interactive Academic Task Planner:** Complete task lifecycle management (Add, Mark as Completed, Delete, Filter) powered by vanilla JavaScript and `localStorage`.
- **Client-Side Validated Contact Form:** Intercepts submission to check for empty fields, valid email structure, and numeric-only phone numbers.
- **Consistent Theming:** Designed with an academic **Dark Magenta (`#8B008B`)** color palette.

### 4. Technology Stack Summary
- **HTML5:** Semantic document structuring (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>`), HTML5 form inputs, data tables, and `<audio>` multimedia.
- **CSS3:** External stylesheet (`css/style.css`), CSS Custom Properties (`:root` variables), CSS Flexbox (navigation & hero), CSS Grid (planner & project cards), and media queries (`@media (max-width: 768px)`).
- **JavaScript (ES6+):** Vanilla DOM selection, event listeners, array operations (`.filter()`, `.find()`, `.unshift()`), RegEx pattern testing, and the Web Storage API (`localStorage`).
- **Version Control & Hosting:** Git, GitHub, and production deployment via GitHub Pages.

---

## B. Screenshots & Feature Explanations

### 1. Homepage & Hero Section (`index.html`)
- **What It Does:** Welcomes visitors, presents my identity as an undergraduate Software Engineering student at MIVA Open University, and outlines my personal software development journey.
- **Implementation:** Built inside a `<section class="hero-card">` with an avatar container and text content. The circular profile photo uses an outline in `#8B008B` with subtle drop shadows.
- **Screenshot Location:** *Figure 1: Homepage Profile & Welcome Hero*  
  *(Image file: `assets/profile.jpg`)*

> **📸 How to Capture:** Open `index.html` in Chrome or Edge. Press `Windows + Shift + S`, select the entire top Hero card (photo, name, matric number, bio text, and action buttons), and insert the capture here.

---

### 2. Multimedia Audio Introduction (`assets/intro.mp4`)
- **What It Does:** Fulfills the rubric's *Multimedia (video or audio)* requirement. It allows the lecturer and visitors to listen to my voice note welcoming them and introducing my background.
- **Implementation:** Built using the HTML5 `<audio controls preload="metadata">` tag styled inside a linear gradient card (`#8B008B` to `#2D042D`). Dual `<source>` tags provide native AAC/MP4 playback with a WAV fallback.

---

### 3. Coursework & Academic Performance Table (`about.html`)
- **What It Does:** Satisfies the *Tables* requirement by presenting a clean summary of my academic progress in 100-Level Software Engineering at MIVA Open University.
- **Implementation:** A `<table class="styled-table">` wrapped inside a `<div class="table-responsive">` container for smooth mobile horizontal scrolling. The header is highlighted with Dark Magenta (`#8B008B`) with alternating zebra rows.
- **Screenshot Location:** *Figure 2: Registered Coursework Table*  
  *(Image file: `assets/project1-records.png`)*

---

### 4. Academic Activity & Task Planner (`planner.html`)
- **What It Does:** Provides a fully interactive study management dashboard where students can add coursework tasks, set due dates, mark tasks completed, and delete them.
- **Implementation:** A two-column CSS Grid (`grid-template-columns: 360px 1fr`). The left column holds the HTML5 task form, while the right column houses the filter toolbar (*All*, *Pending*, *Completed*), live statistics counter, and dynamic task items.
- **Screenshot Location:** *Figure 3: Interactive Academic Planner Interface*  
  *(Image file: `assets/project2-planner.jpg`)*

---

### 5. Projects Showcase (`projects.html`)
- **What It Does:** Displays three programming projects demonstrating algorithms, systems software, and web applications.
- **Projects Highlighted:**
  1. *Student Academic Record & CGPA Portal* (C++17, OOP, File Streams)
  2. *Interactive Academic Planner & Task Tracker* (HTML5, CSS Grid, JavaScript)
  3. *Graph Search & Pathfinding Visualizer* (JavaScript, Canvas, Dijkstra Algorithm)
- **Screenshot Location:** *Figure 4: Pathfinding Visualizer Grid Interface*  
  *(Image file: `assets/project3-pathfinding.jpg`)*

---

### 6. Client-Side Validated Contact Form (`contact.html`)
- **What It Does:** Allows users to submit messages while validating inputs entirely on the client before processing.
- **Validation Rules:**
  - Full Name: Cannot be empty.
  - Email Address: Must match a valid email format (`name@domain.com`).
  - Phone Number: Strictly numbers only (no letters, spaces, or dashes), length 7–15 digits.
  - Message: Cannot be empty.
- **Screenshot Location:** *Figure 5: Contact Form with Validation State*

> **📸 How to Capture:** Open `contact.html`, leave fields empty or type letters into the phone input, and click "Send Message". Press `Windows + Shift + S`, capture the form showing the red error messages, and insert here.

---

## C. JavaScript Implementation Deep Dive

### 1. Document Object Model (DOM) Selection & Manipulation
- **Where Used:** `js/main.js`, `js/planner.js`, `js/validation.js`
- **Methods Used:** `document.getElementById()`, `document.querySelectorAll()`, `document.createElement()`, `appendChild()`, `classList.toggle()`, `classList.add()`, and `classList.remove()`.
- **How It Works:** Rather than writing clumsy inline event handlers, all DOM interactions are decoupled into dedicated external scripts executed after `DOMContentLoaded`. Dynamic task cards are built programmatically as DOM nodes with text escaping to protect against script injection.

### 2. Event Delegation Architecture
- **Where Used:** `js/planner.js` (Task checkboxes and delete buttons)
- **Technical Explanation:** Because tasks are generated dynamically after the initial page load, adding separate event listeners to every newly created checkbox or delete button would degrade memory performance and require continuous re-binding. Instead, a single event listener is attached to the parent container (`#taskList`). When any child element is clicked, the event bubbles up:
  - If `event.target.classList.contains("task-checkbox")`, the task's completed flag is toggled.
  - If `event.target.classList.contains("btn-delete")`, a confirmation prompt is shown and the item is removed.

### 3. Application State & Higher-Order Array Operations
- **Where Used:** `js/planner.js`
- **Data Structure:** An array of task objects:
  ```javascript
  {
    id: 1731962400000,
    title: "Submit COS 106 Web Portfolio assignment",
    course: "COS 106",
    dueDate: "2026-11-05",
    priority: "high",
    completed: false
  }
  ```
- **Array Methods:**
  - `tasks.unshift(newTask)`: Prepends newly added tasks to the top of the schedule.
  - `tasks.filter(t => ...)`: Dynamically derives view subsets (*Pending* vs. *Completed*) and implements task deletion.
  - `tasks.find(t => t.id === taskId)`: Locates specific tasks for status toggling.

### 4. Form Validation & Regular Expressions (RegEx)
- **Where Used:** `js/validation.js`
- **Logic:**
  - **Email Format:**
    ```javascript
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    ```
    Asserts a username prefix, an `@` symbol, a valid domain host, a period, and a top-level domain of at least 2 characters.
  - **Phone Format (Digits Only):**
    ```javascript
    if (!/^\d+$/.test(val)) {
      showError(phoneInput, phoneError, "Phone number must contain digits only.");
    }
    ```
    The `^\d+$` pattern ensures that only numeric characters `0-9` are accepted.

### 5. Web Storage API (`localStorage`)
- **Where Used:** `js/planner.js` & `js/validation.js`
- **Implementation:**
  - Saving: `localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));`
  - Loading: `const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));`
- **Benefit:** Guarantees that student coursework tasks remain saved even if the user refreshes the page, navigates to other pages, or restarts their browser.

---

## D. Codebase Walkthrough & Key Snippets

### 1. Form Validation Snippet (`js/validation.js`)
```javascript
// Function to validate phone number: ensures strictly numeric digits
function validatePhone() {
  const val = phoneInput.value.trim();
  if (val === "") {
    showError(phoneInput, phoneError, "Phone number cannot be empty.");
    return false;
  } else if (!/^\d+$/.test(val)) {
    showError(phoneInput, phoneError, "Phone number must contain digits only.");
    return false;
  } else if (!phonePattern.test(val)) {
    showError(phoneInput, phoneError, "Phone number must be between 7 and 15 digits.");
    return false;
  }
  clearError(phoneInput, phoneError);
  return true;
}
```
**Why Written This Way:** Isolates field validation into self-contained functions that return a boolean. This allows validation to trigger both on real-time `blur` events and when the form is submitted.

---

### 2. Dynamic Task Rendering (`js/planner.js`)
```javascript
// Render filtered task list to the DOM
function renderTasks() {
  taskListContainer.innerHTML = "";

  const filteredTasks = tasks.filter(function (task) {
    if (currentFilter === "pending") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true; // 'all'
  });

  filteredTasks.forEach(function (task) {
    const taskCard = document.createElement("div");
    taskCard.className = `task-item ${task.completed ? "completed" : ""}`;

    taskCard.innerHTML = `
      <div class="task-left">
        <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? "checked" : ""}>
        <div>
          <span class="task-title">${escapeText(task.title)}</span>
          <div class="task-meta">
            <span><strong>${escapeText(task.course)}</strong></span>
            <span>Due: ${escapeText(task.dueDate || "No deadline")}</span>
            <span class="priority-badge ${task.priority}">${escapeText(task.priority)}</span>
          </div>
        </div>
      </div>
      <button type="button" class="btn-delete" data-id="${task.id}" title="Delete task">&times;</button>
    `;

    taskListContainer.appendChild(taskCard);
  });

  updateStats();
}
```
**Why Written This Way:** Renders directly from state. Any mutation (add, delete, toggle) simply updates the `tasks` array and re-renders, guaranteeing that the UI is always a true reflection of the underlying data.

---

### 3. Centralized Design System (`css/style.css`)
```css
:root {
  --primary-color: #8B008B;       /* Dark Magenta theme */
  --primary-hover: #730073;       /* Deeper hover state */
  --primary-light: #fae6fa;       /* Soft tint for badges & tables */
  --dark-bg: #1a021a;             /* Deep Plum for Nav & Footer */
  --light-bg: #faf4fa;            /* Soft off-white page background */
  --card-bg: #ffffff;             /* Clean card surface */
  --border-color: #eed6ee;        /* Soft magenta border */
  --text-primary: #240524;        /* Primary heading color */
  --transition: all 0.25s ease-in-out;
}
```
**Why Written This Way:** Using CSS variables declared at the `:root` level ensures that visual themes are easily maintained and consistent across all five pages without messy duplication.

---

## E. Project Defence & Interview Guide

This section outlines prepared responses to questions typically posed by the Web Technologies lecturer during oral assessments:

### Q1: Why did you build this project using vanilla JavaScript instead of React, Vue, or Tailwind CSS?
**Answer:**  
*"The core learning objective of COS 106 is to demonstrate a thorough command of fundamental client-side web technologies. Front-end frameworks introduce large bundles and abstract away the fundamental mechanisms of the web. By writing vanilla HTML5, CSS3, and JavaScript, I demonstrate my direct understanding of semantic structuring, the DOM tree, native event bubbling, array transformations, and client-side storage."*

### Q2: How does your Academic Planner retain tasks when the page is refreshed?
**Answer:**  
*"The planner uses the browser's Web Storage API (`localStorage`). Whenever a task is created, marked completed, or deleted, the in-memory JavaScript array is converted into a JSON string using `JSON.stringify()` and written to `localStorage`. On page load, `JSON.parse()` reads the stored string back into our array, ensuring tasks persist across browser sessions."*

### Q3: How does your form validation ensure phone numbers contain digits only?
**Answer:**  
*"In `js/validation.js`, the input is validated against the regular expression `/^\d+$/`. The `^` asserts the start of the string, `\d+` requires one or more numeric digits between 0 and 9, and `$` asserts the end of the string. If the user types any letters, punctuation, spaces, or special characters, the regex returns `false` and displays an inline error message."*

### Q4: Why did you choose Dark Magenta (`#8B008B`) for your website palette?
**Answer:**  
*"I chose Dark Magenta (`#8B008B`) to give the portfolio a distinctive, modern, and engaging identity while maintaining high visual contrast and academic professionalism. By establishing `--primary-color: #8B008B` in `css/style.css`, the color is systematically used across headings, button states, audio banners, table headers, and navigation indicators."*

### Q5: How did you implement the multimedia requirement?
**Answer:**  
*"The rubric specifies Multimedia (video or audio). Following the lecturer's guidance to be creative and make the portfolio personal and engaging, I recorded and integrated an audio welcome message (`assets/intro.mp4`) directly on the homepage hero section using the HTML5 `<audio controls>` player."*

---

## F. Conclusion & Rubric Compliance Matrix

| COS 106 Rubric Requirement | How It Is Implemented in This Project | Status |
| :--- | :--- | :--- |
| **Semantic HTML Elements** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>` across all 5 pages. | **Satisfied** |
| **HTML Forms** | Task Creation Form in `planner.html` and Validated Contact Form in `contact.html`. | **Satisfied** |
| **HTML Tables** | Coursework & Grades Table + Technical Skills Matrix Table in `about.html`. | **Satisfied** |
| **Images & Figures** | Official student profile photograph (`profile.jpg`) and 3 real project cover screenshots. | **Satisfied** |
| **Hyperlinks** | Inter-page navigation, active indicator, project repository links, and live demo links. | **Satisfied** |
| **Lists** | Unordered lists for skills and hobbies; ordered lists for career aspirations. | **Satisfied** |
| **Multimedia (Video/Audio)** | Personal audio welcome greeting (`intro.mp4`) with native player controls. | **Satisfied** |
| **External CSS Stylesheet** | Single stylesheet (`css/style.css`) utilizing CSS variables with `#8B008B` palette. | **Satisfied** |
| **Responsive Design** | CSS Flexbox, CSS Grid, fluid containers, and media queries (`@media (max-width: 768px)`). | **Satisfied** |
| **DOM Manipulation** | Dynamic task creation, element rendering, class toggles, and alert injections. | **Satisfied** |
| **Form Validation** | Regex email validation, digits-only phone check, and empty field checks. | **Satisfied** |
| **Arrays & Functions** | Task state array, `.filter()`, `.find()`, `.unshift()`, and modular helper functions. | **Satisfied** |
| **Interactive Task System** | Full task lifecycle (Add, Complete, Filter, Delete) with `localStorage` persistence. | **Satisfied** |
| **GitHub Repository & Hosting** | Public repository and live GitHub Pages deployment. | **Satisfied** |

---

**Student Declaration:**  
I, **Victoria Okon** (Matriculation No: **2025/C/SENG/0801**), hereby declare that this project and documentation represent my original coursework for COS 106: Introduction to Web Technologies at MIVA Open University.
