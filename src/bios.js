/*
BIOS.js
BIOS.js allows you to set some read-only strings the CPU will follow. (RAM size, HDD info, and others)
*/
// BIOS Objects
var machineData = new Object()
var BIOS = new Object()
// Machine Data Integers
machineData.ramWORD = 8
machineData.registerWORD = 32
machineData.driveSize = 16
// Misc BIOS features
BIOS.allowChanges = 0
BIOS.allowEmulatedChanges = 0
