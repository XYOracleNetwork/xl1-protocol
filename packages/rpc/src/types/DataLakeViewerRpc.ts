import type { DataLakeViewerMethods } from '@xyo-network/xl1-protocol'

export type DataLakeViewerMethodName = keyof DataLakeViewerMethods

export type DataLakeViewerRpcMethodName = `dataLakeViewer_${DataLakeViewerMethodName}`

// Map each XYO RPC method string to the corresponding function type from DataLakeViewer
export type DataLakeViewerRpcMethodHandlers = {
  [K in DataLakeViewerMethodName as `dataLakeViewer_${K}`]: (
    params: Parameters<DataLakeViewerMethods[K]>,
  ) => ReturnType<DataLakeViewerMethods[K]>
}
