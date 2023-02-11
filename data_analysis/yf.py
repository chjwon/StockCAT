# pip install yfinance --upgrade --no-cache-dir 
import yfinance as yf
from typing import List

# price_df = yf.download(
#     ['AAPL'],
#     start='2017-01-01',
#     end='2018-01-01',
#     interval='1mo').dropna().pct_change()[1:]
# print(price_df)

def get_df(tickerList: List[str], startDate, endDate, interval):
    df = yf.download(
        ['AAPL'],
        start=startDate,
        end=endDate,
        interval=interval).dropna().pct_change()[1:]
    return df

print(get_df(tickerList=['AAPL'],startDate='2017-01-01',endDate='2018-01-01',interval='1mo'))