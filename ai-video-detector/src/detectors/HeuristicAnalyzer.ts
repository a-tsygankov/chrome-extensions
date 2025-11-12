export async function analyzeFrame(base64Frame: string) {
  const res = await fetch('http://localhost:5123/api/detect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ base64Frame })
  });
  return res.json();
}