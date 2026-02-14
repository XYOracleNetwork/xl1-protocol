import { isDefined, isNull } from '@xylabs/sdk-js'
import { cosmiconfig } from 'cosmiconfig'

import { ConfigZod } from './config/index.ts'

/**
 * The name of the configuration file to search for.
 */
const configName = 'xyo'

/**
 * The name of the section within the configuration file to parse.
 */
const configSection = 'xl1' // Default section in the config file

/**
 * Attempts to parse the configuration from a file using cosmiconfig.
 * @returns The parsed configuration object if found and valid, otherwise undefined.
 */
export async function getFileConfig(searchPlaces?: string[]) {
  const explorer = cosmiconfig(
    configName,
    {
      cache: true,
      searchPlaces,
    },
  )
  const result = (await explorer.search())?.config
  if (!isNull(result)) {
    const section = result[configSection]
    if (isDefined(section) && typeof section === 'object') {
      return ConfigZod.loose().parse(section)
    }
  }
  return ConfigZod.parse({})
}
