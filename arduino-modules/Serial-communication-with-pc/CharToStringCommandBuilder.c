/*
 * In my pc to arduino communication, each command will be 3 character long
*/
#include <stdio.h>

char command[4] = { '\0' };
int len = -1;
long commandNum = 0;

int main () {
    //char garbage;

    do {
        printf("\nEnter next character that will be read from serial port: ");
        scanf(" %c", &command[++len]);
        //scanf("%c", &garbage);
        //fflush(stdin);
    }
    while (command[len] != '$');

    command[len] = '\0';

    printf("\n And the command is: %s\n", command);

    return 0;
}