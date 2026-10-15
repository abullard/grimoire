# STACK
- [>] ship CSV export
	- [x] why is date column UTC?
		- [!] time zone field stripped in mapper
		- [<] mapper has 3 copies of tz logic  
- [>] write export tests
	- [?] integration or unit?
		- [!] full-stack mocks are broken 
# NEXT (for tomorrow)
- [>] fix full-stack tests, run single broken test with `pnpm test:integration` 
# LOT

| Item                             | Tallies |
| -------------------------------- | ------- |
| rename `UserCtx` -> `SessionCtx` | 111     |
| flaky billing test               | 1       |
| mapper: dedup tz logic           |         |

