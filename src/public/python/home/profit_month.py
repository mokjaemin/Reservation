import matplotlib.pyplot as plt
import numpy as np
import os
import sys

def getName(month, year, total, electro, water, monthFee, parttime):
    x = list(map(int, month.split(",")))
    y = list(map(int, total.split(",")))
    print(x, y)
    plt.xlim([x[0], x[2]])
    
    plt.plot(x, y)
    plt.savefig('./src/views/images/test.png')

if __name__ == '__main__':
    getName(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7])

