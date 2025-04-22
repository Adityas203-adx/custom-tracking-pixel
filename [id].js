
export default function handler(req, res) {
  const { id } = req.query;

  const script = `
    (function(){
      // Fire your custom pixel
      const img = new Image();
      img.src = 'https://www.digitaladvice360.com/api/track?id=${id}&event=pageview';

      // Google Analytics 4 (optional)
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX'); // Replace with your GA4 ID

      gtag('event', 'custom_pageview', {
        user_id: '${id}'
      });
    })();
  `;

  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(script);
}
