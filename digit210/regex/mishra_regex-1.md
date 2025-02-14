## Remixing Movie Data Into XML

Find:`&` *found 315* 
Replace with: `&amp;`

Find: `<` *found none* 

Find: `>` *found none* 

Find: `^(.*)$` *found 25095* 
Replace with: `<movie>\1</movie>`

Find: `<movie>(.*?)\t` *found 25095 movie titles*
Replace: `<movie>\n    <title>\1</title>\n`

Find: `(\d{4})\t` *found 25094 years (most likely excluding the sample)*
Replace: `<date>\1</date>\n`

Find: `"([A-Za-z\s,]+)"\t|([A-Za-z]+)\t` *found 25096, I think the two extra locations are the samples because I included locations wrapped by quotes.*
Replace: `<location>\1\2</location>\n`

Find: `(\d+)\s*min` *found 24,546 times, I will have to do a different regex for the movies that have N/A*
Replace: `<time unit="min">\1</time>`

Find: `N/A` *found 549 times registered as N/A*
Replace: `<time unit="min">Unknown</time>`
