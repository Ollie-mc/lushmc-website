const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const copyIp = document.getElementById("copyIp");
const serverIp = document.getElementById("serverIp");
const toast = document.getElementById("toast");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

copyIp.addEventListener("click", async () => {
  const ip = serverIp.textContent.trim();

  try {
    await navigator.clipboard.writeText(ip);
    toast.textContent = `Copied ${ip} to clipboard!`;
  } catch {
    toast.textContent = `Server IP: ${ip}`;
  }

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => {
        item.classList.toggle(
          "active",
          item.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();
