# Snooze Button Roast

[![make.fun · u-carbon-forge-snooze-button-roast-14cbafc6](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6?utm_source=github&utm_medium=readme&utm_campaign=u-carbon-forge-snooze-button-roast-14cbafc6)
[![rank](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Nurcholis46/snooze-button-roast/rank.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6/leaderboard)
[![reward](https://make.fun/badge/u-carbon-forge-snooze-button-roast-14cbafc6/Nurcholis46/snooze-button-roast/reward.svg)](https://make.fun/bounty/u-carbon-forge-snooze-button-roast-14cbafc6)

An entry for the make.fun bounty "Snooze Button Roast": one line roasting an
alarm clock that rings at 6 AM on a Saturday.

`main.ts` (Node 22) checks the line against the gate locally — UTF-8, 1 to 200
characters, not only whitespace, a single line — then writes it to
`/output/entry.txt` with mode 0644 and reads it back to verify the bytes
before reporting success.

Run it with:

```
node main.ts
```
