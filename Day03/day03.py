gamma_str = ''
epsilon_str = ''

read_file = open('input03.txt', 'r', encoding='utf-8')
diagnostics = list(map(str, read_file.read().split('\n')))
print(diagnostics)

diag_len = len(diagnostics[0])
print(diag_len)

for i in range(0, diag_len):
    count_one, count_zero = 0, 0
    for diag in diagnostics:
        if '1' in diag[i]:
            count_one += 1
        else:
            count_zero += 1
    if count_one > count_zero:
        gamma_str += '1'
        epsilon_str += '0'
    else:
        gamma_str += '0'
        epsilon_str += '1'
print(int(gamma_str, 2) * int(epsilon_str, 2))
