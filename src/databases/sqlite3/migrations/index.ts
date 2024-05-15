import { sqliteConnection } from "..";
import { tableTasks } from "./table.Tasks";
import { tableUsers } from "./tableUsers";

export async function runMigrations() {
  const schemes = [tableUsers, tableTasks].join("");

  sqliteConnection()
    .then((db) => {
      db.exec(schemes);
    })
    .catch((error) => {
      console.error(error);
    });
}
