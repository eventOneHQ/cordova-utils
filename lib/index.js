const fs = require('fs-extra')
const et = require('elementtree')

/**
 * Cordova utils class
 */
class CordovaUtils {
  /**
  * Creates a Cordova utils instance
  * @param {object} opts Cordova utils options
  * @example
  * const cordovaUtils = new CordovaUtils()
  */
  constructor (opts = {}) {
    this.opts = opts
  }

  /**
   * Set a Cordova app version and build numbers
   * @param {string} versionNumber Version number to be set
   * @param {string} buildNumber Build number to be set
   * @param {string} [configFile=config.xml] Location of `config.xml` (e.g. `/path/to/config.xml`). Defaults to `./config.xml`.
   *
   * @example
   * await cordovaUtils.setVersion('1.4.5', '34')
   */
  async setVersion (versionNumber, buildNumber, configFile = 'config.xml') {
    if (!versionNumber) {
      throw new Error('Please specify a version number.')
    }
    if (!buildNumber) {
      throw new Error('Please specify a build number.')
    }

    try {
      await fs.stat(configFile)
    } catch (err) {
      throw new Error(`${configFile} doesn't seem to exist.`)
    }

    try {
      const data = await fs.readFile(configFile, 'utf-8')

      const doc = et.parse(data)
      const root = doc.getroot()

      root.set('version', versionNumber)
      root.set('ios-CFBundleVersion', buildNumber)
      root.set('android-versionCode', buildNumber)

      // Cordova hard codes an indentation of 4 spaces, so we'll follow.
      const xml = doc.write({ indent: 4 })
      await fs.writeFile(configFile, xml, { encoding: 'utf8' })

      return 'Version set in config.xml!'
    } catch (err) {
      throw err
    }
  }
}

module.exports = CordovaUtils
