#include <stdio.h>

int mede(char str[100]){  //calcua o tamanho da string
    int para = 1;
    int i = 0;
    int tamanho = 0;
    
    while(para){
        if(str[i] == '\0'){
            para = 0;
        } else {
            tamanho++;
            i++;
        }
        
    }
    return tamanho-1;
}

void inverter(char texto[]){     //coloca o conteúdo da variável de entrada em uma variável auxiliar, e então reinjeta na variável de entrada de maneira cruzada
    int tam = mede(texto);
    char auxiliar[100];
    int compr = 0;

    for(int c=0; c<=tam-1; c++){
        auxiliar[c] = texto[c];
    }

    compr = tam-1; 
    for (int cc=0; cc<tam; cc++){
        texto[cc] = auxiliar[compr];
        compr--; 
    }

}


int main(void){
    char string[100];
    puts("digite uma frase para ser invertida:");
    fgets(string, sizeof(string), stdin);
    inverter(string);
    puts(string);
}