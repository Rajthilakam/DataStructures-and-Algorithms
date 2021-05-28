#https://www.hackerrank.com/challenges/collections-counter/problem

import collections

numShoes = int(input())
shoes = collections.Counter(map(int,input().split()))
numCust = int(input())

total_income = 0

for i in range(numCust):
    size, price = map(int,input().split())
    if shoes[size]: 
        total_income += price
        shoes[size] -= 1

print (total_income)
