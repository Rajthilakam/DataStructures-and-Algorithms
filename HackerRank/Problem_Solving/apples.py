#Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
#Using the information given below, determine the number of apples and oranges that land on Sam's house.

#s: integer, starting point of Sam's house location.
#t: integer, ending location of Sam's house location.
#a: integer, location of the Apple tree.
#b: integer, location of the Orange tree.
#apples: integer array, distances at which each apple falls from the tree.
#oranges: integer array, distances at which each orange falls from the tree.

print(sum([1 for x in apple if (x + a) >= s and (x + a) <= t]))
print(sum([1 for x in orange if (x + b) >= s and (x + b) <= t]))