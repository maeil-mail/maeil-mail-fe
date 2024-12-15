import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const expectModalOpened = async (page: Page) => {
  await expect(page.locator('h2', { hasText: '매일메일 구독' })).toBeVisible();
};

const expectModalClosed = async (page: Page) => {
  await expect(page.locator('h2', { hasText: '매일메일 구독' })).not.toBeVisible();
};

const openSubscribeModal = async (page: Page) => {
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
});
