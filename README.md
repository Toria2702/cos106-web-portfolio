# COS 106 Term Project: Student Portfolio & Academic Management Website

**Student Name:** Victoria Okon  
**Matriculation Number:** MIVA/BSc/SE/2025/0428  
**Program:** Software Engineering (B.Sc.)  
**Course Code & Title:** COS 106 – Introduction to Web Technologies  
**Institution:** MIVA Open University, Abuja, Nigeria  
**GitHub Profile:** [https://github.com/Toria2702](https://github.com/Toria2702)  
**Project Mark:** Practical Term Project (20 Marks)  

---

## 1. Project Overview

This project is a responsive, multi-page personal academic portfolio and student management web application developed to fulfill the term project requirements for **COS 106: Introduction to Web Technologies**.

The application is built using standard, semantic **HTML5**, external **CSS3** (incorporating Flexbox and CSS Grid), and vanilla **JavaScript** (implementing DOM manipulation, event handling, array operations, and browser `localStorage` persistence).

---

## 2. Website Architecture & Pages

The project consists of 5 dedicated, linked web pages:

1. **Homepage (`index.html`)**
   - Student profile presentation with official photograph (`assets/profile.jpg`).
   - Welcome message and academic bio.
   - Multimedia audio welcome player (`<audio controls>`) featuring an intro chime (`assets/intro.wav`).
   - Quick navigation grid linking to all sections.

2. **About Me Page (`about.html`)**
   - Educational background in Software Engineering at MIVA Open University.
   - Career aspirations in systems software, full-stack engineering, and digital tools for Africa.
   - Semester Coursework table listing registered courses, credit units, and academic standing.
   - Technical Skills Matrix table with visual percentage progress bars.
   - Lists of hobbies, problem-solving interests, and community engagement.

3. **Projects Showcase (`projects.html`)**
   - Three featured programming projects:
     1. *Student Academic Record & CGPA System* (C++ / OOP).
     2. *Interactive Academic Planner & Task Tracker* (HTML5 / CSS Grid / JS).
     3. *Graph Search & Pathfinding Visualizer* (JavaScript / Canvas / Dijkstra).
   - High-resolution SVG preview screenshots for each project.
   - Technical tags and links to source code repositories and demos on GitHub (`https://github.com/Toria2702`).

4. **Academic Planner Page (`planner.html`)**
   - Interactive task management system powered by vanilla JavaScript (`js/planner.js`).
   - Form to add new coursework tasks with title, course code, due date, and priority level.
   - Interactive checkboxes to mark tasks as completed (with visual strikethrough).
   - Task deletion with confirmation.
   - Filtering by status (*All*, *Pending*, *Completed*).
   - Live task statistics counter.
   - Data persists across browser sessions using `localStorage`.

5. **Contact Page (`contact.html`)**
   - Contact form with client-side JavaScript validation (`js/validation.js`).
   - Validates that no field is left blank.
   - Validates email format using regex pattern (`name@domain.com`).
   - Validates that phone number contains digits only (7–15 digits).
   - Real-time inline error messages and confirmation banner upon successful submission.

---

## 3. Directory Structure

```
COS 106 Web Project/
├── index.html              # Homepage & student introduction
├── about.html              # Academic background, coursework & skills
├── projects.html           # 3 featured software projects with screenshots
├── planner.html            # Interactive task manager & planner
├── contact.html            # Validated contact form
├── css/
│   └── style.css           # External responsive stylesheet (Flexbox & Grid)
├── js/
│   ├── main.js             # Mobile navbar toggle & event handling
│   ├── planner.js          # Task manager logic, arrays & localStorage
│   └── validation.js       # Contact form validation logic
├── assets/
│   ├── profile.jpg         # Student profile picture
│   ├── intro.wav           # Multimedia audio welcome greeting
│   ├── project1-records.svg # Project 1 screenshot preview
│   ├── project2-planner.svg # Project 2 screenshot preview
│   └── project3-pathfinding.svg # Project 3 screenshot preview
└── README.md               # Project documentation & GitHub guide
```

---

## 4. How to Test & Run Locally

1. Open File Explorer and navigate to the project directory:
   ```
   C:\Users\Blessing\Documents\COS 106 Web Project
   ```
2. Double-click **`index.html`** to launch the website in Google Chrome, Microsoft Edge, or Mozilla Firefox.
3. No build tools, packages, or local servers are required — all code runs purely in any modern browser.

---

## 5. GitHub Upload & Multi-Account Isolation Guide

If you have another Git account already registered globally on your computer, you can configure Git **locally only for this folder** without modifying or overwriting your other account.

### Step 1: Create a New Repository on GitHub
1. Log in to your GitHub account: **`Toria2702`** at [github.com](https://github.com).
2. Click **New** repository.
3. Name it: **`cos106-web-portfolio`**.
4. Choose **Public** *(required for free GitHub Pages)*.
5. Leave "Add a README" **unchecked**.
6. Click **Create repository**.

### Step 2: Initialize Git and Set LOCAL Identity (Isolated)
Open PowerShell or Command Prompt and run:

```bash
# 1. Navigate to this project folder
cd "C:\Users\Blessing\Documents\COS 106 Web Project"

# 2. Initialize git repository
git init

# 3. Configure identity LOCALLY ONLY (notice NO --global flag)
# This writes ONLY to this repository's .git/config and will NOT touch your other Git account!
git config user.name "Victoria Okon"
git config user.email "your-email-for-toria2702@example.com"

# 4. Stage and commit files
git add .
git commit -m "Initial commit: COS 106 Student Portfolio & Academic Management Website"

# 5. Set branch to main
git branch -M main

# 6. Add remote origin for Toria2702
git remote add origin https://github.com/Toria2702/cos106-web-portfolio.git
```

### Step 3: Push Without Conflict (Using a Personal Access Token)
Because Windows Credential Manager may default to your other Git account, you can push cleanly using a **GitHub Personal Access Token** in the URL or via prompt:

1. Generate a token in your `Toria2702` account:
   - On GitHub, click your profile picture $\rightarrow$ **Settings** $\rightarrow$ **Developer settings** (at the very bottom of the left sidebar).
   - Click **Personal access tokens** $\rightarrow$ **Tokens (classic)** $\rightarrow$ **Generate new token (classic)**.
   - Note: `COS 106 Upload`. Select the **`repo`** scope checkbox.
   - Click **Generate token** and copy it (e.g., `ghp_xxxxxxxxxxxx`).

2. Push using the token in the command:
```bash
git push https://Toria2702:<YOUR_TOKEN>@github.com/Toria2702/cos106-web-portfolio.git main
```

*(This bypasses any cached credentials from other accounts on your system and pushes directly to `Toria2702` safely).*

---

## 6. Enable Free Hosting via GitHub Pages

1. Go to your repository at: `https://github.com/Toria2702/cos106-web-portfolio`.
2. Click **Settings** $\rightarrow$ **Pages** (in left sidebar).
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **`main`** and folder: **`/ (root)`**
4. Click **Save**.
5. After 1 to 2 minutes, refresh the page to view your live URL:
   > **`https://toria2702.github.io/cos106-web-portfolio/`**

---

## 7. Submission Details for MIVA Open University
- **Hosted Website URL:** `https://toria2702.github.io/cos106-web-portfolio/`
- **GitHub Repository URL:** `https://github.com/Toria2702/cos106-web-portfolio`
