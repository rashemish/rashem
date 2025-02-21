## Blithedale: An XML Encoding

Find: `&` *found none

Find: `<` *found none*

Find: `>` *found none*

Find: `\n{3,}` *found 35 two consecutive blank spaces*
Replace: `\n\n` *removed all 35 consecutive blank lines *

Find: `(\n\s*\n)` *found 930 blank lines to locate each block of text*
Replace: `</p>\n<p>` *replaced each bank space so each text block is wrapped in a paragraph element*

Find: `<p>([IVXLCDM]+\..+?)</p>` *found 29 chapter titles*
Replace: `<title>\1</title>` *marked each chapter title with title element*

Find: `<title>.+?,</title>` **
Replace: `<chapter>\n</chapter>\0` **
`\1`