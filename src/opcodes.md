# Here is a list of OpCodes.
## Opcode 1
Opcode 1 occurs when a memory value is written / read bigger than it can receive.
## Opcode 2
Opcode 2 occurs when a value attempts to buffer overflow RAM addresses.
## Opcode 55
Opcode 55 occurs when something is trying to write to a direct sector with an invalid size.
## Opcode 56
Opcode 56 occurs when a file is read with a larger sector size than the BIOS allows.
## Opcode 250
Opcode 250 occurs when something isn't implemented.
## Opcode 251
Opcode 251 occurs when a general error happens.
## Opcode 800
Opcode 800 occurs when attempting to write to a read-protected BIOS image.
## Opcode 801
Opcode 801 occurs when attempting to emulate a BIOS image, but the BIOS doesn't allow.
## Opcode 999
Opcode 999 occurs when the kernel  / BIOS / RAM is modified to upload a value bigger than the system can support. This is usually resulted from buffer overflows, attempts of those, corrupted RAM, and other critical things. This can also come from malware that has infiltrated the RAM.