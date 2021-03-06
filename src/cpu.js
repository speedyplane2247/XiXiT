/*
XiXiT | GNU License
*/
// Important Processor Objects
//RAM.set("a",10,"preinit")
var CPU = new Object()
var ram = new Object()
var RAM = new Object()
var subCPU = new Object()
var HDD = new Object() 
//RAM.set("a",10,"init")
// Temp Registers (Sub-CPU)
subCPU.r1 = 0
subCPU.r2 = 0
subCPU.r3 = 0
subCPU.r4 = 0
// Memory Init
//RAM.set("a",10,"preram")
RAM.a1 = Array [0,0]
RAM.r1 = Array [0,0]
RAM.set("a",10,"ram")
RAM.aCurr = 0
RAM.rCurr = 0
for (RAM.aCurr = 0; RAM.aCurr < machineData.ramSize; RAM.aCurr++) {
  RAM.a1[RAM.aCurr] = ""
}
for (RAM.rCurr = 0; RAM.rCurr < machineData.register; RAM.rCurr++) {
  RAM.r1[RAM.rCurr] = ""
}
RAM.set("a",10,"postram")
// CPU Opcode
function opCode(code) {
    RAM.set("a",20,toString(code))
    if (BIOS.opCodeEnabled == 1) { 
        RAM.set("a",10,"opcode")
alert("Failure on opCode #" + code + ".")
    }
    if (BIOS.opCodeHang == 1) {
        RAM.set("a",10,"hungopcd")
    alert("Opcode caused system hang.")
    CPU.exit()
    }
}
// Memory Add
RAM.set = function(type, address, value) {
  if (value.length > machineData.ramSize && type == "a") {
    opCode(1)
    CPU.exit()
  }
   if (value.length > machineData.registerWORD) {
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
if (RAM.a1[address].length > machineData.ramSize) {
opCode(2)
opCode(1)
opCode(999)
} else {
return RAM.a1[address]
}

}

if (type == "r") {
    if (RAM.r1[address].length > machineData.registerWORD) {
    opCode(2)
    opCode(1)
    opCode(999)
    } else {
    return RAM.r1[address]
    }
} 
}
// Machine CPU Functions
RAM.set("a",10,"rdy@fnsh")
CPU.add = function() {
    subCPU.r1 = RAM.get("a", 260)
    subCPU.r2 = RAM.get("a", 261)
    subCPU.r3 = subCPU.r1 + subCPU.r2
    subCPU.r4 = "finished"
    RAM.set("r", 262, subCPU.r3)
}
CPU.addn = function(word1, word2) {
  return word1 + word2
}
CPU.exit = function() {
    RAM.set("a",10,"hung")
opCode(50)
for (subCPU.r1 = 0; subCPU.r1 = 1; subCPU.r1 = 0) {
document.write("cpu failed. shutdown")

}
RAM.set("a",10,"cpuhung;")
}
CPU.sub = function() {
    subCPU.r1 = RAM.get("a", 260)
    subCPU.r2 = RAM.get("a", 261)
    subCPU.r3 = subCPU.r1 - subCPU.r2
    subCPU.r4 = "finished"
    RAM.set("r", 262, subCPU.r3)
}
CPU.subn = function(word1, word2) {
    return word1 + word2
}    
CPU.multi = function() {
    subCPU.r1 = RAM.get("a", 260)
    subCPU.r2 = RAM.get("a", 261)
    subCPU.r3 = subCPU.r1 * subCPU.r2
    subCPU.r4 = "finished"
    RAM.set("r", 262, subCPU.r3)
}
CPU.multin = function(word1, word2) {
return word1 * word2
}
CPU.div = function() {
    subCPU.r1 = RAM.get("a", 260)
    subCPU.r2 = RAM.get("a", 261)
    subCPU.r3 = subCPU.r1 / subCPU.r2
    subCPU.r4 = "finished"
    RAM.set("r", 262, subCPU.r3)
}
CPU.divn = function() {
return word1 / word2
}
CPU.if = function() {
}
CPU.ifn = function() {

}

// Storage Functions
HDD.a1 = Array [0,0,0,0]
HDD.set = function(address, value) {
    if (value.length < machineData.driveSize) {
HDD.a1[address] = value
    } else {
    opCode(55)
    }
}
HDD.get = function(address) {
subCPU.r1 = HDD.a1[address]
if (subCPU.r1.length > machineData.driveSize) { 
opCode(55)
opCode(56)
} 
else 
{
return subCPU.r1
}
}
// BIOS Emulation
BIOS.write = function (file) {
if (BIOS.allowChanges == 1) {
opCode(250)
} 
else 
{
opCode(800)
}
}
BIOS.emulate = function (file) {
if (BIOS.allowEmulatedChanges == 1) {
document.write(`<script src="`+file+`"></script>`)
} 
else {
opCode(801)
} 
}
// 