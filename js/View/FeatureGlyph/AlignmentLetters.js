define([
    'dojo/_base/declare',
    'dojo/_base/array',
    'QualityGlyphs/View/FeatureGlyph/AlignmentBase'
],
function (
    declare,
    array,
    AlignmentBase
) {
    return declare(AlignmentBase, {
        _defaultConfig: function () {
            return this._mergeConfigs(dojo.clone(this.inherited(arguments)), {
                style: {
                    baseColor: function (feature, qual, base, track) {
                        return track.colorForBase(base);
                    }
                }
            });
        }
    });
});
