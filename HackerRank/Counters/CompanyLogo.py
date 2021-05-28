#
from collections import OrderedDict
import collections
import itertools
str = 'ybzhgdrefvdnjyfoswjuslbpuvtvfgzvnpayvjwzxk'

dict_str = collections.Counter(str.strip()) 
filterd_dict = {k:v for k,v in dict_str.items() if v >= 2}
orderdict = OrderedDict(filterd_dict)
print(orderdict)

#sorted_dict = sorted(filterd_dict,key=filterd_dict.get,reverse=True)   
#for each in sorted_dict:
    #print (each,filterd_dict[each])