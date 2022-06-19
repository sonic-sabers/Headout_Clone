#include<iostream>
#include<ctype.h>
#include<stdio.h>
#include<string>
using namespace std;
struct street
{
 int B,E,L;df
 char *str1;d
};
int main()
{
    long long int D,I,S,V,F;
    cin>>D>>I>>S>>V>>F;
    struct street st[5];
    for(int i=0;i<5;i++)
    {
        cin>>st[i].B;
        cin>>st[i].E;
        gets(st[i].str1);
        cin>>st[i].L;
    }
        return 0;
}


  
  
