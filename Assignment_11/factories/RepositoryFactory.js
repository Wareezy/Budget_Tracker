import { InMemoryBudgetRepository } from "../repositories/inmemory/inmemory-budget-repository.js";
import { InMemoryCategoryRepository } from "../repositories/inmemory/inmemory-category-repository.js";
import { InMemoryNotificationRepository } from "../repositories/inmemory/inmemory-notification-repository.js";
import { InMemoryRecurringTransactionRepository } from "../repositories/inmemory/inmemory-recurring-transaction-repository.js";
import { InMemoryReportRepository } from "../repositories/inmemory/inmemory-report-repository.js";
import { InMemoryTransactionRepository } from "../repositories/inmemory/inmemory-transaction-repository.js";
import { InMemoryUserRepository } from "../repositories/inmemory/inmemory-user-repository.js";

// 💾 Future-proof database repo import
import { DatabaseUserRepository } from "../repositories/database/database-user-repository.js";

export class RepositoryFactory {
    static getRepository(entityType, storageType = "MEMORY") {
        switch (storageType.toUpperCase()) {
            case "MEMORY":
                switch (entityType.toLowerCase()) {
                    case "budget":
                        return new InMemoryBudgetRepository();
                    case "category":
                        return new InMemoryCategoryRepository();
                    case "notification":
                        return new InMemoryNotificationRepository();
                    case "recurringtransaction":
                        return new InMemoryRecurringTransactionRepository();
                    case "report":
                        return new InMemoryReportRepository();
                    case "transaction":
                        return new InMemoryTransactionRepository();
                    case "user":
                        return new InMemoryUserRepository();
                    default:
                        throw new Error(`Unknown entity type for MEMORY: ${entityType}`);
                }

            case "DATABASE":
                switch (entityType.toLowerCase()) {
                    case "user":
                        return new DatabaseUserRepository(/* pass DB connection here in future */);
                    // Future: case "budget": return new DatabaseBudgetRepository();
                    // Future: case "transaction": return new DatabaseTransactionRepository();
                    default:
                        throw new Error(`Unknown entity type for DATABASE: ${entityType}`);
                }

            default:
                throw new Error(`Unsupported storage type: ${storageType}`);
        }
    }
}