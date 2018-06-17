//Testing Serial Communication between Arduino and PC

String command;
int commandLength = 0;
char c;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  //Serial.println("hi there...");

  
}

void loop() {
  // put your main code here, to run repeatedly:
 
}


void setPinHigh (int pinNo) {
    pinMode(pinNo, OUTPUT);
    digitalWrite(pinNo, HIGH);
}

void setPinLow (int pinNo) {
    pinMode(pinNo, OUTPUT);
    digitalWrite(pinNo, LOW);
}
