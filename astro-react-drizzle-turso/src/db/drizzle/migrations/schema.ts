import { sqliteTable, AnySQLiteColumn, index, integer, text } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const users = sqliteTable("users", {
	id: integer("id"),
	name: text("name").notNull(),
},
(table) => {
	return {
		nameIdx: index("name_index").on(table.name),
	}
});