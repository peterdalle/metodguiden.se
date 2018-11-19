# Metodguiden.se

[Metodguiden.se](http://metodguiden.se/) är en hemsida om grundläggande statistik och datavisualisering primärt för studenter inom medie- och kommunikationsvetenskap och journalistik på institutionen för journalistik, medier och kommunikation (JMG) på Göteborgs universitet.

Alla texter är skrivna i [RMarkdown](http://rmarkdown.rstudio.com/) och kompileras automatiskt med [bookdown](https://bookdown.org/) till HTML och EPUB. Grafik och analyser är skrivna i R. 

## Kompilera till HTML

```cmd
> build
```

Du kan också använda kommandot `build-all` för att kompilera alla tillgängliga format (HTML, PDF, EPUB).

## LaTeX

Följande LaTeX-paket behövs för att kompilera till PDF:

```tex
header-includes:
  - \usepackage[swedish]{babel}
```

Notera att det finns GIF-animationer och dessa måste plockas bort innan kompilering till PDF.