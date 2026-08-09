import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects", "routes/projects.tsx"),
  route("projects/:projectId", "routes/project-detail.tsx"),
  route("issues", "routes/issues.tsx"),
  route("issues/:issueId", "routes/issue-detail.tsx"),
  route("leaderboard", "routes/leaderboard.tsx"),
  route("wallet", "routes/wallet.tsx"),
  route("matchmaking", "routes/matchmaking.tsx"),
  route("heatmap/:username", "routes/heatmap.tsx"),
  route("certificate/:id", "routes/certificate.tsx"),
  route("badges", "routes/badges.tsx"),
  route("profile/:username", "routes/profile.tsx"),
  route("dashboard", "routes/dashboard.tsx"),

  // Auth
  route("login", "routes/login.tsx"),
  route("register/:type", "routes/stubs/register.tsx"),

  // Stubs for remaining pages (each has a unique file to avoid duplicate route IDs)
  route("about", "routes/stubs/about.tsx"),
  route("timeline", "routes/stubs/timeline.tsx"),
  route("events", "routes/stubs/events.tsx"),
  route("events/:eventId", "routes/stubs/event-detail.tsx"),
  route("blog", "routes/stubs/blog.tsx"),
  route("blog/:slug", "routes/stubs/blog-post.tsx"),
  route("sponsors", "routes/stubs/sponsors.tsx"),
  route("community", "routes/stubs/community.tsx"),
  route("faq", "routes/stubs/faq.tsx"),
  route("contact", "routes/stubs/contact.tsx"),
  route("terms", "routes/stubs/terms.tsx"),
  route("privacy", "routes/stubs/privacy.tsx"),
  route("code-of-conduct", "routes/stubs/code-of-conduct.tsx"),
  route("onboarding", "routes/stubs/onboarding.tsx"),
  route("settings", "routes/stubs/settings.tsx"),
  route("notifications", "routes/stubs/notifications.tsx"),
  route("search", "routes/stubs/search.tsx"),

  // 404 Catch-all
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
