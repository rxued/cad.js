/**
 * VelvetyShader
 *
 * :author: tannern
 * :date: 2/20/14
 *
 * A THREE.js Shader
 */

define([
    'THREE',
    'text!shaders/VelvetyShader-vertex.glsl',
    'text!shaders/VelvetyShader-fragment.glsl'
], function (THREE, vertexShaderCode, fragmentShaderCode) {
    THREE.VelvetyShader = function () {
        return {
            //side: THREE.DoubleSide,
            vertexColors: THREE.VertexColors,
            uniforms: {
                'opacity': {type: 'f', value: 1.0},
                'ambientFactor': {type: 'f', value: 0.3},
                'directFactor': {type: 'f', value: 1.0}
            },
            vertexShader: vertexShaderCode,
            fragmentShader: fragmentShaderCode
        };
    };
});
