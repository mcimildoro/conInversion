import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

// Tabla de usuarios
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
  firstName: varchar("first_name", { length: 255 }),
  lastName: varchar("last_name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Tabla de empresas
export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  ticker: varchar("ticker", { length: 10 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Tabla de oportunidades
export const opportunities = pgTable("opportunities", {
  id: serial("id").primaryKey(),
  companyId: serial("company_id").references(() => companies.id),
  type: varchar("type", { length: 50 }),
  description: text("description"),
  opportunityDate: timestamp("opportunity_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

// Tabla de eventos
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  companyId: serial("company_id").references(() => companies.id),
  message: text("message"),
  imageUrl: varchar("image_url", { length: 255 }),
  eventDate: timestamp("event_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})

