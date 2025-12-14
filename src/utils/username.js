export function generateUsername() {
  const adjectives = [
    "Calm", "Quiet", "Gentle", "Kind", "Brave", "Soft", "Bright", "Peaceful"
  ];

  const nouns = [
    "Fox", "Bear", "Owl", "Wave", "Leaf", "Moon", "River", "Cloud"
  ];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(1000 + Math.random() * 9000);

  return `${adj}${noun}${number}`;
}
