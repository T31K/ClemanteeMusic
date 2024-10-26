$(document).ready(function () {
  const scales = {
    grade_1: {
      level_1: {
        requiredCount: 3,
        items: [
          {
            key: "C",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "1 octave",
          },
          {
            key: "G",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left hand",
            octave: "2 octaves",
          },
          {
            key: "F",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Right hand",
            octave: "2 octaves",
          },
          {
            key: "A",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Left hand",
            octave: "2 octaves",
          },
          {
            key: "D",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Right hand",
            octave: "2 octaves",
          },
        ],
      },
      level_2: {
        requiredCount: 1,
        items: [
          {
            key: "C",
            type: "major",
            motion: "Contrary Motion",
            hands: "Hands together",
            octave: "1 octave",
          },
        ],
      },
      level_3: {
        requiredCount: 2,
        items: [
          {
            key: "G",
            type: "major",
            motion: "Arpeggios",
            hands: "Left hand",
            octave: "1 octave",
          },
          {
            key: "A",
            type: "minor",
            motion: "Arpeggios",
            hands: "Right hand",
            octave: "1 octave",
          },
        ],
      },
    },
    grade_2: {
      level_1: {
        requiredCount: 2,
        items: [
          {
            key: "G",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "A",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "D",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_2: {
        requiredCount: 2,
        items: [
          {
            key: "D",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "G",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
        ],
      },
      level_3: {
        requiredCount: 1,
        items: [
          {
            key: "C",
            type: "major",
            motion: "Contrary Motion",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_4: {
        requiredCount: 2,
        items: [
          {
            key: "D",
            type: "chromatic",
            motion: "Scales",
            hands: "Left hand",
            octave: "1 octave",
          },
          {
            key: "D",
            type: "chromatic",
            motion: "Scales",
            hands: "Right hand",
            octave: "1 octave",
          },
        ],
      },
      level_5: {
        requiredCount: 2,
        items: [
          {
            key: "D",
            type: "major",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "minor",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "G",
            type: "minor",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
        ],
      },
    },
    grade_3: {
      level_1: {
        requiredCount: 2,
        items: [
          {
            key: "D",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "G",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_2: {
        requiredCount: 2,
        items: [
          {
            key: "Bb",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "C",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
        ],
      },
      level_3: {
        requiredCount: 1,
        items: [
          {
            key: "E",
            type: "major",
            motion: "Contrary Motion Scales",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_4: {
        requiredCount: 1,
        items: [
          {
            key: "D",
            type: "chromatic",
            motion: "Scales (Contrary Motion)",
            hands: "Hands together",
            octave: "1 octave",
          },
        ],
      },
      level_5: {
        requiredCount: 2,
        items: [
          {
            key: "D",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "G",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_6: {
        requiredCount: 2,
        items: [
          {
            key: "Bb",
            type: "major",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "minor",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "C",
            type: "minor",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
        ],
      },
    },
    grade_4: {
      level_1: {
        requiredCount: 2,
        items: [
          {
            key: "Bb",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "C",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_2: {
        requiredCount: 3,
        items: [
          {
            key: "B",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "Ab",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "F",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
        ],
      },
      level_3: {
        requiredCount: 1,
        items: [
          {
            key: "Eb",
            type: "major",
            motion: "Contrary Motion Scales",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "C",
            type: "minor",
            motion: "Contrary Motion Scales",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_4: {
        requiredCount: 1,
        items: [
          {
            key: "F#",
            type: "chromatic",
            motion: "Scales",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_5: {
        requiredCount: 2,
        items: [
          {
            key: "Bb",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "C",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_6: {
        requiredCount: 3,
        items: [
          {
            key: "B",
            type: "major",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "Ab",
            type: "major",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "minor",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
          {
            key: "F",
            type: "minor",
            motion: "Arpeggios",
            hands: "Left or right hand",
            octave: "2 octaves",
          },
        ],
      },
    },
    grade_5: {
      level_1: {
        requiredCount: 6,
        items: [
          {
            key: "A",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Db",
            type: "major",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "C#",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "G#",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Eb",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Bb",
            type: "minor",
            motion: "Scales (similar motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_2: {
        requiredCount: 2,
        items: [
          {
            key: "Ab",
            type: "major",
            motion: "Scales (staccato)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F",
            type: "minor",
            motion: "Scales (staccato)",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_3: {
        requiredCount: 1,
        items: [
          {
            key: "Db",
            type: "major",
            motion: "Contrary Motion Scales",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "C#",
            type: "minor",
            motion: "Contrary Motion Scales",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_4: {
        requiredCount: 1,
        items: [
          {
            key: "F#",
            type: "chromatic",
            motion: "Scales (Contrary Motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "A#",
            type: "chromatic",
            motion: "Scales (Contrary Motion)",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_5: {
        requiredCount: 6,
        items: [
          {
            key: "A",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Db",
            type: "major",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F#",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "C#",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "G#",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Eb",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "Bb",
            type: "minor",
            motion: "Arpeggios",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_6: {
        requiredCount: 2,
        items: [
          {
            key: "B",
            type: "Diminished 7th",
            motion: "Arpeggios",
            hands: "Left hand",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "Diminished 7th",
            motion: "Arpeggios",
            hands: "Right hand",
            octave: "2 octaves",
          },
        ],
      },
    },
    grade_6: {
      level_1: {
        requiredCount: 2,
        items: [
          {
            key: "D",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "D",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A♭",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A♭",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
      },
      level_2: {
        requiredCount: 4,
        items: [
          {
            key: "D",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "D",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "D",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "D",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G#",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G#",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G#",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G#",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
      },
      level_3: {
        requiredCount: 4,
        items: [
          {
            key: "D",
            type: "major",
            motion: "Contrary Motion",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F",
            type: "major",
            motion: "Contrary Motion",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "A♭",
            type: "major",
            motion: "Contrary Motion",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "D",
            type: "harmonic minor",
            motion: "Contrary Motion",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "F",
            type: "harmonic minor",
            motion: "Contrary Motion",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "G#",
            type: "harmonic minor",
            motion: "Contrary Motion",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "B",
            type: "harmonic minor",
            motion: "Contrary Motion",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
      },
      level_4: {
        requiredCount: 1,
        items: [
          {
            key: "G#",
            type: "chromatic",
            motion: "Scales (Contrary Motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "chromatic",
            motion: "Scales (Contrary Motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
      },
      level_5: {
        requiredCount: 4,
        items: [
          {
            key: "D",
            type: "major",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "major",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A♭",
            type: "major",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "major",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "D",
            type: "minor",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F",
            type: "minor",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G#",
            type: "minor",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "B",
            type: "minor",
            motion: "Arpeggios",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
      },
    },
    grade_7: {
      level_1: {
        items: [
          {
            key: "Db",
            type: "major",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Db",
            type: "major",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "major",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "major",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "major",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "major",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 2,
      },
      level_2: {
        items: [
          {
            key: "C#",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C#",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C#",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C#",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "harmonic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "melodic minor",
            motion: "Similar Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 4,
      },
      level_3: {
        items: [
          {
            key: "Db",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Db",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "major",
            motion: "Scales a 3rd apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 2,
      },
      level_4: {
        items: [
          {
            key: "Db",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Db",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "G",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Bb",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 2,
      },
      level_5: {
        items: [
          {
            key: "G",
            type: "major",
            motion: "Scale in 3rds",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "G",
            type: "major",
            motion: "Scale in 3rds",
            style: "staccato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Scale in 3rds",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "major",
            motion: "Scale in 3rds",
            style: "staccato",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
        requiredCount: 1,
      },
      level_6: {
        items: [
          {
            key: "C#",
            type: "chromatic",
            motion: "Chromatic Scales Contrary (starting on)",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
          {
            key: "E",
            type: "chromatic",
            motion: "Chromatic Scales Contrary (starting on)",
            style: "legato",
            hands: "Hands together",
            octave: "2 octaves",
          },
        ],
        requiredCount: 1,
      },
    },
    grade_8: {
      level_1: {
        items: [
          {
            key: "C",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 2,
      },
      level_2: {
        items: [
          {
            key: "C",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "harmonic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "melodic minor",
            motion: "Scales (similar motion)",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 4,
      },
      level_3: {
        items: [
          {
            key: "C",
            type: "major",
            motion: "Scales a 6th apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C",
            type: "major",
            motion: "Scales a 6th apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Scales a 6th apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Scales a 6th apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Scales a 6th apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Scales a 6th apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Scales a 6th apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Scales a 6th apart",
            style: "staccato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 2,
      },
      level_4: {
        items: [
          {
            key: "C",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "Eb",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "F#",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "A",
            type: "major",
            motion: "Contrary Motion Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 2,
      },
      level_5: {
        items: [
          {
            key: "Eb",
            type: "major",
            motion: "Scale in 3rds",
            style: "legato",
            hands: "Hands separate",
            octave: "2 octaves",
          },
          {
            key: "C",
            type: "major",
            motion: "Scales in 6ths",
            style: "staccato",
            hands: "Hands separate",
            octave: "2 octaves",
          },
        ],
        requiredCount: 2,
      },
      level_6: {
        items: [
          {
            key: "Eb",
            type: "major",
            motion: "Chromatic Scale Major 6th Apart",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
          {
            key: "C",
            type: "major",
            motion: "Whole Tone Scales",
            style: "legato",
            hands: "Hands together",
            octave: "4 octaves",
          },
        ],
        requiredCount: 2,
      },
    },
  };

  let currentGrade = "grade_1";
  let currentLevelIndex = 0;
  let selectedItems = [];

  function getCurrentLevels() {
    return Object.keys(scales[currentGrade]);
  }

  function humanize(str) {
    return str
      .replace(/^[\s_]+|[\s_]+$/g, "")
      .replace(/[_\s]+/g, " ")
      .replace(/^[a-z]/, function (m) {
        return m.toUpperCase();
      });
  }

  function renderProgressIndicator() {
    const levels = getCurrentLevels();
    $("#progress-indicator").empty();

    if (currentLevelIndex < levels.length) {
      // Current Level
      const currentMotionName = scales[currentGrade][
        levels[currentLevelIndex]
      ].items[0].motion.replace(/\s*\(.*?\)\s*/g, "");
      const currentElement = $(
        `<div class="level active">Current: ${currentMotionName}</div>`
      );
      $("#progress-indicator").append(currentElement);

      // Next Level (if available)
      if (currentLevelIndex + 1 < levels.length) {
        const nextMotionName = scales[currentGrade][
          levels[currentLevelIndex + 1]
        ].items[0].motion.replace(/\s*\(.*?\)\s*/g, "");
        const nextElement = $(
          `<div class="level inactive">Next: ${nextMotionName}</div>`
        );
        $("#progress-indicator").append(nextElement);
      }
    }
  }

  function displayCurrentLevel() {
    const levels = getCurrentLevels();

    if (currentLevelIndex >= levels.length) {
      alert("All levels completed!");
      currentLevelIndex = 0;
      selectedItems = [];
      renderProgressIndicator();
      return;
    }

    const currentLevelName = levels[currentLevelIndex];
    const levelContent = scales[currentGrade][currentLevelName].items;
    const itemsToShow = scales[currentGrade][currentLevelName].requiredCount;

    if (selectedItems.length < itemsToShow) {
      const availableItems = levelContent.filter(
        (item) => !selectedItems.includes(item)
      );
      const randomItem =
        availableItems[Math.floor(Math.random() * availableItems.length)];
      selectedItems.push(randomItem);

      // Update the HTML with item details, including style if present and grade is 6
      $("#key").text(randomItem.key);
      $("#type").text(randomItem.type);
      $("#motion").text(randomItem.motion);
      $("#hands").text(randomItem.hands);
      $("#octave").text(randomItem.octave);

      // Only display style if the current grade is 6
      if (Number(currentGrade[6]) >= 6) {
        $("#style").text(randomItem.style).show();
      } else {
        $("#style").hide();
      }

      // Set hand visibility based on "hands" property
      $("#left-hand").toggleClass(
        "opacity-30",
        randomItem.hands !== "Hands together" &&
          randomItem.hands !== "Left hand"
      );
      $("#left-hand").toggleClass(
        "opacity-100",
        randomItem.hands === "Hands together" ||
          randomItem.hands === "Left hand"
      );
      $("#right-hand").toggleClass(
        "opacity-30",
        randomItem.hands !== "Hands together" &&
          randomItem.hands !== "Right hand"
      );
      $("#right-hand").toggleClass(
        "opacity-100",
        randomItem.hands === "Hands together" ||
          randomItem.hands === "Right hand"
      );
    }

    if (selectedItems.length === itemsToShow) {
      currentLevelIndex++;
      selectedItems = [];
      renderProgressIndicator();
    }
  }

  $("#randomize-btn").click(function () {
    displayCurrentLevel();
  });

  $("select[name='level']").change(function () {
    const selectedGrade = $(this).val();
    if (selectedGrade !== currentGrade) {
      currentGrade = selectedGrade;
      currentLevelIndex = 0;
      selectedItems = [];
      alert(`Changed to ${humanize(currentGrade)}`);
      renderProgressIndicator();
      displayCurrentLevel();
    }
  });

  renderProgressIndicator();
  displayCurrentLevel();
});
