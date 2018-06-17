#include <stdio.h>



int main (int n, char** args) {

    printf("Hello C ... \n");

    printf("printing %d argument(s) below...\n", n);

    for (int i=0; i<n; i++) {
        printf("%s\n", args[i]);
    }

    return 0;
}