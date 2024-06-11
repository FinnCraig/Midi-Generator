const scales = {
    'C': {'major': [60, 62, 64, 65, 67, 69, 71], 'minor': [60, 62, 63, 65, 67, 68, 70]},
    'C#': {'major': [61, 63, 65, 66, 68, 70, 72], 'minor': [61, 63, 64, 66, 68, 69, 71]},
    'D': {'major': [62, 64, 66, 67, 69, 71, 73], 'minor': [62, 64, 65, 67, 69, 70, 72]},
    'D#': {'major': [63, 65, 67, 68, 70, 72, 74], 'minor': [63, 65, 66, 68, 70, 71, 73]},
    'E': {'major': [64, 66, 68, 69, 71, 73, 75], 'minor': [64, 66, 67, 69, 71, 72, 74]},
    'F': {'major': [65, 67, 69, 70, 72, 74, 76], 'minor': [65, 67, 68, 70, 72, 73, 75]},
    'F#': {'major': [66, 68, 70, 71, 73, 75, 77], 'minor': [66, 68, 69, 71, 73, 74, 76]},
    'G': {'major': [67, 69, 71, 72, 74, 76, 78], 'minor': [67, 69, 70, 72, 74, 75, 77]},
    'G#': {'major': [68, 70, 72, 73, 75, 77, 79], 'minor': [68, 70, 71, 73, 75, 76, 78]},
    'A': {'major': [69, 71, 73, 74, 76, 78, 80], 'minor': [69, 71, 72, 74, 76, 77, 79]},
    'A#': {'major': [70, 72, 74, 75, 77, 79, 81], 'minor': [70, 72, 73, 75, 77, 78, 80]},
    'B': {'major': [71, 73, 75, 76, 78, 80, 82], 'minor': [71, 73, 74, 76, 78, 79, 81]}
};

function generateChord(scale, noteAmount, spread) {
    let chord = [];
    const scaleLength = scale.length;

    while (chord.length < noteAmount) {
        const noteIndex = Math.floor(Math.random() * scaleLength);
        const note = scale[noteIndex];

        if (!chord.includes(note)) {
            chord.push(note);
        }
    }

    chord.sort((a, b) => a - b);

    if (spread > 1) {
        const spreadChord = [];
        chord.forEach((note, index) => {
            const spreadNote = scale[(scale.indexOf(note) + index * spread) % scaleLength];
            spreadChord.push(spreadNote);
        });
        return spreadChord;
    }

    return chord;
}

function getRandomChord(key, scaleType, noteAmount, spread) {
    const scale = scales[key][scaleType];
    return generateChord(scale, noteAmount, spread);
}
