const animals = [
  { id: 1, name: "모찌", species: "레오파드 게코",   morph: "마크 스노우", sex: "암",     weight: 48,   daysSinceFed: 3 },
  { id: 2, name: "크림", species: "크레스티드 게코", morph: "할리퀸",     sex: "수",     weight: 36,   daysSinceFed: 11 },
  { id: 3, name: "탄이", species: "볼파이톤",       morph: "파스텔",     sex: "수",     weight: 1250, daysSinceFed: 16 },
  { id: 4, name: "라떼", species: "레오파드 게코",   morph: "탠저린",     sex: "암",     weight: 22,   daysSinceFed: 2 },
  { id: 5, name: "호두", species: "크레스티드 게코", morph: "달마시안",   sex: "미구분", weight: 9,    daysSinceFed: 4 },
  { id: 6, name: "솔",   species: "볼파이톤",       morph: "노멀",       sex: "암",     weight: 1680, daysSinceFed: 22 },
]
const recordfeeding = (list,id) => list.map(a => a.id === id ? {...a, daysSinceFed:0} : a)
const after = recordfeeding(animals,6)
console.log(after[5].daysSinceFed)
console.log(animals[5].daysSinceFed)