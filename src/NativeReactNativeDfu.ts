/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry, NativeEventEmitter } from 'react-native';

export interface Spec extends TurboModule {
  /**
   * Starts the DFU process
   * 
   * @param options Options for starting DFU
   * @returns A promise that resolves or rejects with the `deviceAddress`
   */
  startDFU(upperDeviceAddress: string, deviceName: string, filePath: string): Promise<string>;
    /**
   * Add an event listener for DFU progress
   * 
   * @param eventName Event name ("DFUProgress" or "DFUStateChanged")
   */
  addListener(eventName: string): void;

    /**
     * Remove event listeners
     * 
     * @param count Number of listeners to remove
     */
  removeListeners(count: number): void;
}

// Bind the TurboModule
export default TurboModuleRegistry.getEnforcing<Spec>('RNNordicDfu');

