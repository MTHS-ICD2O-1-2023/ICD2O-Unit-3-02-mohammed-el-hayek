// Copyright (c) 2024 Mohammed All rights reserved
//
// Created by: Mohammed
// Created on: Mar 2024
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the volume of a pyramid
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length of Pyramid').value)
  const height = parseInt(document.getElementById('H of Pyramid').value)
  const width = parseInt(document.getElementById('W of Pyramid').value)

  // process
  const volume = (length * height * width) / 3

  // output
  document.getElementById('Volume').innerHTML = 'Volume is: ' + volume + ' cm³ '
}
