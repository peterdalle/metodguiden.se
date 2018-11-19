library(tidyverse)
library(scales)

df <-tribble(~category, ~value,
             "Kategori ett", 30,
             "Kategori två", 20,
             "Kategori tre", 50)

df %>% 
  ggplot(aes("", value, fill=category)) +
  geom_bar(width = 1, stat = "identity") +
  scale_fill_manual(values=c("#999999", "#E69F00", "#56B4E9")) +
  labs(title = "Pajdiagram",
       x = NULL,
       y = NULL,
       fill = NULL,
       color = NULL) +
  coord_polar("y", start=0, direction = 1) +
  theme_void()