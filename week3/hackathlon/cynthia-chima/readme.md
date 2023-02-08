## Video ##
https://www.loom.com/share/ef238148af794e8292bd24e7976304fc

## Git ##
https://github.com/Soobhug/DI_Bootcamp


## COMMENTS ##
- Functions 'setAlarmTime' & 'setAlarm' are set in a sub scope of the setInterval, thus are RE-declared on every execution of the interval.
- Also functions 'setAlarmTime' & 'setAlarm' are executed directly after declaration.
- In the html file element '<input onchange="SetAlarmTime(this.value)" name="alarmTime" type="datetime-local">' binds the onchange event to the 'SetAlarmTime' function with an uppercase 'S' which doesn't exists.
- The alarm timeout should be cleared before setting it up again: 'clearTimeout(alarmTimeout)'