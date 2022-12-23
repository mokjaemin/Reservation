import matplotlib.pyplot as plt
import numpy as np
import os
import sys

def getName(total, month):
    print(total + " : " + month)
    print(os.path.realpath(__file__))
    x = np.arange(1,10)
    y = x*1
    plt.plot(x,y)
    plt.savefig('./src/views/images/test.png')

if __name__ == '__main__':
    getName(sys.argv[1], sys.argv[2])

