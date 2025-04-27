import { InMemoryReportRepository } from "../repositories/inmemory/inmemory-report-repository.js";
import { Report } from "../../Assignment_10/src/report.js";

test("CRUD operations for Report", () => {
  const repo = new InMemoryReportRepository();
  const report = new Report("rep1", "u1", "2024-01-01 to 2024-01-31");

  // Create/Save
  repo.save(report);
  expect(repo.findById("rep1")).toBe(report);

  // Read All
  expect(repo.findAll()).toContain(report);

  // Delete
  repo.delete("rep1");
  expect(repo.findById("rep1")).toBeNull();
});