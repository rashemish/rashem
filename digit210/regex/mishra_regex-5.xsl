<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    exclude-result-prefixes="xs math"
    version="3.0">
    
    <xsl:template match="p">
        <p>
            <xsl:analyze-string select="." regex='“([^”]+)”'>
                <xsl:matching-substring>
                    <quote><xsl:value-of select="regex-group(1)"/></quote>
                </xsl:matching-substring>
                <xsl:non-matching-substring>
                    <xsl:value-of select="."/>
                </xsl:non-matching-substring>
            </xsl:analyze-string>
        </p>
    </xsl:template>
</xsl:stylesheet>
