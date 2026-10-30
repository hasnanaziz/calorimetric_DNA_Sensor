(function () {
  var B = window.BRAIN || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  // Tema
  var root = document.documentElement;
  var saved = store.get("theme");
  if (saved) root.setAttribute("data-theme", saved);
  $("#theme").addEventListener("click", function () {
    var cur = root.getAttribute("data-theme") ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("theme", next);
  });

  // Audit
  var lvl = { warn: "Perlu semak", gap: "Jurang", info: "Nota" };
  $("#audit-list").innerHTML = (B.audit || []).map(function (a) {
    return '<div class="audit-item"><span class="pill ' + a.level + '">' + lvl[a.level] + '</span><div><h3>' +
      esc(a.title) + "</h3><p>" + esc(a.body) + "</p></div></div>";
  }).join("");

  // Keputusan
  $("#decisions").innerHTML = (B.decisions || []).map(function (d) {
    var open = d.status !== "decided";
    return '<article class="card"><h3>' + esc(d.id) + " · " + esc(d.title) + " " +
      '<span class="pill ' + (open ? "warn" : "ok") + '">' + (open ? "Belum diputuskan" : "Diputuskan") + "</span></h3>" +
      (d.blocks ? '<p class="ref">' + esc(d.blocks) + "</p>" : "") +
      "<ul>" + d.options.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>" +
      "<p><strong>Lalai dokumen:</strong> " + esc(d.defaultChoice) + "</p>" +
      (d.decision ? "<p><strong>Keputusan:</strong> " + esc(d.decision) + "</p>" : "") + "</article>";
  }).join("");

  // Tugasan (status asal dari data.js; tanda semak pelayar hanyalah kemudahan peribadi)
  var tasks = B.tasks || [];
  function renderTasks() {
    $("#tasks").innerHTML = tasks.map(function (t) {
      var local = store.get("task-" + t.id);
      var done = local ? local === "1" : t.status === "done";
      return '<label class="task' + (done ? " done" : "") + '"><input type="checkbox" data-id="' + t.id + '"' +
        (done ? " checked" : "") + '><span class="t">' + esc(t.text) + ' <span class="ref">' + esc(t.ref) + "</span></span></label>";
    }).join("");
    var n = tasks.filter(function (t) { var l = store.get("task-" + t.id); return l ? l === "1" : t.status === "done"; }).length;
    $("#stat-tasks").textContent = n + "/" + tasks.length;
  }
  renderTasks();
  $("#tasks").addEventListener("change", function (e) {
    if (e.target.matches("input[type=checkbox]")) {
      store.set("task-" + e.target.dataset.id, e.target.checked ? "1" : "0");
      renderTasks();
    }
  });

  // Log
  var tagName = { sistem: "mute", keputusan: "warn", bukti: "ok", nota: "info" };
  $("#log-list").innerHTML = (B.log || []).map(function (l) {
    return '<div class="entry"><time>' + esc(l.date) + ' </time><span class="pill ' + (tagName[l.tag] || "mute") + '">' +
      esc(l.tag) + "</span><h3>" + esc(l.title) + "</h3><p>" + esc(l.body) + "</p></div>";
  }).join("");

  // Statistik
  $("#stat-open").textContent = (B.decisions || []).filter(function (d) { return d.status !== "decided"; }).length;
  $("#stat-audit").textContent = (B.audit || []).filter(function (a) { return a.level !== "info"; }).length;
  $("#updated").textContent = B.updated || "";

  // Navigasi aktif
  var links = $$("nav.side a[href^='#']");
  var secs = links.map(function (a) { return $(a.getAttribute("href")); });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    secs.forEach(function (s) { if (s) io.observe(s); });
  }
  var side = $("nav.side");
  $("#menu").addEventListener("click", function () { side.classList.toggle("open"); });
  links.forEach(function (a) { a.addEventListener("click", function () { side.classList.remove("open"); }); });

  // Carian
  var blocks = $$("section.block");
  $("#q").addEventListener("input", function (e) {
    var q = e.target.value.trim().toLowerCase();
    blocks.forEach(function (b) {
      b.classList.toggle("hidden", !!q && b.textContent.toLowerCase().indexOf(q) === -1);
    });
  });
})();
