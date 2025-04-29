import type { EmptyObject } from '@xylabs/object'

import type { DataInstance } from './Data.ts'

export interface ObjectInstance<T extends EmptyObject = EmptyObject> extends DataInstance<T> {}
