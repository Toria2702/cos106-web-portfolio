// ===============================================================
// COS 106: Introduction to Web Technologies - Academic Planner Script
// Student: Victoria Okon | Matric: MIVA/BSc/SE/2025/0428
// Handles: Task adding, marking completed, deleting, and filtering
// ===============================================================

document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const taskForm = document.getElementById("taskForm");
  const taskTitleInput = document.getElementById("taskTitle");
  const taskCourseInput = document.getElementById("taskCourse");
  const taskDueDateInput = document.getElementById("taskDueDate");
  const taskPrioritySelect = document.getElementById("taskPriority");
  const taskListContainer = document.getElementById("taskList");
  const taskStatsDisplay = document.getElementById("taskStats");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Local storage key for persistent data
  const STORAGE_KEY = "miva_student_planner_victoria";

  // Initial starter tasks for demonstration
  const defaultTasks = [
    {
      id: 1,
      title: "Submit COS 106 Web Portfolio assignment",
      course: "COS 106",
      dueDate: "2026-11-05",
      priority: "high",
      completed: false
    },
    {
      id: 2,
      title: "Review C++ Object-Oriented Programming notes",
      course: "COS 101",
      dueDate: "2026-11-02",
      priority: "medium",
      completed: true
    },
    {
      id: 3,
      title: "Study binary representation & CPU architecture",
      course: "COS 103",
      dueDate: "2026-11-10",
      priority: "medium",
      completed: false
    },
    {
      id: 4,
      title: "Practice calculus derivatives problem set",
      course: "MTH 101",
      dueDate: "2026-11-07",
      priority: "low",
      completed: false
    }
  ];

  let currentFilter = "all";
  let tasks = loadSavedTasks();

  // Load tasks from localStorage or initialize with defaults
  function loadSavedTasks() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error("Could not parse saved tasks:", err);
      }
    }
    // If no saved tasks, store defaults
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTasks));
    return [...defaultTasks];
  }

  // Save current tasks array to localStorage
  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  // Update task statistics counter
  function updateStats() {
    const totalCount = tasks.length;
    const completedCount = tasks.filter(t => t.completed).length;
    const pendingCount = totalCount - completedCount;

    if (taskStatsDisplay) {
      taskStatsDisplay.textContent = `${totalCount} tasks total (${pendingCount} pending, ${completedCount} completed)`;
    }
  }

  // Escape HTML to prevent injection issues in student titles
  function escapeText(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // Render task list to the DOM based on active filter
  function renderTasks() {
    taskListContainer.innerHTML = "";

    // Filter tasks according to selected tab
    const filteredTasks = tasks.filter(function (task) {
      if (currentFilter === "pending") return !task.completed;
      if (currentFilter === "completed") return task.completed;
      return true; // 'all'
    });

    if (filteredTasks.length === 0) {
      taskListContainer.innerHTML = `
        <div class="empty-task-message">
          <p>No tasks found in the <strong>${currentFilter}</strong> view.</p>
        </div>
      `;
      updateStats();
      return;
    }

    // Build and append each task element
    filteredTasks.forEach(function (task) {
      const taskCard = document.createElement("div");
      taskCard.className = `task-item ${task.completed ? "completed" : ""}`;

      taskCard.innerHTML = `
        <div class="task-left">
          <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${task.completed ? "checked" : ""} aria-label="Mark task as complete">
          <div>
            <span class="task-title">${escapeText(task.title)}</span>
            <div class="task-meta">
              <span><strong>${escapeText(task.course)}</strong></span>
              <span>&bull;</span>
              <span>Due: ${escapeText(task.dueDate || "No deadline")}</span>
              <span>&bull;</span>
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

  // Add new task form submission handler
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const titleValue = taskTitleInput.value.trim();
    const courseValue = taskCourseInput.value.trim() || "COS 106";
    const dueDateValue = taskDueDateInput.value;
    const priorityValue = taskPrioritySelect.value;

    if (!titleValue) {
      alert("Please enter a task title.");
      taskTitleInput.focus();
      return;
    }

    const newTask = {
      id: Date.now(), // Unique ID using timestamp
      title: titleValue,
      course: courseValue,
      dueDate: dueDateValue,
      priority: priorityValue,
      completed: false
    };

    // Add to beginning of task array
    tasks.unshift(newTask);
    saveTasks();
    renderTasks();

    // Reset form fields
    taskTitleInput.value = "";
    taskDueDateInput.value = "";
    taskCourseInput.value = "COS 106";
    taskPrioritySelect.value = "medium";
    taskTitleInput.focus();
  });

  // Event delegation for checkbox toggle and delete button
  taskListContainer.addEventListener("click", function (e) {
    const target = e.target;

    // Checkbox toggle: mark completed/pending
    if (target.classList.contains("task-checkbox")) {
      const taskId = Number(target.getAttribute("data-id"));
      const foundTask = tasks.find(t => t.id === taskId);
      if (foundTask) {
        foundTask.completed = target.checked;
        saveTasks();
        renderTasks();
      }
    }

    // Delete button click
    if (target.classList.contains("btn-delete")) {
      const taskId = Number(target.getAttribute("data-id"));
      if (confirm("Are you sure you want to delete this task?")) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
        renderTasks();
      }
    }
  });

  // Filter button handlers
  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      currentFilter = button.getAttribute("data-filter");
      renderTasks();
    });
  });

  // Initial display
  renderTasks();
});
