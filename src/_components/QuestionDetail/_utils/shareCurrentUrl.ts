const shareCurrentUrl = async () => {
  if (typeof window === 'undefined') {
    throw new Error('클라이언트 환경에서만 실행 가능합니다.');
  }

  const currentHref = location.href;

  const sharedData = {
    title: '매일메일 - 기술 면접 질문 구독 서비스',
    url: currentHref,
  };

  if (navigator.canShare?.(sharedData)) {
    await navigator.share(sharedData);
  } else if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(currentHref);
    alert('링크가 복사되었습니다. 붙여넣기를 통해 공유해 주세요!');
  } else {
    copyOnOldBrowser(currentHref);
    alert('링크가 복사되었습니다. 붙여넣기를 통해 공유해 주세요!');
  }
};

export default shareCurrentUrl;

const copyOnOldBrowser = (text: string) => {
  const tempInput = document.createElement('input');
  tempInput.style.position = 'absolute';
  tempInput.style.opacity = '0';
  tempInput.value = text;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, text.length);

  document.execCommand('copy');

  document.body.removeChild(tempInput);
};
