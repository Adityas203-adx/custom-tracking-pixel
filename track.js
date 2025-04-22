
export default async function handler(req, res) {
  const { id, event = 'pageview' } = req.query;

  console.log(`[TRACK] ${event} for ID: ${id} at ${new Date().toISOString()}`);

  // Optional: Send to DB or webhook
  // await fetch('https://your-backend.com/log', { ... });

  // Transparent 1x1 GIF
  const pixel = Buffer.from(
    'R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
    'base64'
  );

  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).send(pixel);
}
