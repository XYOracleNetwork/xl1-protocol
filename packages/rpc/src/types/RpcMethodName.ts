export type StringKeyObject = { [key: string]: unknown }
export type MethodName<TObject extends {}> = keyof TObject
export type RpcMethodName<TRpcNameSpace extends string, TMethodName extends string> = `${TRpcNameSpace}_${TMethodName}`
