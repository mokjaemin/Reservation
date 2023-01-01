import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import numpy as np
import os
import sys
import pandas as pd

def year_total(total, month, year):
    year = year.iloc[0]
    month = list(month.to_numpy())
    total = list(total.to_numpy())
    plt.figure(figsize=(12, 8))
    plt.plot(month, total)
    plt.xlabel("Month", labelpad=3)
    plt.ylabel("Money", labelpad=3)
    plt.gca().xaxis.set_major_formatter(mticker.FormatStrFormatter('%d'))
    plt.gca().yaxis.set_major_formatter(mticker.FormatStrFormatter('%d won'))
    plt.title(str(year) + " Total")
    plt.savefig('./src/views/images/total.png')

def getName(month, year, total, electro, water, monthFee, parttime):

    year = list(map(int, year.split(",")))
    month = list(map(int, month.split(",")))
    total = list(map(int, total.split(",")))
    electro = list(map(int, electro.split(",")))
    water = list(map(int, water.split(",")))
    monthFee = list(map(int, monthFee.split(",")))
    parttime = list(map(int, parttime.split(",")))
    data = pd.DataFrame(zip(year, month, total, electro, water, monthFee, parttime), columns= ['year', 'month', 'total', 'electro', 'water', 'monthFee', 'parttime'])
    data_2022 = data[data['year'] == 2022].sort_values(by='month')
    data_2021 = data[data['year'] == 2021].sort_values(by='month')
    
    year_total(data_2022['total'], data_2022['month'], data_2022['year'])



if __name__ == '__main__':
    getName(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7])



# plt.figure(figsize=(12, 8))
# plt.plot(data_2022['month'], data_2022['total'])
# plt.plot(data_2021['month'], data_2021['total'], 'g')
# plt.plot(x, y1, label = 'total')
# plt.plot(x, y2, 'x')
# plt.plot(x, y2, label = 'electro')
# plt.plot(x, y3, '^')
# plt.plot(x, y3, label = 'water')
# plt.plot(x, y4, '.')
# plt.plot(x, y4, label = 'monthFee')
# plt.plot(x, y5, '^')
# plt.plot(x, y5, label = 'partTime')    
# plt.axis([9, 13, 0, 1500000])
# plt.gca().xaxis.set_major_formatter(mticker.FormatStrFormatter('%d'))
# plt.gca().yaxis.set_major_formatter(mticker.FormatStrFormatter('%d won'))
# plt.xlabel("Month", labelpad=2)
# plt.ylabel("Money", labelpad=2)
# # plt.legend()
# plt.title("Currently profit and expenses for 3 months")
# plt.savefig('./src/views/images/total.png')