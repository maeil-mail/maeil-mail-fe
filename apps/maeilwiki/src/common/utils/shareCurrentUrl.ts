export const shareCurrentUrl = async () => {
  if (typeof window === 'undefined') {
    throw new Error('클라이언트 환경에서만 실행 가능합니다.');
  }

  const currentHref = location.href;

  const sharedData = {
    title: '매일위키 - 기술 면접 커뮤니티',
    url: currentHref,
  };

  try {
    if (navigator.canShare?.(sharedData)) {
      await navigator.share(sharedData);
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(currentHref);
      alert('링크가 복사되었습니다. 붙여넣기를 통해 공유해 주세요!');
    } else {
      copyOnOldBrowser(currentHref);
      alert('링크가 복사되었습니다. 붙여넣기를 통해 공유해 주세요!');
    }
  } catch {
    // 공유 취소 시 에러가 발생하지 않도록 빈 catch 블록을 두었습니다.
  }
};

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
