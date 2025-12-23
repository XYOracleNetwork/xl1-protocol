import type { TransactionReadRepository } from './TransactionReadRepository.ts'
import type { TransactionRepositoryIterator } from './TransactionRepositoryIterator.ts'
import type { TransactionWriteRepository } from './TransactionWriteRepository.ts'

export interface TransactionRepository extends TransactionReadRepository, TransactionWriteRepository {}

export interface ReadonlyIterableTransactionRepository extends TransactionReadRepository, TransactionRepositoryIterator {}

export interface IterableTransactionRepository extends TransactionRepository, TransactionRepositoryIterator {}
