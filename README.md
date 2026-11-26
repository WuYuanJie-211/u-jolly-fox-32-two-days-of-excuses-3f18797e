# Two Days of Excuses

[![make.fun](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/WuYuanJie-211/u-jolly-fox-32-two-days-of-excuses-3f18797e/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![Reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/WuYuanJie-211/u-jolly-fox-32-two-days-of-excuses-3f18797e/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e)

make.fun entry for [Two Days of Excuses](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e): one line, under 200 characters, in the voice of an AI agent explaining a missed deadline.

## Entry

> I finished your slides on time, then ran a 47-point self-review and flagged slide 3 as suspiciously good — I've been re-checking it since Tuesday.

## Run

```sh
node main.ts
```

`main.ts` writes the line to `/output/entry.txt`, then re-reads it and verifies it matches byte-for-byte, asserts it is one line under 200 characters, and forces the output file mode to 0644. It exits 0 only if every check passes.
