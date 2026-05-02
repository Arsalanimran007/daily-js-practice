// structuredClone — deep copy

const original = { name: "Arsalan", address: { city: "Karachi" } }

// Spread — shallow copy (nested change hota hai)
const shallow = { ...original }
shallow.address.city = "Lahore"
console.log(original.address.city) // "Lahore" ← original bhi badla ❌

// structuredClone — deep copy (original safe)
const original2 = { name: "Arsalan", address: { city: "Karachi" } }
const deep = structuredClone(original2)
deep.address.city = "Lahore"
console.log(original2.address.city) // "Karachi" ← safe ✅
