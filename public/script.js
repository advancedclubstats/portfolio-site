// Ask-AI footer: open each provider with the prompt pre-loaded.
// ChatGPT, Claude, and Perplexity accept the prompt via a URL query param.
// Gemini has no reliable prefill URL, so we copy the prompt to the clipboard
// and open Gemini, telling the visitor to paste (Cmd/Ctrl+V).

(function () {
  const container = document.querySelector(".ai-buttons");
  if (!container) return;

  const prompt = container.getAttribute("data-prompt") || "";
  const note = document.getElementById("ask-note");
  const q = encodeURIComponent(prompt);

  const urls = {
    chatgpt: `https://chatgpt.com/?q=${q}`,
    claude: `https://claude.ai/new?q=${q}`,
    perplexity: `https://www.perplexity.ai/search?q=${q}`,
  };

  function say(msg) {
    if (note) note.textContent = msg || "";
  }

  container.addEventListener("click", async function (e) {
    const btn = e.target.closest(".ai-btn");
    if (!btn) return;
    const provider = btn.getAttribute("data-provider");

    if (provider === "gemini") {
      // Gemini can't take the prompt in the URL, so hand it off via clipboard.
      let copied = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(prompt);
          copied = true;
        }
      } catch (err) {
        copied = false;
      }
      say(
        copied
          ? "Prompt copied. Paste it into Gemini (Ctrl/Cmd+V) and hit enter."
          : "Opening Gemini. Paste this prompt: " + prompt
      );
      window.open("https://gemini.google.com/app", "_blank", "noopener");
      return;
    }

    const url = urls[provider];
    if (url) {
      say("");
      window.open(url, "_blank", "noopener");
    }
  });
})();

// Reveal-on-scroll: soft fade + rise as blocks enter the viewport.
(function () {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  els.forEach((el) => io.observe(el));
})();

// Quiz-chip mock (Signup Rebuild card): click a subject chip to toggle it
// selected, same as the real onboarding quiz. Purely visual, no state saved.
// Chips sit inside the card's outer <a>, so clicks must stop here or they'd
// also navigate to the detail page.
(function () {
  const chips = document.querySelectorAll(".qm-chip");
  if (!chips.length) return;

  function toggle(chip) {
    chip.classList.toggle("selected");
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle(chip);
    });
    chip.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        toggle(chip);
      }
    });
  });
})();

// Membership plan mock (Optional Membership card): click a plan card to
// select it, radio-style — only one plan is selected at a time, same as
// the real pricing picker. Same stopPropagation reasoning as the chips.
(function () {
  const groups = document.querySelectorAll(".mem-mock");
  groups.forEach((group) => {
    const cards = group.querySelectorAll(".mem-card");

    function select(card) {
      cards.forEach((c) => {
        const isTarget = c === card;
        c.classList.toggle("selected", isTarget);
        c.setAttribute("aria-checked", isTarget ? "true" : "false");
      });
    }

    cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        select(card);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          select(card);
        }
      });
    });
  });
})();

// Learner picker mock (Search by Learner card): click a learner row to
// select it, radio-style — also updates the search-bar chip and
// placeholder text, same as the real dropdown does.
(function () {
  const mocks = document.querySelectorAll(".learner-mock");
  mocks.forEach((mock) => {
    const rows = mock.querySelectorAll(".lm-row");
    const chipName = mock.querySelector(".lm-chip-name");
    const chipAvatar = mock.querySelector(".lm-chip-avatar");
    const searchText = mock.querySelector(".lm-search-text");

    function select(row) {
      rows.forEach((r) => {
        const isTarget = r === row;
        r.classList.toggle("selected", isTarget);
        r.setAttribute("aria-checked", isTarget ? "true" : "false");
      });
      const name = row.dataset.name;
      const avatarClass = [...row.querySelector(".lm-avatar").classList].find((c) =>
        c.startsWith("avatar-")
      );
      if (chipName) chipName.textContent = name;
      if (searchText) searchText.textContent = `Find ${name}’s next class`;
      if (chipAvatar && avatarClass) {
        chipAvatar.className = "lm-chip-avatar " + avatarClass;
        chipAvatar.textContent = name[0];
      }
    }

    rows.forEach((row) => {
      row.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        select(row);
      });
      row.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          select(row);
        }
      });
    });
  });
})();

// Dashboard mock (Dashboard Rebuild card): click a sidebar item or a status
// tab to select it, radio-style within each group — demonstrates "every
// core job is one click away" directly instead of just claiming it.
(function () {
  function wireRadioGroup(items) {
    items.forEach((item) => {
      function select() {
        items.forEach((i) => {
          i.classList.toggle("selected", i === item);
          i.classList.toggle("active", i === item);
        });
      }
      item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        select();
      });
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          select();
        }
      });
    });
  }

  document.querySelectorAll(".dash-mock").forEach((mock) => {
    wireRadioGroup([...mock.querySelectorAll(".ds-item")]);
    wireRadioGroup([...mock.querySelectorAll(".dp-tab")]);
  });
})();

// Floating nav: highlight the section currently in view.
(function () {
  const links = Array.from(document.querySelectorAll(".fab a"));
  if (!links.length) return;

  const sections = links
    .map((a) => ({ link: a, el: document.getElementById(a.dataset.target) }))
    .filter((s) => s.el);

  function update() {
    const y = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0];
    for (const s of sections) {
      if (s.el.offsetTop <= y) current = s;
    }
    links.forEach((a) => a.classList.toggle("active", a === current.link));
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
})();
