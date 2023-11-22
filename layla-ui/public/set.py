import os
import glob

dx = glob.glob('*.jpg')
for i, v in enumerate(dx):
    os.rename(v, str(i) + '.jpg')