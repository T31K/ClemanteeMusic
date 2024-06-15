$(document).ready(function () {
  const level1Scales = [
    {
      key: "C",
      type: "major",
      motion: "Similar Motion",
      hands: "Hands together",
      octave: "1 octave",
    },
    {
      key: "G",
      type: "major",
      motion: "",
      hands: "Left hand",
      octave: "2 octaves",
    },
    {
      key: "G",
      type: "major",
      motion: "",
      hands: "Right hand",
      octave: "2 octaves",
    },
    {
      key: "F",
      type: "major",
      motion: "",
      hands: "Left hand",
      octave: "2 octaves",
    },
    {
      key: "F",
      type: "major",
      motion: "",
      hands: "Right hand",
      octave: "2 octaves",
    },
    {
      key: "A",
      type: "minor",
      motion: "",
      hands: "Left hand",
      octave: "2 octaves",
    },
    {
      key: "A",
      type: "minor",
      motion: "",
      hands: "Right hand",
      octave: "2 octaves",
    },
    {
      key: "D",
      type: "minor",
      motion: "",
      hands: "Left hand",
      octave: "2 octaves",
    },
    {
      key: "D",
      type: "minor",
      motion: "",
      hands: "Right hand",
      octave: "2 octaves",
    },
    {
      key: "C",
      type: "major",
      motion: "Contrary Motion",
      hands: "Hands together",
      octave: "1 octave",
    },
    {
      key: "G",
      type: "major",
      motion: "Arpeggios",
      hands: "Left hand",
      octave: "1 octave",
    },
    {
      key: "G",
      type: "major",
      motion: "Arpeggios",
      hands: "Right hand",
      octave: "1 octave",
    },
    {
      key: "A",
      type: "minor",
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
  ];

  $("#randomize-btn").click(function () {
    const randomScale =
      level1Scales[Math.floor(Math.random() * level1Scales.length)];
    $("#key").text(randomScale.key);
    $("#type").text(randomScale.type);
    $("#octave").text(randomScale.octave);
    $("#hands").text(randomScale.hands);

    $("#left-hand").toggleClass(
      "opacity-30",
      randomScale.hands !== "Hands together" &&
        randomScale.hands !== "Left hand"
    );
    $("#left-hand").toggleClass(
      "opacity-100",
      randomScale.hands === "Hands together" ||
        randomScale.hands === "Left hand"
    );
    $("#right-hand").toggleClass(
      "opacity-30",
      randomScale.hands !== "Hands together" &&
        randomScale.hands !== "Right hand"
    );
    $("#right-hand").toggleClass(
      "opacity-100",
      randomScale.hands === "Hands together" ||
        randomScale.hands === "Right hand"
    );
  });
});
