---
slug: reading-a-csv-using-python
title: Reading a CSV using python
tags: [csv]
---

---

Given a csv file `file.csv` with the below format:

| First Column             | Second Column             |
| ------------------------ | ------------------------- |
| First Line First column  | First row Second column   |
| Second Line First column | Second Line Second column |

<br/>

It can be read using

### A list of dictionaries

```
import csv

with open('file.csv') as f:
    reader = csv.reader(f)
    data = list(reader)

print(data)
```

### Using [Pandas](https://pandas.pydata.org/)

```
import pandas as pd

data = pd.read_csv('file.csv', delimiter=',')

print(data)
```
