# DI VS FACTORY REASONING

<br>
<br>

## Repository Factory

## Purpose
This directory contains the `RepositoryFactory`, responsible for decoupling services from specific storage backends.

Instead of services directly creating repository instances (e.g., InMemory, Database), they ask the factory for a repository, specifying the entity type and optionally the storage type.

This follows the **Factory Pattern** design.

## Design Decision: Factory Pattern vs Dependency Injection (DI)

- **Factory Pattern Chosen**:  
  We chose the Factory Pattern because:
  - Our project is still simple and doesn't require a full DI container setup.
  - The Factory provides a centralized place to manage different storage types (Memory, Database, Filesystem, API).
  - Easy future extension: just add new cases to the factory when new backends are added.

- **When DI would be considered**:  
  For larger, enterprise-scale projects where service wiring gets complex and flexibility between different runtime configurations is needed.

## Example Usage

```javascript
import { RepositoryFactory } from "../factories/RepositoryFactory.js";

const userRepo = RepositoryFactory.getRepository("user");
const transactionRepo = RepositoryFactory.getRepository("transaction");
