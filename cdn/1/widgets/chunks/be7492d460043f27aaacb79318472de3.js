"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_index3_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/index3.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/index3.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   groupTimeZones: () => (/* binding */ groupTimeZones)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
const supportedTimeZones = (() => {
    const platformTimeZones = Intl.supportedValuesOf('timeZone');
    // not all browsers include these time zones, so we add them to ensure consistent groups
    const etcTimeZones = [
        "Etc/GMT+1",
        "Etc/GMT+10",
        "Etc/GMT+11",
        "Etc/GMT+12",
        "Etc/GMT+2",
        "Etc/GMT+3",
        "Etc/GMT+4",
        "Etc/GMT+5",
        "Etc/GMT+6",
        "Etc/GMT+7",
        "Etc/GMT+8",
        "Etc/GMT+9",
        "Etc/GMT-1",
        "Etc/GMT-10",
        "Etc/GMT-11",
        "Etc/GMT-12",
        "Etc/GMT-13",
        "Etc/GMT-14",
        "Etc/GMT-2",
        "Etc/GMT-3",
        "Etc/GMT-4",
        "Etc/GMT-5",
        "Etc/GMT-6",
        "Etc/GMT-7",
        "Etc/GMT-8",
        "Etc/GMT-9"
    ];
    return [...new Set([...platformTimeZones, ...etcTimeZones])];
})();

const now = new Date();
const startDate = now.toISOString();
const daysInYear = 365;
const groupDateRange = daysInYear;
const defaultGroupingOptions = {
    startDate,
    groupDateRange,
    debug: false,
};

const continentAllowList = new Set([
    'Europe',
    'Asia',
    'America',
    'America/Argentina',
    'Africa',
    'Australia',
    'Pacific',
    'Atlantic',
    'Antarctica',
    'Arctic',
    'Indian',
]);
const _getDates = (startDate, numberDays, dateEngine) => {
    const dateArray = [];
    let date = dateEngine.create(startDate);
    for (let i = 0; i <= numberDays; i++) {
        date = dateEngine.increase(date);
        dateArray.push(dateEngine.formatToIsoDateString(date));
    }
    return dateArray;
};
const _extractContinent = (label) => {
    if (label.includes('Istanbul')) {
        return 'Europe';
    }
    const lastIndex = label.lastIndexOf('/');
    return lastIndex === -1 ? label : label.slice(0, lastIndex);
};
const _isRegularContinent = (continent) => continentAllowList.has(continent);
const generateTimeZoneMetadata = (timeZoneItems, startDate, numberDays, dateEngine, debug = false) => {
    const processedDates = new Map();
    if (debug) {
        console.log(`Initializing data starting ${startDate} with ${numberDays} days in the future, comparing ${timeZoneItems.length} timezones`);
    }
    const theDates = _getDates(startDate, numberDays, dateEngine);
    return timeZoneItems.map((tzItem) => {
        const label = tzItem.label;
        const continent = _extractContinent(label);
        const dates = theDates.map((date) => {
            const key = `${date}-${label}`;
            let utc = processedDates.get(key);
            if (utc) {
                return utc;
            }
            utc = dateEngine.isoToTimeZone(date, label);
            processedDates.set(key, utc);
            return utc;
        });
        return {
            ...tzItem,
            continent,
            isRegularContinent: _isRegularContinent(continent),
            dates,
        };
    });
};
const compareDateArrs = (array1, array2, dateEngine) => array1.length === array2.length &&
    array1.every((value, index) => dateEngine.same(value, array2[index]));
const getGroupLabelTimeZoneIndices = (rawTZs, max = 5) => {
    const shrinkedTzs = rawTZs.filter(({ label }) => _isRegularContinent(_extractContinent(label)));
    if (shrinkedTzs.length === 0) {
        return [0];
    }
    const validLabels = shrinkedTzs.map((tz) => rawTZs.indexOf(tz));
    return equallyDistributedSampling(validLabels, max);
};
function equallyDistributedSampling(items, maxItems = 5) {
    const totalItems = items.length;
    if (totalItems <= maxItems) {
        return items;
    }
    const numberItemsToSelect = Math.min(totalItems - 2, maxItems - 2);
    const stepSize = (totalItems - 1) / (numberItemsToSelect + 1);
    return [
        items[0],
        ...Array.from({ length: numberItemsToSelect }, (_, i) => items[Math.round((i + 1) * stepSize)]),
        items[totalItems - 1],
    ];
}

async function groupTimeZones(options) {
    const { debug, groupDateRange, hooks, startDate, dateEngine } = {
        ...defaultGroupingOptions,
        ...options,
    };
    const grouping = [];
    if (!dateEngine) {
        throw new Error('dateEngine is required');
    }
    const timeZoneItems = supportedTimeZones.map((tz) => ({ label: tz }));
    hooks?.onBeforeTimeZoneMetadataCreate?.(timeZoneItems);
    const timeZoneMetadata = generateTimeZoneMetadata(timeZoneItems, startDate, groupDateRange, dateEngine, debug);
    hooks?.onTimeZoneMetadataCreate?.(timeZoneMetadata);
    // We traverse the mappedDB and see if we find matches by comparing each set
    // of transformed date for that specific TZ.
    for (const tzMetadatumI of timeZoneMetadata) {
        const { label, continent, dates } = tzMetadatumI;
        // ignore if we visited this element already
        if (tzMetadatumI.visited) {
            continue;
        }
        // Mark element as already visited
        tzMetadatumI.visited = true;
        // The grouped timezone that we want as a result
        const newGroup = {
            labelTzIndices: undefined,
            tzs: [{ label }],
        };
        hooks?.onGroupCreate?.(newGroup, tzMetadatumI);
        for (const tzMetadatumJ of timeZoneMetadata.filter((_) => !_.visited)) {
            const { label: labelJ, continent: continentJ, isRegularContinent: isRegularContinentJ, dates: datesJ, } = tzMetadatumJ;
            // We define a matching TZ by:
            // 1) if both continents match (avoid grouping Antarctica with anything else)
            // 2) if the transformed dates match in both TZs
            if ((continent === continentJ || !isRegularContinentJ) &&
                compareDateArrs(dates, datesJ, dateEngine)) {
                const tzItem = { label: labelJ };
                newGroup.tzs.push(tzItem);
                hooks?.onGroupTimeZoneAdd?.(newGroup, tzItem, tzMetadatumJ);
                // Mark element as already visited
                tzMetadatumJ.visited = true;
            }
        }
        grouping.push(newGroup);
        hooks?.onGroupAdd?.(newGroup);
    }
    // Now that we have a group, we want an easy way to find a fitting label for the group
    // which is defined as the list of the most-common 7 cities, shown in alphabetical order
    const finalGrouping = grouping
        .map((group) => {
        hooks?.onBeforeFinalGroupCreate?.(group);
        group.tzs = group.tzs.sort((a, b) => a.label.localeCompare(b.label));
        const finalGrouping = {
            labelTzIndices: getGroupLabelTimeZoneIndices(group.tzs, 7),
            tzs: group.tzs.map((_) => _.label),
        };
        hooks?.onFinalGroupCreate?.(finalGrouping, group);
        return finalGrouping;
    })
        .sort((a, b) => b.tzs.length - a.tzs.length);
    if (debug) {
        const missingTzs = supportedTimeZones
            .map((tz) => (finalGrouping.some((y) => y.tzs.includes(tz)) ? null : tz))
            .filter(Boolean);
        if (missingTzs.length > 0) {
            throw new Error(`There are ${missingTzs.length} missing timezones: ${missingTzs.toString()}`);
        }
    }
    return hooks?.onFinalGroupingCreate
        ? hooks.onFinalGroupingCreate(finalGrouping)
        : finalGrouping;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYmU3NDkyZDQ2MDA0M2YyN2FhYWNiNzkzMTg0NzJkZTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFdBQVcsT0FBTyxZQUFZLGdDQUFnQyxzQkFBc0I7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUssR0FBRyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxzREFBc0Q7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsV0FBVztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnR0FBZ0c7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG1CQUFtQixxQkFBcUIsc0JBQXNCO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaW5kZXgzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmNvbnN0IHN1cHBvcnRlZFRpbWVab25lcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgcGxhdGZvcm1UaW1lWm9uZXMgPSBJbnRsLnN1cHBvcnRlZFZhbHVlc09mKCd0aW1lWm9uZScpO1xuICAgIC8vIG5vdCBhbGwgYnJvd3NlcnMgaW5jbHVkZSB0aGVzZSB0aW1lIHpvbmVzLCBzbyB3ZSBhZGQgdGhlbSB0byBlbnN1cmUgY29uc2lzdGVudCBncm91cHNcbiAgICBjb25zdCBldGNUaW1lWm9uZXMgPSBbXG4gICAgICAgIFwiRXRjL0dNVCsxXCIsXG4gICAgICAgIFwiRXRjL0dNVCsxMFwiLFxuICAgICAgICBcIkV0Yy9HTVQrMTFcIixcbiAgICAgICAgXCJFdGMvR01UKzEyXCIsXG4gICAgICAgIFwiRXRjL0dNVCsyXCIsXG4gICAgICAgIFwiRXRjL0dNVCszXCIsXG4gICAgICAgIFwiRXRjL0dNVCs0XCIsXG4gICAgICAgIFwiRXRjL0dNVCs1XCIsXG4gICAgICAgIFwiRXRjL0dNVCs2XCIsXG4gICAgICAgIFwiRXRjL0dNVCs3XCIsXG4gICAgICAgIFwiRXRjL0dNVCs4XCIsXG4gICAgICAgIFwiRXRjL0dNVCs5XCIsXG4gICAgICAgIFwiRXRjL0dNVC0xXCIsXG4gICAgICAgIFwiRXRjL0dNVC0xMFwiLFxuICAgICAgICBcIkV0Yy9HTVQtMTFcIixcbiAgICAgICAgXCJFdGMvR01ULTEyXCIsXG4gICAgICAgIFwiRXRjL0dNVC0xM1wiLFxuICAgICAgICBcIkV0Yy9HTVQtMTRcIixcbiAgICAgICAgXCJFdGMvR01ULTJcIixcbiAgICAgICAgXCJFdGMvR01ULTNcIixcbiAgICAgICAgXCJFdGMvR01ULTRcIixcbiAgICAgICAgXCJFdGMvR01ULTVcIixcbiAgICAgICAgXCJFdGMvR01ULTZcIixcbiAgICAgICAgXCJFdGMvR01ULTdcIixcbiAgICAgICAgXCJFdGMvR01ULThcIixcbiAgICAgICAgXCJFdGMvR01ULTlcIlxuICAgIF07XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KFsuLi5wbGF0Zm9ybVRpbWVab25lcywgLi4uZXRjVGltZVpvbmVzXSldO1xufSkoKTtcblxuY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbmNvbnN0IHN0YXJ0RGF0ZSA9IG5vdy50b0lTT1N0cmluZygpO1xuY29uc3QgZGF5c0luWWVhciA9IDM2NTtcbmNvbnN0IGdyb3VwRGF0ZVJhbmdlID0gZGF5c0luWWVhcjtcbmNvbnN0IGRlZmF1bHRHcm91cGluZ09wdGlvbnMgPSB7XG4gICAgc3RhcnREYXRlLFxuICAgIGdyb3VwRGF0ZVJhbmdlLFxuICAgIGRlYnVnOiBmYWxzZSxcbn07XG5cbmNvbnN0IGNvbnRpbmVudEFsbG93TGlzdCA9IG5ldyBTZXQoW1xuICAgICdFdXJvcGUnLFxuICAgICdBc2lhJyxcbiAgICAnQW1lcmljYScsXG4gICAgJ0FtZXJpY2EvQXJnZW50aW5hJyxcbiAgICAnQWZyaWNhJyxcbiAgICAnQXVzdHJhbGlhJyxcbiAgICAnUGFjaWZpYycsXG4gICAgJ0F0bGFudGljJyxcbiAgICAnQW50YXJjdGljYScsXG4gICAgJ0FyY3RpYycsXG4gICAgJ0luZGlhbicsXG5dKTtcbmNvbnN0IF9nZXREYXRlcyA9IChzdGFydERhdGUsIG51bWJlckRheXMsIGRhdGVFbmdpbmUpID0+IHtcbiAgICBjb25zdCBkYXRlQXJyYXkgPSBbXTtcbiAgICBsZXQgZGF0ZSA9IGRhdGVFbmdpbmUuY3JlYXRlKHN0YXJ0RGF0ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbnVtYmVyRGF5czsgaSsrKSB7XG4gICAgICAgIGRhdGUgPSBkYXRlRW5naW5lLmluY3JlYXNlKGRhdGUpO1xuICAgICAgICBkYXRlQXJyYXkucHVzaChkYXRlRW5naW5lLmZvcm1hdFRvSXNvRGF0ZVN0cmluZyhkYXRlKSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRlQXJyYXk7XG59O1xuY29uc3QgX2V4dHJhY3RDb250aW5lbnQgPSAobGFiZWwpID0+IHtcbiAgICBpZiAobGFiZWwuaW5jbHVkZXMoJ0lzdGFuYnVsJykpIHtcbiAgICAgICAgcmV0dXJuICdFdXJvcGUnO1xuICAgIH1cbiAgICBjb25zdCBsYXN0SW5kZXggPSBsYWJlbC5sYXN0SW5kZXhPZignLycpO1xuICAgIHJldHVybiBsYXN0SW5kZXggPT09IC0xID8gbGFiZWwgOiBsYWJlbC5zbGljZSgwLCBsYXN0SW5kZXgpO1xufTtcbmNvbnN0IF9pc1JlZ3VsYXJDb250aW5lbnQgPSAoY29udGluZW50KSA9PiBjb250aW5lbnRBbGxvd0xpc3QuaGFzKGNvbnRpbmVudCk7XG5jb25zdCBnZW5lcmF0ZVRpbWVab25lTWV0YWRhdGEgPSAodGltZVpvbmVJdGVtcywgc3RhcnREYXRlLCBudW1iZXJEYXlzLCBkYXRlRW5naW5lLCBkZWJ1ZyA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0ZXMgPSBuZXcgTWFwKCk7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBJbml0aWFsaXppbmcgZGF0YSBzdGFydGluZyAke3N0YXJ0RGF0ZX0gd2l0aCAke251bWJlckRheXN9IGRheXMgaW4gdGhlIGZ1dHVyZSwgY29tcGFyaW5nICR7dGltZVpvbmVJdGVtcy5sZW5ndGh9IHRpbWV6b25lc2ApO1xuICAgIH1cbiAgICBjb25zdCB0aGVEYXRlcyA9IF9nZXREYXRlcyhzdGFydERhdGUsIG51bWJlckRheXMsIGRhdGVFbmdpbmUpO1xuICAgIHJldHVybiB0aW1lWm9uZUl0ZW1zLm1hcCgodHpJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gdHpJdGVtLmxhYmVsO1xuICAgICAgICBjb25zdCBjb250aW5lbnQgPSBfZXh0cmFjdENvbnRpbmVudChsYWJlbCk7XG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGhlRGF0ZXMubWFwKChkYXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBgJHtkYXRlfS0ke2xhYmVsfWA7XG4gICAgICAgICAgICBsZXQgdXRjID0gcHJvY2Vzc2VkRGF0ZXMuZ2V0KGtleSk7XG4gICAgICAgICAgICBpZiAodXRjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV0YztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHV0YyA9IGRhdGVFbmdpbmUuaXNvVG9UaW1lWm9uZShkYXRlLCBsYWJlbCk7XG4gICAgICAgICAgICBwcm9jZXNzZWREYXRlcy5zZXQoa2V5LCB1dGMpO1xuICAgICAgICAgICAgcmV0dXJuIHV0YztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50ekl0ZW0sXG4gICAgICAgICAgICBjb250aW5lbnQsXG4gICAgICAgICAgICBpc1JlZ3VsYXJDb250aW5lbnQ6IF9pc1JlZ3VsYXJDb250aW5lbnQoY29udGluZW50KSxcbiAgICAgICAgICAgIGRhdGVzLFxuICAgICAgICB9O1xuICAgIH0pO1xufTtcbmNvbnN0IGNvbXBhcmVEYXRlQXJycyA9IChhcnJheTEsIGFycmF5MiwgZGF0ZUVuZ2luZSkgPT4gYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aCAmJlxuICAgIGFycmF5MS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiBkYXRlRW5naW5lLnNhbWUodmFsdWUsIGFycmF5MltpbmRleF0pKTtcbmNvbnN0IGdldEdyb3VwTGFiZWxUaW1lWm9uZUluZGljZXMgPSAocmF3VFpzLCBtYXggPSA1KSA9PiB7XG4gICAgY29uc3Qgc2hyaW5rZWRUenMgPSByYXdUWnMuZmlsdGVyKCh7IGxhYmVsIH0pID0+IF9pc1JlZ3VsYXJDb250aW5lbnQoX2V4dHJhY3RDb250aW5lbnQobGFiZWwpKSk7XG4gICAgaWYgKHNocmlua2VkVHpzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWzBdO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZExhYmVscyA9IHNocmlua2VkVHpzLm1hcCgodHopID0+IHJhd1Racy5pbmRleE9mKHR6KSk7XG4gICAgcmV0dXJuIGVxdWFsbHlEaXN0cmlidXRlZFNhbXBsaW5nKHZhbGlkTGFiZWxzLCBtYXgpO1xufTtcbmZ1bmN0aW9uIGVxdWFsbHlEaXN0cmlidXRlZFNhbXBsaW5nKGl0ZW1zLCBtYXhJdGVtcyA9IDUpIHtcbiAgICBjb25zdCB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgIGlmICh0b3RhbEl0ZW1zIDw9IG1heEl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG4gICAgY29uc3QgbnVtYmVySXRlbXNUb1NlbGVjdCA9IE1hdGgubWluKHRvdGFsSXRlbXMgLSAyLCBtYXhJdGVtcyAtIDIpO1xuICAgIGNvbnN0IHN0ZXBTaXplID0gKHRvdGFsSXRlbXMgLSAxKSAvIChudW1iZXJJdGVtc1RvU2VsZWN0ICsgMSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgaXRlbXNbMF0sXG4gICAgICAgIC4uLkFycmF5LmZyb20oeyBsZW5ndGg6IG51bWJlckl0ZW1zVG9TZWxlY3QgfSwgKF8sIGkpID0+IGl0ZW1zW01hdGgucm91bmQoKGkgKyAxKSAqIHN0ZXBTaXplKV0pLFxuICAgICAgICBpdGVtc1t0b3RhbEl0ZW1zIC0gMV0sXG4gICAgXTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ3JvdXBUaW1lWm9uZXMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgZGVidWcsIGdyb3VwRGF0ZVJhbmdlLCBob29rcywgc3RhcnREYXRlLCBkYXRlRW5naW5lIH0gPSB7XG4gICAgICAgIC4uLmRlZmF1bHRHcm91cGluZ09wdGlvbnMsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCBncm91cGluZyA9IFtdO1xuICAgIGlmICghZGF0ZUVuZ2luZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGVFbmdpbmUgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgY29uc3QgdGltZVpvbmVJdGVtcyA9IHN1cHBvcnRlZFRpbWVab25lcy5tYXAoKHR6KSA9PiAoeyBsYWJlbDogdHogfSkpO1xuICAgIGhvb2tzPy5vbkJlZm9yZVRpbWVab25lTWV0YWRhdGFDcmVhdGU/Lih0aW1lWm9uZUl0ZW1zKTtcbiAgICBjb25zdCB0aW1lWm9uZU1ldGFkYXRhID0gZ2VuZXJhdGVUaW1lWm9uZU1ldGFkYXRhKHRpbWVab25lSXRlbXMsIHN0YXJ0RGF0ZSwgZ3JvdXBEYXRlUmFuZ2UsIGRhdGVFbmdpbmUsIGRlYnVnKTtcbiAgICBob29rcz8ub25UaW1lWm9uZU1ldGFkYXRhQ3JlYXRlPy4odGltZVpvbmVNZXRhZGF0YSk7XG4gICAgLy8gV2UgdHJhdmVyc2UgdGhlIG1hcHBlZERCIGFuZCBzZWUgaWYgd2UgZmluZCBtYXRjaGVzIGJ5IGNvbXBhcmluZyBlYWNoIHNldFxuICAgIC8vIG9mIHRyYW5zZm9ybWVkIGRhdGUgZm9yIHRoYXQgc3BlY2lmaWMgVFouXG4gICAgZm9yIChjb25zdCB0ek1ldGFkYXR1bUkgb2YgdGltZVpvbmVNZXRhZGF0YSkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBjb250aW5lbnQsIGRhdGVzIH0gPSB0ek1ldGFkYXR1bUk7XG4gICAgICAgIC8vIGlnbm9yZSBpZiB3ZSB2aXNpdGVkIHRoaXMgZWxlbWVudCBhbHJlYWR5XG4gICAgICAgIGlmICh0ek1ldGFkYXR1bUkudmlzaXRlZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFyayBlbGVtZW50IGFzIGFscmVhZHkgdmlzaXRlZFxuICAgICAgICB0ek1ldGFkYXR1bUkudmlzaXRlZCA9IHRydWU7XG4gICAgICAgIC8vIFRoZSBncm91cGVkIHRpbWV6b25lIHRoYXQgd2Ugd2FudCBhcyBhIHJlc3VsdFxuICAgICAgICBjb25zdCBuZXdHcm91cCA9IHtcbiAgICAgICAgICAgIGxhYmVsVHpJbmRpY2VzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0enM6IFt7IGxhYmVsIH1dLFxuICAgICAgICB9O1xuICAgICAgICBob29rcz8ub25Hcm91cENyZWF0ZT8uKG5ld0dyb3VwLCB0ek1ldGFkYXR1bUkpO1xuICAgICAgICBmb3IgKGNvbnN0IHR6TWV0YWRhdHVtSiBvZiB0aW1lWm9uZU1ldGFkYXRhLmZpbHRlcigoXykgPT4gIV8udmlzaXRlZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGFiZWw6IGxhYmVsSiwgY29udGluZW50OiBjb250aW5lbnRKLCBpc1JlZ3VsYXJDb250aW5lbnQ6IGlzUmVndWxhckNvbnRpbmVudEosIGRhdGVzOiBkYXRlc0osIH0gPSB0ek1ldGFkYXR1bUo7XG4gICAgICAgICAgICAvLyBXZSBkZWZpbmUgYSBtYXRjaGluZyBUWiBieTpcbiAgICAgICAgICAgIC8vIDEpIGlmIGJvdGggY29udGluZW50cyBtYXRjaCAoYXZvaWQgZ3JvdXBpbmcgQW50YXJjdGljYSB3aXRoIGFueXRoaW5nIGVsc2UpXG4gICAgICAgICAgICAvLyAyKSBpZiB0aGUgdHJhbnNmb3JtZWQgZGF0ZXMgbWF0Y2ggaW4gYm90aCBUWnNcbiAgICAgICAgICAgIGlmICgoY29udGluZW50ID09PSBjb250aW5lbnRKIHx8ICFpc1JlZ3VsYXJDb250aW5lbnRKKSAmJlxuICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlQXJycyhkYXRlcywgZGF0ZXNKLCBkYXRlRW5naW5lKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHR6SXRlbSA9IHsgbGFiZWw6IGxhYmVsSiB9O1xuICAgICAgICAgICAgICAgIG5ld0dyb3VwLnR6cy5wdXNoKHR6SXRlbSk7XG4gICAgICAgICAgICAgICAgaG9va3M/Lm9uR3JvdXBUaW1lWm9uZUFkZD8uKG5ld0dyb3VwLCB0ekl0ZW0sIHR6TWV0YWRhdHVtSik7XG4gICAgICAgICAgICAgICAgLy8gTWFyayBlbGVtZW50IGFzIGFscmVhZHkgdmlzaXRlZFxuICAgICAgICAgICAgICAgIHR6TWV0YWRhdHVtSi52aXNpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBncm91cGluZy5wdXNoKG5ld0dyb3VwKTtcbiAgICAgICAgaG9va3M/Lm9uR3JvdXBBZGQ/LihuZXdHcm91cCk7XG4gICAgfVxuICAgIC8vIE5vdyB0aGF0IHdlIGhhdmUgYSBncm91cCwgd2Ugd2FudCBhbiBlYXN5IHdheSB0byBmaW5kIGEgZml0dGluZyBsYWJlbCBmb3IgdGhlIGdyb3VwXG4gICAgLy8gd2hpY2ggaXMgZGVmaW5lZCBhcyB0aGUgbGlzdCBvZiB0aGUgbW9zdC1jb21tb24gNyBjaXRpZXMsIHNob3duIGluIGFscGhhYmV0aWNhbCBvcmRlclxuICAgIGNvbnN0IGZpbmFsR3JvdXBpbmcgPSBncm91cGluZ1xuICAgICAgICAubWFwKChncm91cCkgPT4ge1xuICAgICAgICBob29rcz8ub25CZWZvcmVGaW5hbEdyb3VwQ3JlYXRlPy4oZ3JvdXApO1xuICAgICAgICBncm91cC50enMgPSBncm91cC50enMuc29ydCgoYSwgYikgPT4gYS5sYWJlbC5sb2NhbGVDb21wYXJlKGIubGFiZWwpKTtcbiAgICAgICAgY29uc3QgZmluYWxHcm91cGluZyA9IHtcbiAgICAgICAgICAgIGxhYmVsVHpJbmRpY2VzOiBnZXRHcm91cExhYmVsVGltZVpvbmVJbmRpY2VzKGdyb3VwLnR6cywgNyksXG4gICAgICAgICAgICB0enM6IGdyb3VwLnR6cy5tYXAoKF8pID0+IF8ubGFiZWwpLFxuICAgICAgICB9O1xuICAgICAgICBob29rcz8ub25GaW5hbEdyb3VwQ3JlYXRlPy4oZmluYWxHcm91cGluZywgZ3JvdXApO1xuICAgICAgICByZXR1cm4gZmluYWxHcm91cGluZztcbiAgICB9KVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYi50enMubGVuZ3RoIC0gYS50enMubGVuZ3RoKTtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1R6cyA9IHN1cHBvcnRlZFRpbWVab25lc1xuICAgICAgICAgICAgLm1hcCgodHopID0+IChmaW5hbEdyb3VwaW5nLnNvbWUoKHkpID0+IHkudHpzLmluY2x1ZGVzKHR6KSkgPyBudWxsIDogdHopKVxuICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgaWYgKG1pc3NpbmdUenMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmUgJHttaXNzaW5nVHpzLmxlbmd0aH0gbWlzc2luZyB0aW1lem9uZXM6ICR7bWlzc2luZ1R6cy50b1N0cmluZygpfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBob29rcz8ub25GaW5hbEdyb3VwaW5nQ3JlYXRlXG4gICAgICAgID8gaG9va3Mub25GaW5hbEdyb3VwaW5nQ3JlYXRlKGZpbmFsR3JvdXBpbmcpXG4gICAgICAgIDogZmluYWxHcm91cGluZztcbn1cblxuZXhwb3J0IHsgZ3JvdXBUaW1lWm9uZXMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==