/* Mechatronics Studio — course progress, sidebar, quizzes */
(function () {
  "use strict";

  const STORAGE_KEY = "mechatronics-studio-progress";

  const COURSE = {
    modules: [
      {
        id: "m1",
        num: 1,
        title: "Foundations",
        blurb: "What mechatronics is, systems thinking, and the measurement–control split.",
        lessons: [
          { id: "01-what-is-mechatronics", title: "What is mechatronics?", file: "01-what-is-mechatronics.html" },
          { id: "01-systems-thinking", title: "Systems thinking & feedback", file: "01-systems-thinking.html" },
          { id: "01-measurement-and-control", title: "Measurement and control", file: "01-measurement-and-control.html" }
        ]
      },
      {
        id: "m2",
        num: 2,
        title: "Sensing the physical world",
        blurb: "Transducers, motion and process sensors, and signal conditioning.",
        lessons: [
          { id: "02-sensors-and-transducers", title: "Sensors and transducers", file: "02-sensors-and-transducers.html" },
          { id: "02-displacement-motion-force", title: "Displacement, motion & force", file: "02-displacement-motion-force.html" },
          { id: "02-process-sensors", title: "Process sensors", file: "02-process-sensors.html" },
          { id: "02-signal-conditioning", title: "Signal conditioning", file: "02-signal-conditioning.html" }
        ]
      },
      {
        id: "m3",
        num: 3,
        title: "Digital information",
        blurb: "Analogue–digital conversion, logic, and data presentation.",
        lessons: [
          { id: "03-analogue-digital", title: "Analogue to digital", file: "03-analogue-digital.html" },
          { id: "03-digital-logic", title: "Digital logic", file: "03-digital-logic.html" },
          { id: "03-data-presentation", title: "Data presentation & DAQ", file: "03-data-presentation.html" }
        ]
      },
      {
        id: "m4",
        num: 4,
        title: "Actuation",
        blurb: "Fluid power, mechanisms, and electrical actuators.",
        lessons: [
          { id: "04-fluid-power", title: "Fluid power", file: "04-fluid-power.html" },
          { id: "04-mechanical-actuation", title: "Mechanical actuation", file: "04-mechanical-actuation.html" },
          { id: "04-electrical-actuation", title: "Electrical actuation", file: "04-electrical-actuation.html" }
        ]
      },
      {
        id: "m5",
        num: 5,
        title: "Embedded brains",
        blurb: "Microprocessors, C for embedded, PLCs, and communications.",
        lessons: [
          { id: "05-microprocessors", title: "Microprocessors & MCUs", file: "05-microprocessors.html" },
          { id: "05-c-and-embedded", title: "C and embedded software", file: "05-c-and-embedded.html" },
          { id: "05-plcs", title: "Programmable logic controllers", file: "05-plcs.html" },
          { id: "05-communications-and-faults", title: "Communications & faults", file: "05-communications-and-faults.html" }
        ]
      },
      {
        id: "m6",
        num: 6,
        title: "Models and control",
        blurb: "Lumped models, dynamics, frequency domain, PID, and early AI.",
        lessons: [
          { id: "06-system-models", title: "System models", file: "06-system-models.html" },
          { id: "06-dynamics-and-transfer", title: "Dynamics & transfer functions", file: "06-dynamics-and-transfer.html" },
          { id: "06-frequency-and-stability", title: "Frequency response & stability", file: "06-frequency-and-stability.html" },
          { id: "06-closed-loop-and-pid", title: "Closed-loop control & PID", file: "06-closed-loop-and-pid.html" },
          { id: "06-ai-in-mechatronics", title: "AI in mechatronics", file: "06-ai-in-mechatronics.html" }
        ]
      },
      {
        id: "m7",
        num: 7,
        title: "Deep integrated systems",
        blurb: "Design methods and full-system case studies.",
        lessons: [
          { id: "07-mechatronic-design", title: "Mechatronic design", file: "07-mechatronic-design.html" },
          { id: "07-case-abs-and-camera", title: "Case studies: ABS & camera", file: "07-case-abs-and-camera.html" },
          { id: "07-case-cnc-and-appliance", title: "Case studies: CNC & appliance", file: "07-case-cnc-and-appliance.html" }
        ]
      },
      {
        id: "m8",
        num: 8,
        title: "What changed: modern systems",
        blurb: "Industry 4.0/5.0, smart sensors, drives, networks, ROS 2, twins, cobots.",
        lessons: [
          { id: "08-industry-40-and-cps", title: "Industry 4.0 & cyber-physical systems", file: "08-industry-40-and-cps.html" },
          { id: "08-sensors-then-vs-now", title: "Sensors: then vs now", file: "08-sensors-then-vs-now.html" },
          { id: "08-drives-and-actuators-now", title: "Drives & actuators now", file: "08-drives-and-actuators-now.html" },
          { id: "08-controllers-now", title: "Controllers now", file: "08-controllers-now.html" },
          { id: "08-industrial-networks", title: "Industrial networks", file: "08-industrial-networks.html" },
          { id: "08-ros2-and-software", title: "ROS 2 and modern software", file: "08-ros2-and-software.html" },
          { id: "08-digital-twins-and-edge-ai", title: "Digital twins & edge AI", file: "08-digital-twins-and-edge-ai.html" },
          { id: "08-cobots-safety-security", title: "Cobots, safety & OT security", file: "08-cobots-safety-security.html" },
          { id: "08-then-vs-now-map", title: "Then vs now curriculum map", file: "08-then-vs-now-map.html" }
        ]
      },
      {
        id: "m9",
        num: 9,
        title: "Robot mechanics and estimation",
        blurb: "Spatial frames, kinematics intuition, Jacobians, discrete control, estimation, planning, and mobile bases.",
        lessons: [
          { id: "09-spatial-thinking", title: "Spatial transforms and frames", file: "09-spatial-thinking.html" },
          { id: "09-forward-kinematics", title: "Forward kinematics intuition", file: "09-forward-kinematics.html" },
          { id: "09-jacobians-and-singularities", title: "Jacobians and singularities", file: "09-jacobians-and-singularities.html" },
          { id: "09-inverse-kinematics-trajectories", title: "IK and trajectories", file: "09-inverse-kinematics-trajectories.html" },
          { id: "09-discrete-pid-on-mcus", title: "Discrete PID on MCUs", file: "09-discrete-pid-on-mcus.html" },
          { id: "09-sensor-fusion-kalman-intuition", title: "Sensor fusion intuition", file: "09-sensor-fusion-kalman-intuition.html" },
          { id: "09-motion-planning-overview", title: "Motion planning overview", file: "09-motion-planning-overview.html" },
          { id: "09-mobile-robots-nonholonomic", title: "Mobile robots intro", file: "09-mobile-robots-nonholonomic.html" }
        ]
      },
      {
        id: "m10",
        num: 10,
        title: "Project Studio",
        blurb: "Progressive builds from sensing to closed loops, mobile behaviours, arms, and a ROS 2 sim stack.",
        lessons: [
          { id: "10-project-studio-intro", title: "Project Studio mindset", file: "10-project-studio-intro.html" },
          { id: "10-project-sense-and-display", title: "Project A Sense and display", file: "10-project-sense-and-display.html" },
          { id: "10-project-closed-loop-position", title: "Project B Closed loop position", file: "10-project-closed-loop-position.html" },
          { id: "10-project-line-follower", title: "Project C Line or wall follower", file: "10-project-line-follower.html" },
          { id: "10-project-two-link-arm", title: "Project D Two link arm", file: "10-project-two-link-arm.html" },
          { id: "10-project-ros2-mini-stack", title: "Project E ROS 2 mini stack", file: "10-project-ros2-mini-stack.html" }
        ]
      }
    ]
  };

  function allLessons() {
    const list = [];
    COURSE.modules.forEach((m) => {
      m.lessons.forEach((l) => {
        list.push({ ...l, moduleId: m.id, moduleNum: m.num, moduleTitle: m.title });
      });
    });
    return list;
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { completed: {}, quiz: {} };
      const data = JSON.parse(raw);
      return {
        completed: data.completed || {},
        quiz: data.quiz || {}
      };
    } catch (e) {
      return { completed: {}, quiz: {} };
    }
  }

  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function isComplete(lessonId) {
    return !!loadProgress().completed[lessonId];
  }

  function markComplete(lessonId) {
    const p = loadProgress();
    p.completed[lessonId] = true;
    saveProgress(p);
    updateChrome();
    document.dispatchEvent(new CustomEvent("ms:lesson-complete", { detail: { id: lessonId } }));
  }

  function setQuizScore(lessonId, score, total) {
    const p = loadProgress();
    p.quiz[lessonId] = { score: score, total: total };
    saveProgress(p);
  }

  function progressPercent() {
    const lessons = allLessons();
    if (!lessons.length) return 0;
    const p = loadProgress();
    let n = 0;
    lessons.forEach((l) => {
      if (p.completed[l.id]) n++;
    });
    return Math.round((n / lessons.length) * 100);
  }

  function moduleProgress(mod) {
    const p = loadProgress();
    let done = 0;
    mod.lessons.forEach((l) => {
      if (p.completed[l.id]) done++;
    });
    return { done: done, total: mod.lessons.length };
  }

  function findLesson(id) {
    return allLessons().find((l) => l.id === id) || null;
  }

  function adjacentLessons(id) {
    const list = allLessons();
    const i = list.findIndex((l) => l.id === id);
    return {
      prev: i > 0 ? list[i - 1] : null,
      next: i >= 0 && i < list.length - 1 ? list[i + 1] : null
    };
  }

  function lessonHref(lesson, fromLessons) {
    if (fromLessons) return lesson.file;
    return "lessons/" + lesson.file;
  }

  function renderSidebar(activeId, basePath) {
    const el = document.getElementById("sidebar-nav");
    if (!el) return;
    const fromLessons = basePath === "lessons";
    const p = loadProgress();
    let html = "";
    COURSE.modules.forEach((m) => {
      html += '<div class="mod-group"><div class="mod-title">Module ' + m.num + " — " + m.title + "</div>";
      m.lessons.forEach((l) => {
        const done = !!p.completed[l.id];
        const active = l.id === activeId;
        const href = fromLessons ? l.file : "lessons/" + l.file;
        html +=
          '<a class="lesson-link' +
          (active ? " active" : "") +
          (done ? " done" : "") +
          '" href="' +
          href +
          '"><span class="check">' +
          (done ? "✓" : "") +
          '</span><span class="lt">' +
          l.title +
          "</span></a>";
      });
      html += "</div>";
    });
    el.innerHTML = html;
  }

  function updateChrome() {
    const pct = progressPercent();
    document.querySelectorAll("[data-progress-pct]").forEach((el) => {
      el.textContent = pct + "%";
    });
    document.querySelectorAll("[data-progress-fill]").forEach((el) => {
      el.style.width = pct + "%";
    });
    const active = document.body.getAttribute("data-lesson");
    const base = document.body.getAttribute("data-base") || "";
    if (document.getElementById("sidebar-nav")) {
      renderSidebar(active, base);
    }
    document.dispatchEvent(new CustomEvent("ms:ui-updated"));
  }

  function renderDashboard() {
    const el = document.getElementById("module-dashboard");
    if (!el) return;
    const base = document.body.getAttribute("data-base") || "";
    const fromRoot = base !== "lessons";
    let html = "";
    COURSE.modules.forEach((m) => {
      const mp = moduleProgress(m);
      const pct = mp.total ? Math.round((mp.done / mp.total) * 100) : 0;
      const first = m.lessons[0];
      const href = fromRoot ? "lessons/" + first.file : first.file;
      html +=
        '<a class="mod-card" href="' +
        href +
        '"><div class="mod-num">MODULE ' +
        m.num +
        '</div><h3>' +
        m.title +
        "</h3><p>" +
        m.blurb +
        '</p><div class="mod-stats"><span>' +
        m.lessons.length +
        " lessons</span><span>" +
        mp.done +
        "/" +
        mp.total +
        " done</span></div><div class=\"mod-prog\"><div class=\"mod-prog-fill\" style=\"width:" +
        pct +
        '%"></div></div></a>';
    });
    el.innerHTML = html;
    document.dispatchEvent(new CustomEvent("ms:ui-updated"));
  }

  function renderProgressPage() {
    const el = document.getElementById("progress-detail");
    if (!el) return;
    const p = loadProgress();
    let html = "";
    COURSE.modules.forEach((m) => {
      const mp = moduleProgress(m);
      html +=
        '<div class="progress-module"><h3>Module ' +
        m.num +
        " — " +
        m.title +
        " (" +
        mp.done +
        "/" +
        mp.total +
        ")</h3><table class=\"progress-table\"><thead><tr><th>Lesson</th><th>Status</th><th>Quiz</th></tr></thead><tbody>";
      m.lessons.forEach((l) => {
        const done = p.completed[l.id];
        const q = p.quiz[l.id];
        const qStr = q ? q.score + "/" + q.total : "—";
        html +=
          "<tr><td>" +
          l.title +
          "</td><td>" +
          (done ? "Complete" : "Not started") +
          "</td><td>" +
          qStr +
          "</td></tr>";
      });
      html += "</tbody></table></div>";
    });
    el.innerHTML = html;
  }

  function resetProgress() {
    if (confirm("Reset all course progress and quiz scores? This cannot be undone.")) {
      localStorage.removeItem(STORAGE_KEY);
      updateChrome();
      renderDashboard();
      renderProgressPage();
      alert("Progress cleared.");
    }
  }

  function initQuiz() {
    document.querySelectorAll("form[data-quiz]").forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const lessonId = form.getAttribute("data-quiz");
        const questions = form.querySelectorAll(".quiz-q");
        let score = 0;
        const total = questions.length;
        questions.forEach((q) => {
          q.classList.remove("correct", "wrong");
          const correct = q.getAttribute("data-answer");
          const picked = q.querySelector('input[type="radio"]:checked');
          q.querySelectorAll("label").forEach((lab) => lab.classList.remove("picked"));
          if (picked) {
            picked.closest("label").classList.add("picked");
            if (picked.value === correct) {
              q.classList.add("correct");
              score++;
            } else {
              q.classList.add("wrong");
            }
          } else {
            q.classList.add("wrong");
          }
        });
        setQuizScore(lessonId, score, total);
        form.classList.add("quiz-scored");
        const result = form.querySelector(".quiz-result");
        if (result) {
          result.style.display = "block";
          result.classList.add("is-shown");
          result.textContent =
            "Score: " + score + " / " + total + (score === total ? " — excellent." : score >= total * 0.6 ? " — solid; review the explanations." : " — revisit the lesson, then retry.");
        }
      });
    });
  }

  function initMarkComplete() {
    const btn = document.getElementById("mark-complete");
    if (!btn) return;
    const id = document.body.getAttribute("data-lesson");
    if (!id) return;
    function refresh() {
      if (isComplete(id)) {
        btn.textContent = "Completed ✓";
        btn.disabled = true;
        btn.classList.add("btn-outline");
        btn.classList.remove("btn-primary");
      }
    }
    refresh();
    btn.addEventListener("click", function () {
      markComplete(id);
      refresh();
    });
  }

  function initKeyboardNav() {
    document.addEventListener("keydown", function (e) {
      if (e.target.matches("input, textarea, select")) return;
      const prev = document.body.getAttribute("data-prev");
      const next = document.body.getAttribute("data-next");
      if (e.key === "[" && prev) window.location.href = prev;
      if (e.key === "]" && next) window.location.href = next;
    });
  }

  function initMenuToggle() {
    const btn = document.getElementById("menu-toggle");
    const side = document.getElementById("sidebar");
    if (!btn || !side) return;
    btn.addEventListener("click", function () {
      side.classList.toggle("open");
    });
  }

  function resumeLink() {
    const el = document.getElementById("resume-link");
    if (!el) return;
    const p = loadProgress();
    const lessons = allLessons();
    let target = lessons[0];
    for (let i = 0; i < lessons.length; i++) {
      if (!p.completed[lessons[i].id]) {
        target = lessons[i];
        break;
      }
      if (i === lessons.length - 1) target = lessons[i];
    }
    el.href = "lessons/" + target.file;
    const pct = progressPercent();
    if (pct > 0 && pct < 100) {
      el.textContent = "Resume (" + pct + "%)";
    } else if (pct === 100) {
      el.textContent = "Review course";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const base = document.body.getAttribute("data-base") || "";
    const active = document.body.getAttribute("data-lesson") || "";
    renderSidebar(active, base);
    updateChrome();
    renderDashboard();
    renderProgressPage();
    initQuiz();
    initMarkComplete();
    initKeyboardNav();
    initMenuToggle();
    resumeLink();

    const resetBtn = document.getElementById("reset-progress");
    if (resetBtn) resetBtn.addEventListener("click", resetProgress);
  });

  window.MechatronicsStudio = {
    COURSE: COURSE,
    allLessons: allLessons,
    progressPercent: progressPercent,
    markComplete: markComplete,
    isComplete: isComplete,
    resetProgress: resetProgress,
    loadProgress: loadProgress
  };
})();
