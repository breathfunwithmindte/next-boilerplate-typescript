/**
 * ==================================================
 * 
 * @name BaseTemplateInterface
 * @namespace PerfeAuthServiceClient::Templates::Base
 * @copyright PerfectEvolution - © 2022
 * @author Mike Karypidis
 * @license All rights reserved
 * 
 * ==================================================
 */

import React from "react";


interface PageProp {
  pagename: String,
  pageversion: String,
}


export interface BaseTemplateInterface {

  pageProp: PageProp
  children: React.ReactNode

}