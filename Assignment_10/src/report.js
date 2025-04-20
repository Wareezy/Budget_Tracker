export class Report {
    #reportId;
    #userId;
    #dateRange;
    #generatedAt;
    #format;
    #status;
  
    constructor(reportId, userId, dateRange, format = 'PDF', status = 'active') {
      this.#reportId = reportId;
      this.#userId = userId;
      this.#dateRange = dateRange;
      this.#generatedAt = new Date();
      this.#format = format;
      this.#status = status;
    }
  
    generate() {
      this.#generatedAt = new Date();
      this.#status = 'generated';
    }
  
    export() {
      return `Report exported in ${this.#format}`;
    }
  
    archive() {
      this.#status = 'archived';
    }
  }