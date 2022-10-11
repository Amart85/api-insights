/*
 * Copyright 2022 Cisco Systems, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import elementScrollTo from './elementScrollTo';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');
global.scrollTo = jest.fn();

describe('elementScrollTo', () => {
  test('An element that can be found, not delay', () => {
    elementScrollTo('.something', 0, 0);
  });

  test('An element that can be found, not delay', () => {
    const div = document.createElement('div');
    div.className = 'something';
    document.body.appendChild(div);
    elementScrollTo('.something', 0, 0);
  });

  test('An element that can be found, and delay', () => {
    const div = document.createElement('div');
    div.className = 'something';
    document.body.appendChild(div);
    elementScrollTo('.something', 0, 10);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
