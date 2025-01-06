/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */
#pragma once

#include "RNOH/generated/BaseReactNativeNordicDfuPackage.h"

namespace rnoh {

class RNDFUPackage : public BaseReactNativeNordicDfuPackage {
    using Super = BaseReactNativeNordicDfuPackage;

public:
    RNDFUPackage(Package::Context ctx) : Super(ctx) {}
};
} // namespace rnoh