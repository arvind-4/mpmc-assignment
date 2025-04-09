const AssignmentCode = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto text-center">
          <h1 className="m-5 mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            Microproccesor, Microcontroller, Interfacing techniques
          </h1>
        </div>

        <br />
        <br />
        <div className="mx-auto text-center">
          <h1 className="m-5 mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
            Assignment 1
          </h1>
        </div>

        <div className="mx-auto items-center p-5 w-full">
          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              1. Draw a flowchart and write an 8086 ALP to detect a word is a
              palindrome or not using string instructions. If palindrome it
              should store FFh in location 1200h. Else 00h in the location 1200h
            </p>
          </div>
          <img
            className="mx-auto p-5 h-100 w-54"
            src="/flowchart.png"
            alt="dashboard image"
          />

          <div className="mx-auto">
            <p className="mx-auto items-center font-dark text-gray-900 md:text-lg dark:text-gray-400">
              MAIN PROC FAR
              <br />
              MOV AX, @DATA
              <br />
              MOV DS, AX
              <br />
              MOV AH, 4CH
              <br />
              INT 21H
              <br />
              MAIN ENDP
              <br />
              MOV SI,OFFSET STRING <br />
              MOV AX, [SI]
              <br />
              CMP AL, '$'
              <br />
              JE LABEL1
              <br />
              INC SI
              <br />
              JMP LOOP1
              <br />
              LABEL1 :<br />
              MOV DI,OFFSET STRING
              <br />
              <br />
              DEC SI
              <br />
              LOOP2 :<br />
              CMP SI, DI
              <br />
              JL OUTPUT1
              <br />
              MOV AX,[SI]
              <br />
              MOV BX, [DI]
              <br />
              CMP AL, BL
              <br />
              JNE OUTPUT2
              <br />
              DEC SI
              <br />
              INC DI
              <br />
              JMP LOOP2
              <br />
              LEA DX,STRING1
              <br />
              MOV AH, 09H
              <br />
              INT 21H
              <br />
              RET
              <br />
              MOV AH,09H
              <br />
              INT 21H
              <br />
              RET
              <br />
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              2. Identify the addressing modes of the instructions listed below
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              i. TEST [BX][DI], CX - Register indirect mode <br />
              ii. JMP 1000H:4050H -Relative Addressing
              <br />
              iii. AND AX,0007H -Immediate Addressing
              <br />
              iv. OUT 03H, AL - Direct Addressing
              <br />
              v. MUL BX - String Addresing
              <br />
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              3. Analyze the below program and express the operation of the
              program with sample data
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              MOV AX, 1234H
              <br />
              MOV BX,0100 H <br />
              MUL BX
              <br />
              MOV [1200], AX
              <br />
              MOV [1202], DX
              <br />
              HLT
              <br />
              Operation : It performs Multiplication operation <br />
              By Multiplying both 1234H and 0100H we get 23400H
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <br />
        <br />
        <div className="mx-auto text-center">
          <h1 className="m-5 mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
            Assignment 2
          </h1>
        </div>

        <div className="mx-auto items-center p-5 w-full">
          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              1. Write an ALP to copy the value 12H into RAM memory location 50H
              to 5FH using <br />
              a) Direct addressing mode
              <br />
              b) Register indirect addressing mode without a loop, and
              <br />
              c) Register indirect addressing mode with a loop
              <br />
            </p>
          </div>

          <div className="mx-auto">
            <p className="mx-auto items-center font-dark text-gray-900 md:text-lg dark:text-gray-400">
              a) Direct addressing mode
              <br />
              MOVA, #12h; load A with value 12h
              <br />
              MOV 50h, A ; copy A to RAM location 50h
              <br />
              MOV 51h, A ; copy A to RAM location 51h
              <br />
              MOV 52h, A ; copy A to RAM location 52h
              <br />
              MOV 53h, A ; copy A to RAM location 53h
              <br />
              MOV 5fh, A ; copy A to RAM location 5fh
              <br />
              <br />
              b) Register indirect addressing mode without a loop
              <br />
              MOVA, #12h; load A with value 55h
              <br />
              MOVR0, #50h; load the pointer. R0 = 50h
              <br />
              MOV@R0, A; copy A to RAM location R0 points to
              <br />
              INCR0; increment pointer. Now R0 = 51h
              <br />
              MOV@R0, A; copy A to RAM location R0 points to
              <br />
              INCR0; increment pointer. Now R0 = 52h
              <br />
              MOV@R0, A; copy A to RAM location R0 points to
              <br />
              INCR0; increment pointer. Now R0 = 53h
              <br />
              MOV@R0, A; copy A to RAM location R0 points to
              <br />
              INCR0; increment pointer. Now R0 = 54h
              <br />
              MOV@R0, A; copy A to RAM location R0 points to
              <br /> <br />
              c) Register indirect addressing mode with a loop
              <br />
              MOVA, #12h; A = 12h
              <br />
              MOVR0, #50h; load pointer. R0 = 50h, RAM add.
              <br />
              MOVR2, #05; load counter, R2 = 5<br />
              AGAIN: MOV@R0, A; copy 12A to RAM location R0 points to
              <br />
              INC R0; increment R0 pointer
              <br />
              DJNZR2, AGAIN; loop until counter = zero
              <br />
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              2. Write an ALP to get the x value from PORT1 and send (x+5)*2 to
              PORT2, continuously.
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              ORG 0; //ROM locations starts from 0000H
              <br />
              MOV DPTR, #300H; //DPTR is a pointer starting from 300H
              <br />
              MOV A, #0FFH; //Make P1 as an INPUT
              <br />
              MOV P1, A;
              <br />
              Back: MOV A, P1; //get x from P1
              <br />
              MOVC A, @A+DPTR; //get x2
              <br />
              MOV P2, A<br />
              SJMP Back
              <br />
              ORG 300H
              <br />
              Table: DB 0, 1, 4, 9, 16, 25, 36, 49, 64, 81
              <br />
              END
              <br />
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              3. Design an 8051 based system to display “SRMIST” in 16x2 LCD
              display.
            </p>
          </div>

          <div className="my-5">
            <p className="font-dark text-gray-900 md:text-lg dark:text-gray-400">
              MOV A,#38H // Use 2 lines and 5x7 matrix
              <br />
              ACALL CMND
              <br />
              MOV A,#0FH // LCD ON, cursor ON, cursor blinking ON
              <br />
              ACALL CMND
              <br />
              MOV A,#01H //Clear screen
              <br />
              ACALL CMND
              <br />
              MOV A,#06H //Increment cursor
              <br />
              ACALL CMND
              <br />
              MOV A,#82H //Cursor line one , position 2<br />
              ACALL CMND
              <br />
              MOV A,#3CH //Activate second line
              <br />
              ACALL CMND
              <br />
              MOV A,#49D
              <br />
              ACALL DISP
              <br />
              MOV A,#54D
              <br />
              ACALL DISP
              <br />
              MOV A,#88D
              <br />
              ACALL DISP
              <br />
              MOV A,#50D
              <br />
              ACALL DISP
              <br />
              MOV A,#32D
              <br />
              ACALL DISP
              <br />
              MOV A,#76D
              <br />
              ACALL DISP
              <br />
              MOV A,#67D
              <br />
              ACALL DISP
              <br />
              MOV A,#68D
              <br />
              ACALL DISP
              <br />
              MOV A,#0C1H //Jump to second line, position 1<br />
              ACALL CMND
              <br />
              MOV A,#67D
              <br />
              ACALL DISP
              <br />
              MOV A,#73D
              <br />
              ACALL DISP
              <br />
              MOV A,#82D
              <br />
              ACALL DISP
              <br />
              MOV A,#67D
              <br />
              ACALL DISP
              <br />
              MOV A,#85D
              <br />
              ACALL DISP
              <br />
              MOV A,#73D
              <br />
              ACALL DISP
              <br />
              MOV A,#84D
              <br />
              ACALL DISP
              <br />
              MOV A,#83D
              <br />
              ACALL DISP
              <br />
              MOV A,#84D
              <br />
              ACALL DISP
              <br />
              MOV A,#79D
              <br />
              ACALL DISP
              <br />
              MOV A,#68D
              <br />
              ACALL DISP
              <br />
              MOV A,#65D
              <br />
              ACALL DISP
              <br />
              MOV A,#89D
              <br />
              ACALL DISP
              <br />
              HERE: SJMP HERE
              <br />
              CMND: MOV P1,A
              <br />
              CLR P3.5
              <br />
              CLR P3.4
              <br />
              SETB P3.3
              <br />
              CLR P3.3
              <br />
              ACALL DELY
              <br />
              RET
              <br />
              DISP:MOV P1,A
              <br />
              SETB P3.5
              <br />
              CLR P3.4
              <br />
              SETB P3.3
              <br />
              CLR P3.3
              <br />
              ACALL DELY
              <br />
              RET
              <br />
              DELY: CLR P3.3
              <br />
              CLR P3.5
              <br />
              SETB P3.4
              <br />
              MOV P1,#0FFh
              <br />
              SETB P3.3
              <br />
              MOV A,P1
              <br />
              JB ACC.7,DELY
              <br />
              CLR P3.3
              <br />
              CLR P3.4
              <br />
              RET
              <br />
              END
              <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssignmentCode;
