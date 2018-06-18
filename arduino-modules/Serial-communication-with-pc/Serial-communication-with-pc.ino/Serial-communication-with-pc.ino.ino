//Testing Serial Communication between Arduino and PC

String command;
int commandLength = 0;
char c;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  while (Serial.available()) {
    
    c = Serial.read();

    //The command must terminate with $
    if (c == '$') {
      Serial.println("$ terminated command found...");
      executeCommand();
    }
    //Max Command length should be 3, So I get 999+000 = 1000 commands... more than Enough for me
    else if (commandLength == 2) {
      command += c;
      Serial.println("Length(3) terminated command found...");
      executeCommand();
    }
    else {
      command += c;
      commandLength++;
    }

//    if (int(c) % 2 == 0) {
//      Serial.println("Even");
//    }
//    else {
//      Serial.println("Odd");
//    }
    
    //delay(1000);
  }
}

void executeCommand () {
  Serial.println("Executing Command = " + command);
  long n = command.toInt();
  Serial.println(n);
  switch (n) {
    case 13:
      setPinHigh(8);
      break;
    case 14:
      setPinLow(8);
      break;
    case 15:
      setPinHigh(10);
      break;
    case 16:
      setPinLow(10);
      break;
    case 17:
      setPinHigh(11);
      break;
    case 18:
      setPinLow(11);
      break;
    case 19:
      setPinHigh(12);
      break;
    case 20:
      setPinLow(12);
      break;
    case 21:
      setPinHigh(13);
      break;
    case 22:
      setPinLow(13);
      break;    
  }
  
  command = "";
  commandLength = 0;
}


void setPinHigh (int pinNo) {
    pinMode(pinNo, OUTPUT);
    digitalWrite(pinNo, HIGH);
}

void setPinLow (int pinNo) {
    pinMode(pinNo, OUTPUT);
    digitalWrite(pinNo, LOW);
}

