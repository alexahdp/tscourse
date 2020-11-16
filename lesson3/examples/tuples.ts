// Tuple

let numbers = [1, 6, 7, 3];  // number[]

let vec2: [number, number] = [1, 5];

let vec3: [number, number, number] = [1, 5, 5];

vec2 = vec3; // error (length)
vec2 = numbers; // error (0 and 1 elements could not exist)
vec2 = [5, 7]; // ok

// Параметр является парой (latitude, longitude).
function normalize(vec2: [number, number]) {
}

normalize([10, 20]); // ok

const loc = [10, 20];
panTo(loc); // error

// исправления:
// 1) const loc: [number, number] = [10, 20];
// 2) const loc = [10, 20] as const;
