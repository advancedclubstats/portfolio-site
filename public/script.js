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
