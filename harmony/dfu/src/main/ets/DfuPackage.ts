/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import { RNPackage, TurboModulesFactory } from '@rnoh/react-native-openharmony/ts';
import type { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { DfuTurboModule } from './DfuTurboModule';

class DfuTurboModulesFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (name === 'RNNordicDfu') {
      // 上下文对象
      globalThis.uiAbilityContext = this.ctx.uiAbilityContext;
      return new DfuTurboModule(this.ctx);
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === 'RNNordicDfu';
  }
}

export class DfuPackage extends RNPackage {
  createWrappedCustomRNComponentBuilderByComponentNameMap(): Map<string, any> {
    return new Map()
  }
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new DfuTurboModulesFactory(ctx);
  }
}
