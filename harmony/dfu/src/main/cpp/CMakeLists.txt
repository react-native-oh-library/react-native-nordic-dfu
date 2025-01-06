cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)
set(rnoh_dfu_generated_dir "${CMAKE_CURRENT_SOURCE_DIR}/generated")

file(GLOB rnoh_dfu_SRC CONFIGURE_DEPENDS *.cpp)
file(GLOB_RECURSE rnoh_dfu_generated_SRC "${rnoh_dfu_generated_dir}/**/*.cpp")

add_library(rnoh_dfu SHARED ${rnoh_dfu_SRC} ${rnoh_dfu_generated_SRC})
target_include_directories(rnoh_dfu PUBLIC
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${rnoh_dfu_generated_dir}
)

target_link_libraries(rnoh_dfu PUBLIC rnoh)