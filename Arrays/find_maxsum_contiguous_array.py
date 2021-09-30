#Time complexity o(n^2)
arr = [-1,-4,-5,-2]

def sumarray(arr):
    max_sum = arr[0]
    for i in range(len(arr)):
        curr_sum = arr[i]
       
        j=i+1
        while j<=len(arr):
             
          if j == len(arr):
            break         
          curr_sum = curr_sum+arr[j]
          j+=1
         
          if(max_sum < curr_sum):
              max_sum = curr_sum
        
            
    print (max_sum)        
    return max_sum
       
      
sumarray(arr)  

#using FORLOOP TIME COMPLEXITY (O(N^2))

arr = [-1,-4,-5,-2]

def sumarray(arr):
    max_sum = arr[0]
    for i in range(len(arr)):
        curr_sum = arr[i]
        for j in range (i+1,len(arr)):
            curr_sum+=arr[j]
            if (max_sum <= curr_sum):
                max_sum = curr_sum
    return max_sum        
      
sumarray(arr)    