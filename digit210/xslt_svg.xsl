<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:map="http://www.w3.org/2005/xpath-functions/map"
    version="3.0">
    
    <xsl:output method="xml" indent="yes"/>
    
    <xsl:template match="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="700" height="300">
            <xsl:variable name="text" select="string-join(//line[@type='dialogue'], ' ') => lower-case()"/>
            <xsl:variable name="tokens" select="tokenize($text, '\W+')"/>
            
            <xsl:variable name="count-murder" select="count($tokens[matches(., '^m\*?rder')])"/>
            <xsl:variable name="count-kill" select="count($tokens[matches(., '^k\*?ll')])"/>
            <xsl:variable name="count-gun" select="count($tokens[matches(., '^g\*?n')])"/>
            <xsl:variable name="count-police" select="count($tokens[matches(., '^police')])"/>
            
            <xsl:variable name="max" select="max(($count-murder, $count-kill, $count-gun, $count-police))"/>
            
            <xsl:variable name="words" as="map(xs:string, xs:integer)">
                <xsl:map>
                    <xsl:map-entry key="'m*rder'" select="$count-murder"/>
                    <xsl:map-entry key="'k*ll'" select="$count-kill"/>
                    <xsl:map-entry key="'g*n'" select="$count-gun"/>
                    <xsl:map-entry key="'police'" select="$count-police"/>
                </xsl:map>
            </xsl:variable>
            
            <xsl:for-each select="map:keys($words)">
                <xsl:variable name="word" select="."/>
                <xsl:variable name="count" select="map:get($words, $word)"/>
                <xsl:variable name="i" select="position()"/>
                <xsl:variable name="barWidth" select="if ($max = 0) then 0 else ($count div $max) * 500"/>
                <xsl:variable name="red" select="200 - round(($count div $max) * 150)"/>
                <xsl:variable name="color" select="concat('rgb(', $red, ',0,0)')"/>
                <xsl:variable name="y" select="50 + ($i - 1) * 50"/>
                
                <rect x="150" y="{$y}" width="{$barWidth}" height="30" fill="{$color}"/>
                <text x="10" y="{$y + 20}" font-family="sans-serif" font-size="14">
                    <xsl:value-of select="$word"/>
                </text>
                <text x="{160 + $barWidth}" y="{$y + 20}" font-family="sans-serif" font-size="12">
                    <xsl:value-of select="$count"/>
                </text>
            </xsl:for-each>
        </svg>
    </xsl:template>
    
</xsl:stylesheet>