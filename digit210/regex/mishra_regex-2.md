## Encoding Shakespeare Sonnets 

Find: `^\s*([IVXLCDM]+)\s*$` *found 154 sonnets*
Replace: `<sonnet number="\1">`

Find: `^\s{2}(.*)$` *found 
Replace: `<line>\1</line>`

Find: `(\</line>\n)(?=<sonnet number=)` *found 154 sonnets and closed each sonnet*
Replace: `\1</sonnet>\n`

