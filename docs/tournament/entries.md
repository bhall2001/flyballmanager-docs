---
id: entries
title: Entries
---

# Entries

![Tournament Entries](/img/tournament-entries-main.png)

## Import entries

Entries can be imported from a .csv file. Importing entries creates the clubs and teams for the tournament.

### File format

The entries file .csv is required to have a specific format. When importing an entries file, please ensure the fields are defined to this specification.

:::caution
**DO NOT** include field names on the first row of the file.
:::

Field definitions:

tournament #, NAFA club #, club name, classification, team name, seed time

Sample data:

```
20000001,1087,Carolina Overdrive,Regular,High Octane,21
20000001,1085,"Ready, Set, Ruckus!",Open,Ruck 'N' Roll,21.2
20000001,1085,"Ready, Set, Ruckus!",Regular,Ruck Stars,21
20000001,1077,Rabid Fire,Open,Hydrophobiacs,19.8
20000001,1077,Rabid Fire,Regular,Pyromaniacs,21
```

:::note
If a club or team name contains commas, it is required that the name be enclosed in double quotes. See example above.
:::

