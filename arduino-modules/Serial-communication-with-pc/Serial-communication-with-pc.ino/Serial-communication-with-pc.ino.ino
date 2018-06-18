//Testing Serial Communication between Arduino and PC

String command;
char c;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
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
    else {
      command += c;
    }
  }
}

void executeCommand () {
  Serial.println("Executing Command = " + command);
  long n = command.toInt();
  Serial.println(n);

  if (n%2 == 0) {
    setPinLow(n/2);
  }
  else {
    setPinHigh(n/2 + 1);
  }
  command = "";
}


void setPinHigh (int pinNo) {
    pinMode(pinNo, OUTPUT);
    digitalWrite(pinNo, HIGH);
}

void setPinLow (int pinNo) {
    pinMode(pinNo, OUTPUT);
    digitalWrite(pinNo, LOW);
}


