#Brute Force Time complexity o(n^2) space o(1)
arr = [-1,9,-5,-2,3]

def sumarray(arr,k):
    max_sum = arr[0]
    for i in range(len(arr)-k+1):
        curr_sum = 0
        for j in range(i,i+k):
            
            curr_sum+=arr[j]
        
        if (max_sum  < curr_sum):
            max_sum = curr_sum
    print (max_sum)            
    return max_sum        

k=3      
sumarray(arr,k)      