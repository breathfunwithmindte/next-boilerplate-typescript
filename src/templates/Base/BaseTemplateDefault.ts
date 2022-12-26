/**
 * ==================================================
 * 
 * @name BaseTemplateDefault
 * @namespace PerfeAuthServiceClient::Templates::Base
 * @copyright PerfectEvolution - © 2022
 * @author Mike Karypidis
 * @license All rights reserved
 * 
 * ==================================================
 */

import { BaseTemplateInterface } from "./BaseTemplateInterface"

const baseTemplateDefault : BaseTemplateInterface = {
  children: null,
  pageProp: {
    pagename: "Default Page",
    pageversion: "1.0.0"
  }
}

export {
  baseTemplateDefault
}