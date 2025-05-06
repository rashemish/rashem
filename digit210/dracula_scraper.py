import requests
from bs4 import BeautifulSoup

url = 'https://www.gutenberg.org/cache/epub/345/pg345-images.html'

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

chapter_divs = soup.find_all('div', class_='chapter')

with open('dracula_clean.txt', 'w', encoding='utf-8') as f:
    for chapter in chapter_divs:

        header = chapter.find(['h2', 'h3'])
        if header:
            f.write(header.get_text(strip=True) + '\n\n')

        for p in chapter.find_all('p'):
            text = p.get_text(strip=True)
            f.write(text + '\n\n')

print("✅ Dracula text has been saved to 'dracula_clean.txt'")

