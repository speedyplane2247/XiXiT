/*
XiXiT | GNU License
*/
// Important Processor Objects
var CPU = new Object()
var ram = new Object()
var machineData = new Object()
var RAM = new Object()
// Machine Data Integers
machineData.ramSize = 256
machineData.ramWORD = 8
machineData.register = 16
machineData.registerWORD = 32
// Memory Init
RAM.a1 = Array []
RAM.r1 = Array []
RAM.aCurr = 0
RAM.rCurr = 0
for (RAM.aCurr = 0; RAM.aCurr < machineData.ramSize; RAM.aCurr++) {
  RAM.a1[RAM.aCurr] = ""
}
for (RAM.rCurr = 0; RAM.rCurr < machineData.register; RAM.rCurr++) {
  RAM.r1[RAM.rCurr] = ""
}
// CPU Opcode
function opCode(code) {
alert("Failure on opCode #" + code + ".")
}
// Memory Add
RAM.set = function(type, address, value) {
  if (value.length > 8) {
    
  }
}
RAM.get = function(type, address) {
  
}
// Machine CPU Functions
CPU.add = function() {
  
}
CPU.addn = function(word1, word2) {
  
}
