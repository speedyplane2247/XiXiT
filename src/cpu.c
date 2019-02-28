/*
Memory:
1-255 : System Reversed
256-384: Memory I/O 
Detailed:
10: System State
20: Latest OpCode
260: Math Input 1 (8-bit)
261: Math Input 2 (8-bit)
265: Math Input (4-bit)
264: Math Output (4-bit)
262: Math OutPut (8-bit)
*/
/*
Calls:
RAM.set() : Sets a RAM address
RAM.get() : Gets a RAM address
CPU Calls:
CPU.add() : Grabs RAM, and output ram1 + ram2.
CPU.addn() : Debug usage, adds two words and returns it.
CPU.exit() : Disables the CPU
*/