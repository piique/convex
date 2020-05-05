import sys
text = sys.argv[1]

with open('arquivo.txt', 'w') as arquivo:
    arquivo.write(text + '\n')
    print('finalizou o script em python')
    # arquivo.write('Texto que vai na segunda linha.\n')
