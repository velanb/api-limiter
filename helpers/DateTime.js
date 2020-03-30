class DateTime extends Date {
    constructor(timeZoneOffset) {
        super();
        this.timeZoneOffset = timeZoneOffset;
    }

    getFormatedDate() {
        return this.toJSON().slice(0, 10)
    }

    getFormatedTime() {
        let currentOffset = this.getTimezoneOffset();
        let zoneTime = new DateTime(this.getTime() + (this.timeZoneOffset + currentOffset) * 60000);
        return zoneTime.getHours() + ":" + zoneTime.getMinutes() + ":" + zoneTime.getSeconds();
    }

    static getTimeZoneOffsetValue(zone) {

    }
}

module.exports = DateTime;