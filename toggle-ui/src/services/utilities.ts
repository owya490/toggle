import moment from "moment";

/**
 * @param {Lesser Date of 2} d1
 * @param {Greater Date of 2} d2
 * @param {The Unit of Difference in integers} unit
 */
export function dateDiff(d1: Date, d2: Date, unit: string): number {
    const millisDiff = d2.getTime() - d1.getTime();
    return millisToUnit(millisDiff, unit);
}

export function millisToUnit(millis: number, unit: string): number {
    const momentMillis = moment.duration(millis);
    switch (unit) {
        case "Y": {
            return momentMillis.asYears();
        }
        case "M": {
            return momentMillis.asMonths();
        }
        case "W": {
            return momentMillis.asWeeks();
        }
        case "d": {
            return momentMillis.asDays();
        }
        case "h": {
            return momentMillis.asHours();
        }
        case "m": {
            return momentMillis.asMinutes();
        }
        case "s": {
            return momentMillis.asSeconds();
        }
        default: {
            return 0;
        }
    }
}
