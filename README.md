# Metodguiden.se

[Metodguiden.se](http://metodguiden.se/) är en hemsida om grundläggande statistik och datavisualisering primärt för studenter inom medie- och kommunikationsvetenskap och journalistik på institutionen för journalistik, medier och kommunikation (JMG) på Göteborgs universitet.

Alla texter är skrivna i [RMarkdown](http://rmarkdown.rstudio.com/) och kompileras automatiskt med [bookdown](https://bookdown.org/) till HTML och EPUB. Grafik och analyser är skrivna i R. 

## Kompilera

Använd kommandot `build` för att kompilera (med `knitr`) till HTML. Ange ett argument om du vill växla utdatafil, exempelvis `build html` (standard), `build epub` eller `build pdf`.

Du kan också använda `build-all` för att kompilera till alla tillgängliga format (HTML, PDF och EPUB).

Vissa avsnitt i RMarkdown-filerna körs beroende på vilken som är utdatafilen. Följande exempel i `index.rmd` illustrerar detta:

```md
Du läser just nu `r if(knitr::is_latex_output()) { "PDF-versionen" } else if(knitr::is_html_output()) { "HTML-versionen" }` skapad automatiskt `r Sys.Date()`.
```

- `is_latex_output()` returnerar sant om utdatafil är LaTeX/PDF.
- `is_html_output()` returnerar sant om utdatafil är HTML eller EPUB.