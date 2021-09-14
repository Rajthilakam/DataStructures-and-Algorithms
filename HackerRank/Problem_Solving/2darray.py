import math
import os
import random
import re
import sys



if __name__ == '__main__':

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))
        


maxnumber = 0

for i in range(4):
    for j in range(4):
        a = arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
    
        if (maxnumber < a or (i==0 and j==0)):
            maxnumber = a
print (maxnumber)            
            