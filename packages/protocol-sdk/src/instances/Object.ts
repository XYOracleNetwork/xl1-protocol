import type { EmptyObject } from '@xylabs/sdk-js'

import type { DataInstance } from './Data.ts'

export interface ObjectInstance<T extends EmptyObject = EmptyObject> extends DataInstance<T> {}
