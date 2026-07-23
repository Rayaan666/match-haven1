import('lucide-react').then(lucide => {
  console.log('Total exports:', Object.keys(lucide).length);
  console.log('Social exports:', Object.keys(lucide).filter(k => 
    k.toLowerCase().includes('git') || 
    k.toLowerCase().includes('twit') || 
    k.toLowerCase().includes('link') || 
    k.toLowerCase().includes('insta') || 
    k.toLowerCase().includes('face')
  ));
});
