"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["node_modules_esri_calcite-components_dist_components_index4_js"],{

/***/ "./node_modules/@esri/calcite-components/dist/components/index4.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/index4.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateEngine: () => (/* binding */ NativeDateEngine)
/* harmony export */ });
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */
class NativeDateEngine {
    constructor() {
        this._formatterCache = new Map();
        this._commonDateTimeFormatterOptions = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZoneName: 'shortOffset',
        };
    }
    get name() {
        return 'native';
    }
    create(date) {
        return new Date(date);
    }
    increase(date) {
        const oneDayInMs = 86400000;
        return new Date(date.getTime() + oneDayInMs);
    }
    formatToIsoDateString(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month.toString().padStart(2, '0')}-${day
            .toString()
            .padStart(2, '0')}`;
    }
    isoToTimeZone(isoDate, tz) {
        const date = this._toDate(isoDate);
        const formatter = this._getFormatter(tz);
        const parts = formatter.formatToParts(date);
        const [offset] = parts
            .filter(({ type }) => type === 'timeZoneName')
            .map(({ value }) => value);
        const tzOffset = this._getTimeZoneOffsetInMins(offset);
        const tzOffsetMinutes = date.getMinutes() - (date.getTimezoneOffset() - tzOffset);
        date.setMinutes(tzOffsetMinutes);
        return date;
    }
    same(date1, date2) {
        return date1.getTime() === date2.getTime();
    }
    _toDate(isoDate) {
        return new Date(isoDate);
    }
    _getFormatter(tz) {
        let formatter = this._formatterCache.get(tz);
        if (!formatter) {
            formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: tz,
                ...this._commonDateTimeFormatterOptions,
            });
            this._formatterCache.set(tz, formatter);
        }
        return formatter;
    }
    _getTimeZoneOffsetInMins(gmtTimeZone) {
        const [sign, ...hoursMinutes] = gmtTimeZone.slice(3);
        const [hours, minutes] = hoursMinutes.join('').split(':');
        const signMultiplier = sign === '+' ? 1 : -1;
        return signMultiplier * (Number(hours) * 60 + Number(minutes || 0));
    }
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvYTFlMTExM2M3ODMyMGY4YmFlMmQ3YjNmNDc4ZDMzZWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsS0FBSyxHQUFHLGtDQUFrQyxHQUFHO0FBQy9EO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixNQUFNO0FBQzdCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL0Blc3JpL2NhbGNpdGUtY29tcG9uZW50cy9kaXN0L2NvbXBvbmVudHMvaW5kZXg0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vRXNyaS9jYWxjaXRlLWRlc2lnbi1zeXN0ZW0vYmxvYi9tYWluL0xJQ0VOU0UubWQgZm9yIGRldGFpbHMuXG4gKiB2MS4xMS4wXG4gKi9cbmNsYXNzIE5hdGl2ZURhdGVFbmdpbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9mb3JtYXR0ZXJDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fY29tbW9uRGF0ZVRpbWVGb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgIGRheTogJzItZGlnaXQnLFxuICAgICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnRPZmZzZXQnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICduYXRpdmUnO1xuICAgIH1cbiAgICBjcmVhdGUoZGF0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuICAgIGluY3JlYXNlKGRhdGUpIHtcbiAgICAgICAgY29uc3Qgb25lRGF5SW5NcyA9IDg2NDAwMDAwO1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBvbmVEYXlJbk1zKTtcbiAgICB9XG4gICAgZm9ybWF0VG9Jc29EYXRlU3RyaW5nKGRhdGUpIHtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGgudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfS0ke2RheVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5wYWRTdGFydCgyLCAnMCcpfWA7XG4gICAgfVxuICAgIGlzb1RvVGltZVpvbmUoaXNvRGF0ZSwgdHopIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMuX3RvRGF0ZShpc29EYXRlKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gdGhpcy5fZ2V0Rm9ybWF0dGVyKHR6KTtcbiAgICAgICAgY29uc3QgcGFydHMgPSBmb3JtYXR0ZXIuZm9ybWF0VG9QYXJ0cyhkYXRlKTtcbiAgICAgICAgY29uc3QgW29mZnNldF0gPSBwYXJ0c1xuICAgICAgICAgICAgLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgPT09ICd0aW1lWm9uZU5hbWUnKVxuICAgICAgICAgICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHR6T2Zmc2V0ID0gdGhpcy5fZ2V0VGltZVpvbmVPZmZzZXRJbk1pbnMob2Zmc2V0KTtcbiAgICAgICAgY29uc3QgdHpPZmZzZXRNaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkgLSAoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpIC0gdHpPZmZzZXQpO1xuICAgICAgICBkYXRlLnNldE1pbnV0ZXModHpPZmZzZXRNaW51dGVzKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIHNhbWUoZGF0ZTEsIGRhdGUyKSB7XG4gICAgICAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgPT09IGRhdGUyLmdldFRpbWUoKTtcbiAgICB9XG4gICAgX3RvRGF0ZShpc29EYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShpc29EYXRlKTtcbiAgICB9XG4gICAgX2dldEZvcm1hdHRlcih0eikge1xuICAgICAgICBsZXQgZm9ybWF0dGVyID0gdGhpcy5fZm9ybWF0dGVyQ2FjaGUuZ2V0KHR6KTtcbiAgICAgICAgaWYgKCFmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICB0aW1lWm9uZTogdHosXG4gICAgICAgICAgICAgICAgLi4udGhpcy5fY29tbW9uRGF0ZVRpbWVGb3JtYXR0ZXJPcHRpb25zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9mb3JtYXR0ZXJDYWNoZS5zZXQodHosIGZvcm1hdHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlcjtcbiAgICB9XG4gICAgX2dldFRpbWVab25lT2Zmc2V0SW5NaW5zKGdtdFRpbWVab25lKSB7XG4gICAgICAgIGNvbnN0IFtzaWduLCAuLi5ob3Vyc01pbnV0ZXNdID0gZ210VGltZVpvbmUuc2xpY2UoMyk7XG4gICAgICAgIGNvbnN0IFtob3VycywgbWludXRlc10gPSBob3Vyc01pbnV0ZXMuam9pbignJykuc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3Qgc2lnbk11bHRpcGxpZXIgPSBzaWduID09PSAnKycgPyAxIDogLTE7XG4gICAgICAgIHJldHVybiBzaWduTXVsdGlwbGllciAqIChOdW1iZXIoaG91cnMpICogNjAgKyBOdW1iZXIobWludXRlcyB8fCAwKSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBOYXRpdmVEYXRlRW5naW5lIGFzIERhdGVFbmdpbmUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==