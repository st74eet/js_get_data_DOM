"use strict";function _array_like_to_array(r,t){(null==t||t>r.length)&&(t=r.length);for(var o=0,a=Array(t);o<t;o++)a[o]=r[o];return a}function _array_without_holes(r){if(Array.isArray(r))return _array_like_to_array(r)}function _iterable_to_array(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(r){return _array_without_holes(r)||_iterable_to_array(r)||_unsupported_iterable_to_array(r)||_non_iterable_spread()}function _unsupported_iterable_to_array(r,t){if(r){if("string"==typeof r)return _array_like_to_array(r,t);var o=Object.prototype.toString.call(r).slice(8,-1);if("Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _array_like_to_array(r,t)}}function toFormat(r){return r.toString().split("").reverse().map(function(r,t){return t%3==0&&0!==t?r+",":r}).reverse().join("")}var population=_to_consumable_array(document.querySelectorAll(".population")),totalPopulation=document.querySelector(".total-population"),averagePopulation=document.querySelector(".average-population"),total=0,_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var r,t=population[Symbol.iterator]();!(_iteratorNormalCompletion=(r=t.next()).done);_iteratorNormalCompletion=!0){var o=r.value,a=Number(o.textContent.split(",").join(""));"number"==typeof a&&(total+=a)}}catch(r){_didIteratorError=!0,_iteratorError=r}finally{try{_iteratorNormalCompletion||null==t.return||t.return()}finally{if(_didIteratorError)throw _iteratorError}}var average=Math.round(total/population.length);totalPopulation.innerHTML=toFormat(total),averagePopulation.innerHTML=toFormat(average);
//# sourceMappingURL=js_get_data_DOM.4fb4355f.js.map
