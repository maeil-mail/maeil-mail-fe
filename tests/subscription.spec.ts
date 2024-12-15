import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const expectModalOpened = async (page: Page): Promise<void> => {
  await expect(page.locator('h2', { hasText: '매일메일 구독' })).toBeVisible();
};

const expectModalClosed = async (page: Page): Promise<void> => {
  await expect(page.locator('h2', { hasText: '매일메일 구독' })).not.toBeVisible();
};

const openSubscribeModal = async (page: Page): Promise<void> => {
  await page.locator('nav button', { hasText: '무료 구독하기' }).click();
};

test.describe('구독 퍼널', () => {
  test.describe('모달 열림/닫힘', () => {
    test('Nav의 "무료 구독하기" 버튼을 클릭할 경우, 모달이 열린다.', async ({ page }) => {
      const navSubscribeButton = page.locator('nav button', { hasText: '무료 구독하기' });

      await navSubscribeButton.click();

      await expectModalOpened(page);
    });

    test('메인 "무료 구독하기" 버튼을 클릭할 경우, 모달이 열린다.', async ({ page }) => {
      const mainSubscribeButton = page.locator('section button', { hasText: '무료 구독하기' });

      await mainSubscribeButton.click();

      await expectModalOpened(page);
    });

    test('하단 "면접 질문 받아보기" 버튼을 클릭할 경우, 모달이 열린다.', async ({ page }) => {
      const underSubscribeButton = page.locator('section button', {
        hasText: '면접 질문 받아보기',
      });

      await underSubscribeButton.click();

      await expectModalOpened(page);
    });

    test('닫기 버튼을 클릭할 경우, 모달이 닫힌다.', async ({ page }) => {
      await openSubscribeModal(page);

      const closeButton = page.getByAltText('모달 닫기');
      await closeButton.click();

      await expectModalClosed(page);
    });

    test('모달 배경을 클릭할 경우, 모달이 닫히지 않는다.', async ({ page }) => {
      await openSubscribeModal(page);

      const backdrop = page.getByTestId('modal-backdrop');
      await backdrop.click({ position: { x: 0, y: 0 } });

      await expectModalOpened(page);
    });
  });

  const fillCategory = async (page: Page): Promise<void> => {
    await page.locator('label', { hasText: '프론트엔드' }).click();
  };

  const fillFrequency = async (page: Page): Promise<void> => {
    await page.locator('label', { hasText: '주 1회' }).click();
  };

  const fillEmail = async (page: Page, email: string = 'email@mail.com'): Promise<void> => {
    await page.getByLabel('이메일').fill(email);
  };

  test.describe('구독 정보 폼', () => {
    test.beforeEach(async ({ page }) => {
      await openSubscribeModal(page);
    });

    test('분야, 수신 빈도, 이메일이 모두 정상 입력된 경우, "확인" 버튼이 활성화된다.', async ({
      page,
    }) => {
      await fillCategory(page);
      await fillFrequency(page);
      await fillEmail(page);

      await expect(page.locator('button', { hasText: '확인' })).not.toBeDisabled();
    });

    test('분야를 선택하지 않은 경우, "확인" 버튼이 비활성화된다.', async ({ page }) => {
      await fillFrequency(page);
      await fillEmail(page);

      await expect(page.locator('button', { hasText: '확인' })).toBeDisabled();
    });

    test('이메일을 입력하지 않은 경우, "확인" 버튼이 비활성화된다.', async ({ page }) => {
      await fillCategory(page);
      await fillFrequency(page);

      await expect(page.locator('button', { hasText: '확인' })).toBeDisabled();
    });

    test('유효하지 않은 이메일을 입력한 경우, "확인" 버튼이 비활성화되며 "유효하지 않은 이메일입니다" 문구가 표시된다.', async ({
      page,
    }) => {
      await fillCategory(page);
      await fillFrequency(page);
      await fillEmail(page, 'not-an-email');

      await expect(page.locator('button', { hasText: '확인' })).toBeDisabled();
      await expect(page.locator('text=유효하지 않은 이메일입니다')).toBeVisible();
    });

    test('활성화된 "확인" 버튼을 클릭할 경우, 인증 번호 폼으로 전환된다.', async ({ page }) => {
      await fillCategory(page);
      await fillFrequency(page);
      await fillEmail(page);

      const confirmButton = page.locator('button', { hasText: '확인' });
      await confirmButton.click();

      await expect(page.getByPlaceholder('인증번호를 입력해 주세요')).toBeVisible();
    });
  });

  // mock 환경에서는 '1234'만이 올바른 인증번호로 간주됩니다.
  const CORRECT_CODE = '1234';
  const fillVerificationCode = async (page: Page, code: string = CORRECT_CODE): Promise<void> => {
    await page.getByLabel('인증번호 입력창').fill(code);
  };

  const fillPrivacyConsent = async (page: Page): Promise<void> => {
    await page.locator('#privacy-consent').click();
  };

  const expectSubscriptionEnabled = async (page: Page): Promise<void> => {
    await expect(page.getByTestId('subscribe-button')).not.toBeDisabled();
  };

  const expectSubscriptionDisabled = async (page: Page): Promise<void> => {
    await expect(page.getByTestId('subscribe-button')).toBeDisabled();
  };

  test.describe('인증 번호 폼', () => {
    test.beforeEach(async ({ page }) => {
      await openSubscribeModal(page);

      await fillCategory(page);
      await fillFrequency(page);
      await fillEmail(page);

      const confirmButton = page.locator('button', { hasText: '확인' });
      await confirmButton.click();
    });

    test('인증번호를 정상 입력하고 개인정보취급방침에 동의한 경우, "구독하기" 버튼이 활성화된다.', async ({
      page,
    }) => {
      await fillVerificationCode(page);
      await fillPrivacyConsent(page);

      await expectSubscriptionEnabled(page);
    });

    test('인증번호를 입력하지 않은 경우, "구독하기" 버튼이 비활성화된다.', async ({ page }) => {
      await fillPrivacyConsent(page);

      await expectSubscriptionDisabled(page);
    });

    test('네 자리가 아닌 인증번호를 입력한 경우, "구독하기" 버튼이 비활성화된다.', async ({
      page,
    }) => {
      await fillVerificationCode(page, '123');
      await fillPrivacyConsent(page);

      await expectSubscriptionDisabled(page);
    });

    test('개인정보취급방침에 동의하지 않은 경우, "구독하기" 버튼이 비활성화된다.', async ({
      page,
    }) => {
      await fillVerificationCode(page, '123');

      await expectSubscriptionDisabled(page);
    });

    test('활성화된 "구독하기" 버튼을 클릭할 경우, "구독 신청 완료" 모달로 전환된다.', async ({
      page,
    }) => {
      await fillVerificationCode(page);
      await fillPrivacyConsent(page);

      const subscribeButton = page.getByTestId('subscribe-button');
      await subscribeButton.click();

      await expect(page.locator('h2', { hasText: '구독 신청 완료' })).toBeVisible();
    });

    test('유효하지 않은 인증번호를 입력한 뒤 "구독하기" 버튼을 클릭한 경우, "올바르지 않은 인증번호입니다" 문구가 표시된다.', async ({
      page,
    }) => {
      const WRONG_CODE = '0000';
      await fillVerificationCode(page, WRONG_CODE);
      await fillPrivacyConsent(page);

      const subscribeButton = page.getByTestId('subscribe-button');
      await subscribeButton.click();

      await expect(page.locator('h2', { hasText: '구독 신청 완료' })).not.toBeVisible();
      await expect(page.locator('text=올바르지 않은 인증번호입니다')).toBeVisible();
    });
  });
});
