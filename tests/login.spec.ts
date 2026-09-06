import { test, expect } from '@playwright/test';

test('User can login with valid credentials', async ({ page }) => {

  // Open OrangeHRM
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Enter username
  await page.getByPlaceholder('Username').fill('Admin');

  // Enter password
  await page.getByPlaceholder('Password').fill('admin123');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);
    await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();
});