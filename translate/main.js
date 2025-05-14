window.translate = async function (text, sourceLang = 'auto', targetLang = 'en') {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data[0][0][0]; // Hasil terjemahan
  } catch (error) {
    console.error('Translation failed:', error);
    return 'Translation failed.';
  }
};
