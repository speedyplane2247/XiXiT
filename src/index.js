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
RAM.a1 = Array [0,0]
RAM.r1 = Array [0,0]
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
  if (value.length > 8 && type == "a") {
    opCode(1)
    CPU.exit()
  }
   if (value.length > 32) {
   opCode(1)
     CPU.exit()
   }
  if (type == "r") {
    RAM.r1[address] = value
  }
  if (type == "a") {
    RAM.a1[address] = value
  }
  
}
RAM.get = function(type, address) {
if (type == "a") {
if (RAM.a1[address].length > 8) {
opCode(2)
opCode(1)
opCode(999)
} else {
return RAM.a1[address]
}

}

if (type == "r") {
    if (RAM.r1[address].length > 32) {
    opCode(2)
    opCode(1)
    opCode(999)
    } else {
    return RAM.r1[address]
    }
} 
}
// Machine CPU Functions
CPU.add = function() {
  
}
CPU.addn = function(word1, word2) {
  
}
CPU.exit = function() {

}
