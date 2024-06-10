// chords.js
const chords = {
    'C': {
        'major': [
            [60, 64, 67, 71], // Cmaj7
            [62, 65, 69, 72], // Dm7
            [64, 67, 71, 74], // Em7
            [65, 69, 72, 76], // Fmaj7
            [67, 71, 74, 77], // G7
            [69, 72, 76, 79], // Am7
            [71, 74, 77, 81]  // Bm7b5
        ],
        'minor': [
            [60, 63, 67, 70], // Cm7
            [62, 65, 68, 72], // Dm7b5
            [63, 67, 70, 73], // Ebmaj7
            [65, 68, 72, 75], // Fm7
            [67, 70, 74, 77], // Gm7
            [68, 72, 75, 79], // Abmaj7
            [70, 73, 77, 80]  // Bb7
        ]
    },
    'D': {
        'major': [
            [62, 66, 69, 73], // Dmaj7
            [64, 67, 71, 74], // Em7
            [66, 69, 73, 76], // F#m7
            [67, 71, 74, 78], // Gmaj7
            [69, 73, 76, 79], // A7
            [71, 74, 78, 81], // Bm7
            [73, 76, 79, 83]  // C#m7b5
        ],
        'minor': [
            [62, 65, 69, 72], // Dm7
            [64, 67, 70, 74], // Em7b5
            [66, 69, 73, 76], // Fmaj7
            [67, 70, 74, 77], // Gm7
            [69, 72, 76, 79], // Am7
            [71, 74, 77, 81], // Bbmaj7
            [73, 76, 80, 83]  // C7
        ]
    },
    'E': {
        'major': [
            [64, 68, 71, 75], // Emaj7
            [66, 69, 73, 76], // F#m7
            [68, 71, 75, 78], // G#m7
            [69, 73, 76, 80], // Amaj7
            [71, 75, 78, 81], // B7
            [73, 76, 80, 83], // C#m7
            [75, 78, 81, 85]  // D#m7b5
        ],
        'minor': [
            [64, 67, 71, 74], // Em7
            [66, 69, 72, 76], // F#m7b5
            [68, 71, 75, 78], // Gmaj7
            [69, 72, 76, 79], // Am7
            [71, 74, 78, 81], // Bm7
            [73, 76, 79, 83], // Cmaj7
            [75, 78, 82, 85]  // D7
        ]
    },
    'F': {
        'major': [
            [65, 69, 72, 76], // Fmaj7
            [67, 70, 74, 77], // Gm7
            [69, 72, 76, 79], // Am7
            [70, 74, 77, 81], // Bbmaj7
            [72, 76, 79, 83], // C7
            [74, 77, 81, 84], // Dm7
            [76, 79, 83, 86]  // Em7b5
        ],
        'minor': [
            [65, 68, 72, 75], // Fm7
            [67, 70, 73, 77], // Gm7b5
            [68, 72, 75, 78], // Abmaj7
            [70, 73, 77, 80], // Bbm7
            [72, 75, 79, 82], // Cm7
            [73, 77, 80, 84], // Dbmaj7
            [75, 78, 82, 85]  // Eb7
        ]
    },
    'G': {
        'major': [
            [67, 71, 74, 78], // Gmaj7
            [69, 72, 76, 79], // Am7
            [71, 74, 78, 81], // Bm7
            [72, 76, 79, 83], // Cmaj7
            [74, 78, 81, 84], // D7
            [76, 79, 83, 86], // Em7
            [78, 81, 84, 88]  // F#m7b5
        ],
        'minor': [
            [67, 70, 74, 77], // Gm7
            [69, 72, 75, 79], // Am7b5
            [70, 74, 77, 80], // Bbmaj7
            [72, 75, 79, 82], // Cm7
            [74, 77, 81, 84], // Dm7
            [75, 79, 82, 86], // Ebmaj7
            [77, 80, 84, 87]  // F7
        ]
    },
    'A': {
        'major': [
            [69, 73, 76, 80], // Amaj7
            [71, 74, 78, 81], // Bm7
            [73, 76, 80, 83], // C#m7
            [74, 78, 81, 85], // Dmaj7
            [76, 80, 83, 86], // E7
            [78, 81, 85, 88], // F#m7
            [80, 83, 86, 90]  // G#m7b5
        ],
        'minor': [
            [69, 72, 76, 79], // Am7
            [71, 74, 77, 81], // Bm7b5
            [72, 76, 79, 82], // Cmaj7
            [74, 77, 81, 84], // Dm7
            [76, 79, 83, 86], // Em7
            [77, 81, 84, 88], // Fmaj7
            [79, 82, 86, 89]  // G7
        ]
    },
    'B': {
        'major': [
            [71, 75, 78, 82], // Bmaj7
            [73, 76, 80, 83], // C#m7
            [75, 78, 82, 85], // D#m7
            [76, 80, 83, 87], // Emaj7
            [78, 82, 85, 88], // F#7
            [80, 83, 87, 90], // G#m7
            [82, 85, 88, 92]  // A#m7b5
        ],
        'minor': [
            [71, 74, 78, 81], // Bm7
            [73, 76, 79, 83], // C#m7b5
            [74, 78, 81, 84], // Dmaj7
            [76, 79, 83, 86], // Em7
            [78, 81, 85, 88], // F#m7
            [79, 83, 86, 90], // Gmaj7
            [81, 84, 88, 91]  // A7
        ]
    }
};
    // Add other key definitions here

function getRandomChord(key, scaleType) {
    const scaleChords = chords[key][scaleType];
    return scaleChords[Math.floor(Math.random() * scaleChords.length)];
}
