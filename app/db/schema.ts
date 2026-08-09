import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  username: text('username').notNull(),
  level: text('level').notNull().default('Novice'),
  points: integer('points').notNull().default(0),
  prs: integer('prs').notNull().default(0),
  avatar: text('avatar'),
});

export const projects = sqliteTable('projects', {
  id: text('id').primaryKey(),
  name: text('name').notNull(), // e.g. "elixpo/lixeditor"
  description: text('description').notNull(),
  language: text('language').notNull(),
  stars: integer('stars').notNull().default(0),
  forks: integer('forks').notNull().default(0),
});

export const issues = sqliteTable('issues', {
  id: text('id').primaryKey(),
  projectId: text('project_id').notNull().references(() => projects.id),
  title: text('title').notNull(),
  points: integer('points').notNull(),
  difficulty: text('difficulty').notNull(), // "Good First Issue", "Intermediate", "Advanced"
  status: text('status').notNull().default('Open'), // "Open", "Claimed", "In Review", "Merged"
});

export const contributions = sqliteTable('contributions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id').notNull().references(() => users.id),
  issueId: text('issue_id').references(() => issues.id),
  type: text('type').notNull(), // "pr", "review", "mentorship", "event"
  action: text('action').notNull(),
  project: text('project'),
  points: integer('points').notNull(),
  date: text('date').notNull(),
  verified: integer('verified', { mode: 'boolean' }).notNull().default(true),
});
