<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:math="http://www.w3.org/2005/xpath-functions/math"
    exclude-result-prefixes="xs math"
    version="3.0">
    
    <xsl:template match="@*|node()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    <xsl:template match="sp[count(*) = count(info)]">
        <action>
            <xsl:apply-templates/>
        </action>
    </xsl:template>
    
    <xsl:template match="sp">
        <sp>
            <xsl:analyze-string select="." regex="^([^:]+):(.*)">
                <xsl:matching-substring>
                    <speaker><xsl:value-of select="regex-group(1)"/></speaker>:<xsl:value-of select="regex-group(2)"/>
                </xsl:matching-substring>
                <xsl:non-matching-substring>
                    <xsl:value-of select="."/>
                </xsl:non-matching-substring>
            </xsl:analyze-string>
        </sp>
    </xsl:template>
</xsl:stylesheet>