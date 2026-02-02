// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RecordKeyType<T = keyof any> = T extends keyof any ? T : never
