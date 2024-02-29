/*
 * MIT License
 *
 * Copyright (c) 2024 Kobiton Inc.
 * Copyright (c) 2020 Ashutosh Varma
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
 * THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/* eslint-disable no-console */
import fetch from 'node-fetch'

export const IS_WIN: boolean = process.platform === 'win32'
export const IS_LINUX: boolean = process.platform === 'linux'
export const IS_MAC: boolean = process.platform === 'darwin'

export async function downloadAsBuffer(url: string): Promise<ArrayBuffer> {
  console.log(`Downloading file ${url}`)
  const response = await fetch(url)
  if (response.ok) {
    return response.arrayBuffer()
  } else {
    throw new Error(
      `Error: Response with status ${status} received for url: ${url}`
    )
  }
}

export function getPlatform(platform: string): string {
  if (!platform) {
    return IS_MAC ? 'mac' : IS_LINUX ? 'linux' : IS_WIN ? 'win' : ''
  } else {
    return ['mac', 'linux', 'win'].includes(platform) ? platform : ''
  }
}
