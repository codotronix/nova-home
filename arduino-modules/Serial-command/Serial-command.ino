String command;
int commandLength = 0;
char c;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  while(Serial.available()) {
    c = Serial.read();

    //Command will be terminated with $
    if(c == '$') {
      Serial.println("$ found, ending command...");
      executeCommand(command);
      command = "";
    }
    else {
      command += c;
      commandLength++;
    }
    
    //Or command will be of max length 3 (i.e. total 999 + 0 commands possible)
    //else if ()
  }
}

void executeCommand (String command) {
  Serial.println("Executing command = " + command);
}
