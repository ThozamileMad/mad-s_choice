num = 5
solution = 2
index_num = 0
lst = [num + 1 for num in range(num)][2:]
while len(lst) != 0:
    lst_value = lst[index_num]
    solution *= lst_value
    index_num += 1
    

print(solution)
