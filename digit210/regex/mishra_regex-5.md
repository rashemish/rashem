# Dracula: A Dramatic Encoding

Find: `&` *Found 16 matches*

Replace: `&amp;` *Replaced each match*

Find: `^\s*CHAPTER\s+([IVXLCDM]+)\s*$` *Found 27 matches since there are 27 chapters in Dracula, I started with chapters since my regex to find the title included the title and the chapter titles*

Replace: `<chapter number="\1">` *Replaced each chapter title with it's roman numeral equilvalent*

Find: `^\s*([A-Z ]{5,})\s*$` *Found one match not intended, I only wanted to pull the title in the beggining of the text file**

Replace: `<title>\1</title>` *Wrapped this match with a title element*

Find: `^\s*([A-Z\s]+(?:’S)? JOURNAL)\s*$` *Found 8 matches, this expression locates each journal entry*

Replace: `<entry type="journal" author="\1">` *Replaced each match* 

Find: `(?<=\n)([^<>\n]+)(?=\n)` *Found 1867 matches for paragraphs (also including the date entries, I could not get my regex to work for the dates)*

Replace: `<p>\1</p>` *Wrapped each paragraph with a p element*
