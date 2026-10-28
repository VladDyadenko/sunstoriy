export const decodeUTF8 = input => {
  const bytes = new Uint8Array(input.length);
  for (let i = 0; i < input.length; i++) {
    bytes[i] = input.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
};
