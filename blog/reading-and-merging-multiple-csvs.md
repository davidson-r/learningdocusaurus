---
slug: reading-and-merging-multiple-csvs
title: Reading and merging multiple CSVs
tags: [csv]
---

---

Given two files named `file1.csv` and `file2.csv` with the below format:

| First Column             | Second Column             |
| ------------------------ | ------------------------- |
| First Line First column  | First row Second column   |
| Second Line First column | Second Line Second column |

<br/>

It can be read using

### A list of dictionaries

```
import csv

with open('file1.csv') as f:
    reader = csv.reader(f)
    file1 = list(reader)

with open('file2.csv') as f:
    reader = csv.reader(f)
    file2 = list(reader)

```

### Merge lists

```
file = file1 + file2
```
