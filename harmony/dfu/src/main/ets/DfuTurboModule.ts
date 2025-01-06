/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { TurboModule, RNOHError, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from "./generated/ts"

export class DfuTurboModule extends TurboModule implements TM.RNNordicDfu.Spec {

  constructor(ctx: TurboModuleContext) {
    super(ctx)
  }

  startDFU(upperDeviceAddress: string, deviceName: string, filePath: string): Promise<string> {
    return Promise.resolve('startDFU')
  }
  addListener(eventName: string){

  }
  removeListeners(count: number){

  }
}