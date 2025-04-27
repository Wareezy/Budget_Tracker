import { ReportRepository } from "../report-repository.js";

export class InMemoryReportRepository extends ReportRepository {
    constructor() {
        super();
        this.storage = new Map();
    }

    save(report) {
        this.storage.set(report.reportId, report);
    }

    findById(id) {
        return this.storage.has(id) ? this.storage.get(id) : null;
    }

    findAll() {
        return Array.from(this.storage.values());
    }

    delete(id) {
        this.storage.delete(id);
    }
}
