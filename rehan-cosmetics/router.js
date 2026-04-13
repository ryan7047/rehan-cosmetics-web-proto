// ─── Simple Hash-based SPA Router ───
class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    window.addEventListener("hashchange", () => this.resolve());
    window.addEventListener("load", () => this.resolve());
  }

  on(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  resolve() {
    const hash = window.location.hash.slice(1) || "/";
    let matched = false;

    for (const path in this.routes) {
      // Build regex from path pattern, e.g. /product/:id -> /product/([^/]+)
      const paramNames = [];
      const regexStr = path.replace(/:([^/]+)/g, (_, name) => {
        paramNames.push(name);
        return "([^/]+)";
      });
      const regex = new RegExp("^" + regexStr + "$");
      const match = hash.match(regex);

      if (match) {
        const params = {};
        paramNames.forEach((name, i) => {
          params[name] = match[i + 1];
        });
        this.currentRoute = path;
        this.routes[path](params);
        matched = true;
        break;
      }
    }

    if (!matched && this.routes["/"]) {
      this.currentRoute = "/";
      this.routes["/"]({}); 
    }

    // Update active nav
    this.updateNav();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  updateNav() {
    const hash = window.location.hash.slice(1) || "/";
    document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
      const href = link.getAttribute("href").slice(1); // remove #
      link.classList.remove("active");
      if (href === hash || (href === "/" && hash === "/")) {
        link.classList.add("active");
      } else if (hash.startsWith("/product") && href === "/products") {
        link.classList.add("active");
      }
    });
  }

  navigate(path) {
    window.location.hash = path;
  }
}
