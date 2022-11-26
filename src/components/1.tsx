const Component1 = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto text-center">
          <h1 className="m-5 mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            Microproccesor,Microcontroller,Interfacing techniques
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
    </div>
  );
};

export default Component1;
