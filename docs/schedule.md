---
id: schedule
title: Schedule
---

# Schedule

Flyball Manager generates tournament schedules using official NAFA racing schedules for round-robin tournaments. Our algorithms ensure teams are allotted the most distance between races. The schedule uses data entered from team entries and divisions to quickly generate the most efficient schedule for your tournament.


## Creating a Schedule

![Schedule Screen](/img/schedule-create.svg)
### Initial setup

Prior to creating a schedule, a tournament must be created with team entries and divisions. Please see the tournament section to learn how to get started with a tournament. Once teams and divisions are created, review the tournament Seed Chart to verify teams and divisions are set up as intended.

### Start order

The first step in generating a schedule is determining the start order for divisions. This is the order that the first race for divisions follow. The division at the top of the list will be scheduled for the first race. Each division after will follow in the schedule in the order listed.

### Reversing Lanes

Round-robin tournaments the default lane selection follows the lanes published in the NAFA schedules. When hosting 2 single day tournaments it is desirable to swap the lanes for Day 2. 

Select the checkbox "Reverse Round Robin Lanes" to set the lanes to the reverse as published in the NAFA schedules. This allows teams to have a flow across the 2 days more in line with a multi-day tournament.

## Tournament Schedule Screen

![Schedule Screen](/img/schedule-screen.svg)

The schedule shows the details of all races happening for the tournament. This screen allows you to see the details of each race including left and right lane competitors, division, breakout, format and time both club and team have for breaks prior and coming up.

### Schedule Row

Each row contains information about individual races. Let's break down each section of a single row of the race schedule.

![Schedule Row](/img/schedule-row.svg)

The arrows allow the race to be moved to the previous race or next race.

To the right of the arrows is the race number.

Next are details for the teams in the left and right lanes.

![Division](/img/schedule-division.svg)

Top number details the classification and division of the team. Bottom number is the breakout for the division.

**4/8**

The first number is the number of races the team has raced. Second number is the total number of races in the round-robin schedule for the team.

**FM**

Team Club abbreviation.

**Funk You Up!**

Team name

**4/4**

Race Format

The numbers in the schedule detail the left and right lane, previous and next race minutes for the club or team, top row is previous, bottom is next, left column is the left team, right column for right team. Here's an example.

![Division](/img/schedule-prev-next.svg)

The 80 above represents the left lane team races next in 80 minutes.

The 32 above represents the left lane club races next in 16 minutes.

The 90+ indicates the right team raced previously over 90 minutes ago.

The settings screen offers an option to change the number of minutes for both clubs and teams indicating a conflict. Races that meet these criteria are hilighted in red. Reasonable defaults are provided for these settings.

### Schedule Optimization

The Scheduling engine optimizes the generated schedule. Flyball Manager spaces teams out as much as possible, some effort is made to spread clubs out. After optimization, it is still possible for races to result in inadequate time off for clubs and/or teams. These races are considered to be in "conflict".

Teams are required by rule to have a minimum rest time. The numbers on each schedule row indicate how many minutes a club/team has had for rest between races.

While Flyball Manager does the best it can, conflicts will still exist in the schedule. Manual intervention will be required to adjust the schedule. Remember that our scheduling engine has made many iterations to arrive at what is believed to be a well optimized schedule.

Changing the start order of divisions will result in a different schedule. Many times it is better to vary the start order before making manual adjustments to a generated schedule.

### Limitations

The scheduler supports round-robin tournaments only.

Importing a schedule is not allowed with Flyball Manager.
